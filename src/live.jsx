/* global React */

// Catálogo ao vivo: a loja Shopify é a fonte da verdade.
// Produto novo na Shopify aparece no site, produto removido/rascunho/sem estoque some.
// Se a Shopify não responder, o site usa o catálogo estático de src/data.jsx.

const ICONS = ["Shield", "Leaf", "Package", "Drop", "Box"];
const COLORS = ["var(--green-700)", "#0073a8", "var(--green-600)", "var(--green-800)", "#004b61", "#005f7a", "#004160", "#002840"];

const slug = (s) => (s || "outros").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const stripHtml = (h) => (h || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const img = (src, w) => src + (src.includes("?") ? "&" : "?") + "width=" + w;

async function fetchAll() {
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(`https://${window.SHOPIFY.domain}/products.json?limit=250&page=${page}`, { cache: "no-store" });
    if (!res.ok) throw new Error("products.json " + res.status);
    const { products } = await res.json();
    out.push(...products);
    if (products.length < 250) break;
  }
  return out;
}

function build(raw) {
  const variantMap = {};
  const products = raw
    .filter(p => p.variants.some(v => v.available))          // sem estoque = não aparece
    .map(p => {
      const avail = p.variants.filter(v => v.available);
      const first = avail[0];
      const id = "s" + p.id;
      variantMap[id] = first.id;
      const photos = p.images.map(i => img(i.src, 800));
      const d = {
        id, handle: p.handle, name: p.title, brand: p.vendor || "allpack.", category: slug(p.product_type), categoryLabel: p.product_type || "Outros",
        variantId: first.id, price: parseFloat(first.price) || 0, unit: "unidade", sku: first.sku, stock: avail.length, color: "var(--green-800)",
        description: stripHtml(p.body_html),
      };
      if (p.variants.length > 1) d.variants = p.variants.map(v => ({ label: v.title, sku: v.sku, price: parseFloat(v.price), variantId: v.id, available: v.available }));
      if (photos.length) { d.photoUrl = photos[0]; d.photos = photos; }
      return d;
    })
    .filter(p => p.price > 0);

  const cats = [];
  products.forEach(p => {
    let c = cats.find(x => x.id === p.category);
    if (!c) { c = { id: p.category, label: p.categoryLabel, icon: ICONS[cats.length % ICONS.length], count: 0 }; cats.push(c); }
    c.count++;
  });
  return { products, cats, variantMap };
}

function apply({ products, cats, variantMap }) {
  window.PRODUCTS = products;
  window.PRODUCTS_WITH_PHOTO = products.filter(p => p.photoUrl);
  window.PRODUCTS_FEATURED = window.PRODUCTS_WITH_PHOTO.concat(products.filter(p => !p.photoUrl));
  window.CATEGORIES = cats;
  window.ALL_CATEGORIES = cats.map(c => c.label);
  window.SHOPIFY_VARIANT_BY_PRODUCT_ID = variantMap;

  const copy = window.BRAND && window.BRAND.copy;
  if (copy) {
    copy.header.categories = cats.map(c => c.label);
    copy.categories.items = cats.map((c, i) => ({ id: c.id, label: c.label, icon: c.icon, color: COLORS[i % COLORS.length] }));
  }
}

window.loadLiveCatalog = async function loadLiveCatalog() {
  try {
    const data = build(await fetchAll());
    apply(data);
    window.CATALOG_SOURCE = "shopify";
    return true;
  } catch (e) {
    console.warn("[live] usando catálogo estático:", e.message);
    window.CATALOG_SOURCE = "static";
    return false;
  }
};
