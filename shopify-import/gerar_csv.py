"""Gera products_import.csv (template de produtos da Shopify) a partir das planilhas em CATEGORIAS DE PRODUTOS.
Uso: python3 gerar_csv.py [URL_BASE_DAS_IMAGENS]   ex.: https://cdn.shopify.com/s/files/.../  (termina com /)
Sem URL_BASE as colunas de imagem ficam vazias (a Shopify exige URL pública)."""
import csv, re, sys, unicodedata, openpyxl
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = sys.argv[1] if len(sys.argv) > 1 else ""
CAT = ""  # categoria da taxonomia Shopify: definir depois no admin (a anterior foi rejeitada na importação)
HEADER = next(csv.reader(open("/Users/scudieri/Downloads/product_template.csv", encoding="utf-8")))

IMAGES = {
    "ASE-AVEN-01": ["ase-aven-01"], "ASE-MAY-01": ["ase-may-01"],
    "ASE-KIT-01": ["ase-kit-01"], "ASE-KIT-02": ["ase-kit-02"],
    "STE-FOL": ["ste-fol-3vias-01", "ste-fol-3vias-02", "ste-fol-3vias-03"],
}
# Fotos que já estavam na coluna "Imagens" da planilha de campos cirúrgicos (URLs públicas, a Shopify copia na importação).
_L = "https://yata-apix-ae5e5500-2a0f-4e6a-b3e5-873cb5e9ff86.s3-object.locaweb.com.br/"
for k in ("ASE-AVEN-02",): IMAGES[k] = [_L + "23f06ef5fe594be78fbb5e64c73f0c4a.jpg"]
for k in ("ASE-CAT-01", "ASE-CAT-02", "ASE-CAT-03"): IMAGES[k] = [_L + "14003acb7d8c4c059aeefc5b3c874783.jpg"]
for k in ("ASE-FEN-01", "ASE-FEN-02", "ASE-FEN-03", "ASE-FEN-04", "ASE-FEN-05", "ASE-FEN-06"): IMAGES[k] = [_L + "47f839d245b8454b9f0c83dfd5ab92c5.png"]
for k in ("ASE-MES-01", "ASE-MES-02", "ASE-MES-03", "ASE-MES-04", "ASE-MES-05", "ASE-MES-06"): IMAGES[k] = [_L + "425c78a4b7f24109b2ffcaff85167968.jpg"]
# Produtos sem foto própria usam a foto da mesma família, das pastas CATEGORIAS DE PRODUTOS/.
for k in ("ASE-KIT-03", "ASE-KIT-04", "ASE-KIT-05", "ASE-KIT-06", "ASE-KIT-07", "ASE-KIT-08", "ASE-KIT-09", "ASE-KIT-10", "ASE-KIT-11", "ASE-HEMO-01", "ASE-HEMO-02"):
    IMAGES[k] = ["ase-kit-01", "ase-kit-02"]
for k in ("ASE-FENSD-01", "ASE-FENSD-02", "ASE-FENSD-03", "ASE-FENSD-04", "ASE-DRP-01", "ASE-DRP-02", "ASE-DRP-03"): IMAGES[k] = ["ase-may-01"]
for k in ("ASE-MES-01", "ASE-MES-02", "ASE-MES-03", "ASE-MES-04", "ASE-MES-05", "ASE-MES-06", "ASE-MAY-02"): IMAGES[k] = ["ase-may-01"]
IMAGES["ASE-AVEN-02"] = ["ase-aven-01"]

IMAGES["ASE-LSK-01"] = [_L + "e71ec3e5792f4d80abed03b4cc24891d.jpg"]
IMAGES["ASE-OCL-01"] = [_L + "b251b1033afa49a3903183562e260bdc.jpg"]
IMAGES["ASE-CON-01"] = [_L + "a6a6e0c07f284c1994407ef3cc4ffd40.jpg"]

def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")

