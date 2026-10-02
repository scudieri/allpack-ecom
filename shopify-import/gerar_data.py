"""Regenera o catálogo do site (src/data.jsx PRODUCTS + src/shopify.jsx variant IDs) a partir de products_import.csv
e dos variant IDs reais da Shopify (SKU -> id)."""
import csv, json, re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
RAW = """ASE-DRP-03:50675436748993:1|ASE-DRP-02:50675436716225:1|ASE-DRP-01:50675436650689:1|ASE-HEMO-02:50675436617921:1|ASE-HEMO-01:50675436585153:1|ASE-KIT-11:50675436552385:1|ASE-KIT-10:50675436519617:1|ASE-KIT-09:50675436421313:1|ASE-KIT-07:50675436355777:1|ASE-KIT-06:50675436323009:1|ASE-KIT-05:50675436290241:1|ASE-KIT-04:50675436191937:1|ASE-KIT-03:50675436028097:1|ASE-KIT-02:50675435962561:1|ASE-KIT-01:50675435929793:1|ASE-MAY-02:50675435438273:1|ASE-MAY-01:50675435372737:1|ASE-MES-06:50675435307201:1|ASE-MES-05:50675435274433:1|ASE-MES-04:50675435241665:1|ASE-MES-03:50675435176129:1|ASE-MES-02:50675435143361:1|ASE-MES-01:50675435077825:1|ASE-FENSD-04:50675435012289:1|ASE-FENSD-03:50675434979521:1|ASE-FENSD-02:50675434946753:1|ASE-FENSD-01:50675434913985:1|ASE-FEN-06:50675434881217:1|ASE-FEN-05:50675434815681:1|ASE-FEN-04:50675434750145:1|ASE-FEN-03:50675434717377:1|ASE-FEN-02:50675434684609:1|ASE-FEN-01:50675434651841:1|ASE-CAT-03:50675434619073:1|ASE-CAT-02:50675434553537:1|ASE-CAT-01:50675434488001:1|ASE-AVEN-02-M:50675434389697:1|ASE-AVEN-02-G:50675434422465:1|ASE-AVEN-02-GG:50675434455233:1|ASE-AVEN-01-M:50675434291393:1|ASE-AVEN-01-G:50675434324161:1|ASE-AVEN-01-GG:50675434356929:1"""
VID = {s: int(i) for s, i, _ in (x.split(":") for x in RAW.split("|"))}

def cat(sku, tipo):
    if sku.startswith(("ASE-AVEN", "ASE-CON")): return "aventais"
    if sku.startswith(("ASE-FEN",)): return "campos-fenestrados"
    if sku.startswith("ASE-MES") or sku.startswith("ASE-MAY"): return "campos-mesa"
    if sku.startswith(("ASE-CAT", "ASE-LSK", "ASE-OCL")): return "oftalmologia"
    if sku.startswith("ASE-KIT"): return "kits-cirurgicos"
    if sku.startswith("ASE-HEMO"): return "hemodinamica"
    if sku.startswith("ASE-DRP"): return "sterile-drape"
    return "sondas-urologicas"

PHOTOS = {"ASE-AVEN-01": ["ase-aven-01"], "ASE-MAY-01": ["ase-may-01"], "ASE-KIT-01": ["ase-kit-01"], "ASE-KIT-02": ["ase-kit-02"],
          "STE-FOL": ["ste-fol-3vias-01", "ste-fol-3vias-02", "ste-fol-3vias-03"]}
rows = list(csv.DictReader(open(ROOT / "shopify-import/products_import.csv", encoding="utf-8")))
prods, cur = [], None
for r in rows:
    if r["Title"]:
        cur = dict(title=r["Title"], handle=r["URL handle"], tipo=r["Type"], desc=r["Description"], variants=[])
        prods.append(cur)
    if r["SKU"]:
        cur["variants"].append(dict(sku=r["SKU"], opt=r["Option1 value"], price=float(r["Price"] or 0), stock=int(r["Inventory quantity"] or 0)))

out, vmap = [], {}
for n, p in enumerate(prods, 1):
    pid = f"p{n}"
    sku0 = p["variants"][0]["sku"]
    key = "STE-FOL" if sku0.startswith("STE-FOL") else re.sub(r"-(M|G|GG)$", "", sku0)
    ph = [f"assets/products/{x}.jpg" for x in PHOTOS.get(key, [])]
    price = p["variants"][0]["price"]
    vs = [dict(label=v["opt"], sku=v["sku"], price=v["price"], stock=v["stock"], variantId=VID.get(v["sku"])) for v in p["variants"]]
    if vs[0]["variantId"]: vmap[pid] = vs[0]["variantId"]
    if not vs[0]["variantId"]: price = 0  # rascunho na Shopify: sem compra online, exibe "Consultar preço"
    d = dict(id=pid, name=p["title"], brand="allpack.", category=cat(sku0, p["tipo"]), price=price, unit="unidade", sku=sku0,
             stock=sum(v["stock"] for v in vs), variantId=vs[0]["variantId"], color="var(--green-800)", handle=p["handle"], description=p["desc"])
    if len(vs) > 1: d["variants"] = vs
    if ph: d["photoUrl"] = ph[0]; d["photos"] = ph
    out.append(d)

CATS = [("aventais", "Aventais e Vestimenta", "Shield"), ("campos-fenestrados", "Campos Fenestrados", "Leaf"), ("campos-mesa", "Campos de Mesa", "Leaf"),
        ("oftalmologia", "Oftalmologia", "Shield"), ("kits-cirurgicos", "Kits Cirúrgicos", "Package"), ("hemodinamica", "Hemodinâmica", "Package"),
        ("sterile-drape", "Sterile Drape", "Box"), ("sondas-urologicas", "Sondas Urológicas", "Drop")]
cats_js = "[\n" + "".join(f'  {{ id: "{i}", label: "{l}", icon: "{ic}", count: {sum(1 for d in out if d["category"]==i)} }},\n' for i, l, ic in CATS) + "]"

src = (ROOT / "src/data.jsx").read_text()
head = src[: src.index("window.CATEGORIES")]
tail = src[src.index("window.PRODUCTS_WITH_PHOTO"):]
body = f'''// GERADO por shopify-import/gerar_data.py a partir das planilhas (campos cirúrgicos + sondas) e dos variant IDs reais da Shopify.
window.CATEGORIES = {cats_js};

window.ALL_CATEGORIES = window.CATEGORIES.map(c => c.label);

window.PRODUCTS = {json.dumps(out, ensure_ascii=False, indent=1)};

// Destaques: produtos com foto primeiro, depois os demais com preço.
window.PRODUCTS_FEATURED = window.PRODUCTS.filter(p => p.photoUrl && p.price > 0).concat(window.PRODUCTS.filter(p => !p.photoUrl && p.price > 0));

'''
(ROOT / "src/data.jsx").write_text(head + body + tail)

sj = (ROOT / "src/shopify.jsx").read_text()
a = sj.index("window.SHOPIFY_VARIANT_BY_PRODUCT_ID"); b = sj.index("};", a) + 2
sj = sj[:a] + "window.SHOPIFY_VARIANT_BY_PRODUCT_ID = " + json.dumps(vmap, indent=1) + ";" + sj[b:]
(ROOT / "src/shopify.jsx").write_text(sj)
print(len(out), "produtos;", len(vmap), "com variant ID")
