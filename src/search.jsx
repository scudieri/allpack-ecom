/* global React, go */

const norm = (s) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

window.SearchPage = function SearchPage({ q }) {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  const products = (window.PRODUCTS || []).filter(p => {
    const hay = norm([p.name, p.sku, p.categoryLabel, (window.CATEGORIES.find(c => c.id === p.category) || {}).label, p.description].join(" "));
    return terms.every(t => hay.includes(t));
  });
  return (
    <window.ProductListing
      products={products} activeCat="" crumb="Busca"
      title="Resultados para" italic={`“${q}”`}
      subtitle={products.length ? null : "Tente outro termo, como “avental”, “campo”, “kit” ou o código do produto."}
    />
  );
};