def num(v):
    return float(v) if isinstance(v, (int, float)) else None

def row(**kw):
    r = {h: "" for h in HEADER}
    r.update(kw)
    return [r[h] for h in HEADER]

def fmt(x): return "" if x is None else f"{x:.2f}"

def build(title, sku_key, desc, tipo, variants, opt_name):
    """variants: list of dict(sku,opt,price,cost,weight,stock)"""
    handle = slug(title)
    complete = all(v["price"] for v in variants)
    imgs = IMAGES.get(sku_key, [])
    out = []
    for i, v in enumerate(variants):
        kw = dict(**{"URL handle": handle, "SKU": v["sku"], "Option1 name": opt_name, "Option1 value": v["opt"],
              "Price": fmt(v["price"] or 0), "Cost per item": fmt(v["cost"]), "Charge tax": "TRUE",
              "Inventory tracker": "shopify", "Inventory quantity": v["stock"], "Continue selling when out of stock": "DENY",
              "Weight value (grams)": v["weight"] or "", "Weight unit for display": "g",
              "Requires shipping": "TRUE", "Fulfillment service": "manual"})
        if i == 0:
            kw.update({"Title": title, "Description": desc, "Vendor": "allpack.", "Product category": CAT,
                       "Type": tipo, "Tags": f"{tipo}, allpack", "Published on online store": "TRUE" if complete else "FALSE",
                       "Status": "active" if complete else "draft", "Gift card": "FALSE",
                       "SEO title": title[:70], "SEO description": desc[:320]})
        out.append(row(**kw))
    if True:
        for pos, name in enumerate(imgs, 1):
            kw = {"URL handle": handle, "Product image URL": name if name.startswith("http") else f"{BASE}{name}.jpg", "Image position": pos,
                  "Image alt text": f"{title} - foto {pos}"}
            if pos == 1 and out:  # primeira imagem na linha do produto
                for h, val in kw.items():
                    if h != "URL handle": out[0][HEADER.index(h)] = val
            else:
                out.append(row(**kw))
    return out

rows = []
# Campos cirúrgicos
ws = openpyxl.load_workbook(ROOT / "CATEGORIAS DE PRODUTOS/CAMPOS CIRURGICOS/ecommerce_asepsa_allpack.xlsx").active
groups = {}
for r in ws.iter_rows(min_row=4, values_only=True):
    if r[1]: groups.setdefault(r[1], []).append(r)
for sku, rs in groups.items():
    f = rs[0]; multi = len(rs) > 1
    vs = []
    for r in rs:
        cost, mg = num(r[6]), num(r[7])
        vs.append(dict(sku=f"{sku}-{r[5]}" if multi else sku, opt=r[5] if multi else "Default Title",
                       price=round(cost * (1 + mg), 2) if cost and mg is not None else None,
                       cost=cost, weight=int(r[11]) if isinstance(r[11], (int, float)) else None,
                       stock=r[13] if isinstance(r[13], (int, float)) else 0))
    rows += build(f[3].strip(), sku, f[4], f[2], vs, "Tamanho" if multi else "Title")
# Sondas (só o 16 FR tinha preço, R$ 120; o mesmo valor foi aplicado nos demais tamanhos, a pedido)
ws = openpyxl.load_workbook(ROOT / "CATEGORIAS DE PRODUTOS/UROLOGIA SONDAS/sondas_foley_stevemedical.xlsx").active
rs = [r for r in ws.iter_rows(min_row=3, values_only=True) if r[0]]
for r in rs:  # um produto por tamanho, como na planilha
    v = dict(sku=r[0], opt="Default Title", price=num(r[6]) or 120.0, cost=num(r[4]), weight=38, stock=int(r[10] or 0))
    rows += build(r[2].strip(), "STE-FOL", r[3], r[1], [v], "Title")

with open(Path(__file__).parent / "products_import.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh); w.writerow(HEADER); w.writerows(rows)
print(len(rows), "linhas")
