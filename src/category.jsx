/* global React, Icon, ProductCard, go, brl */
const { useState, useMemo } = React;

const SORTS = {
  relevancia: { label: "Relevância", fn: null },
  menor: { label: "Menor preço", fn: (a, b) => a.price - b.price },
  maior: { label: "Maior preço", fn: (a, b) => b.price - a.price },
  nome: { label: "Nome (A–Z)", fn: (a, b) => a.name.localeCompare(b.name, "pt-BR") },
};

// Lista de produtos com filtro lateral por categoria, faixa de preço e ordenação. Usada por Catálogo e Busca.
window.ProductListing = function ProductListing({ products, activeCat, basePath, title, italic, subtitle, crumb }) {
  const [sort, setSort] = useState("relevancia");
  const [maxPrice, setMaxPrice] = useState("");
  const cats = window.CATEGORIES || [];

  const shown = useMemo(() => {
    let list = products.filter(p => !maxPrice || p.price <= parseFloat(maxPrice.replace(",", ".")) || !p.price);
    const fn = SORTS[sort].fn;
    return fn ? [...list].sort(fn) : list;
  }, [products, sort, maxPrice]);

  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid #e2ecf5", padding: "36px 0 40px" }}>
        <div className="container">
          <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 11, marginBottom: 16, letterSpacing: "0.08em" }}>
            <a href="#home" onClick={e => { e.preventDefault(); go("home"); }} style={{ color: "#0195ff" }}>Início</a>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span><span>{crumb}</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>{products.length} {products.length === 1 ? "produto" : "produtos"}</div>
          <h1 style={{ fontSize: 48, color: "#002840", margin: 0 }}>{title} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{italic}</span></h1>
          {subtitle && <p style={{ marginTop: 12, fontSize: 16, color: "#334d62", maxWidth: 620, lineHeight: 1.6 }}>{subtitle}</p>}
        </div>
      </section>

      <section style={{ padding: "36px 0 96px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32, alignItems: "start" }}>
          <aside className="card filters" style={{ padding: 22, position: "sticky", top: 190 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#002840", marginBottom: 12 }}>Categorias</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[{ id: "", label: "Todos os produtos" }, ...cats].map(c => {
                const on = (activeCat || "") === c.id;
                return (
                  <a key={c.id} href={"#categoria" + (c.id ? "/" + c.id : "")} onClick={e => { e.preventDefault(); go("categoria" + (c.id ? "/" + c.id : "")); }}
                    style={{ padding: "8px 10px", borderRadius: 8, fontSize: 14, fontWeight: on ? 700 : 500, color: on ? "#0195ff" : "#334d62", background: on ? "#eef5fc" : "transparent", display: "flex", justifyContent: "space-between" }}>
                    <span>{c.label}</span>{c.count != null && <span style={{ color: "#9db4c4", fontSize: 12 }}>{c.count}</span>}
                  </a>
                );
              })}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#002840", margin: "22px 0 8px" }}>Preço máximo (R$)</div>
            <input className="input" inputMode="decimal" placeholder="Ex.: 100" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
          </aside>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 14, color: "#334d62" }}><b>{shown.length}</b> {shown.length === 1 ? "produto encontrado" : "produtos encontrados"}</div>
              <label style={{ fontSize: 13, color: "#7a9ab0", display: "flex", alignItems: "center", gap: 8 }}>
                Ordenar:
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1.5px solid #e2ecf5", background: "#fff", fontFamily: "inherit", fontSize: 13, color: "#002840" }}>
                  {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                </select>
              </label>
            </div>
            {shown.length === 0
              ? <div className="card" style={{ padding: 48, textAlign: "center", color: "#334d62" }}>Nenhum produto encontrado. <a href="#categoria" onClick={e => { e.preventDefault(); go("categoria"); }} style={{ color: "#0195ff", fontWeight: 600 }}>Ver todo o catálogo</a></div>
              : <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>{shown.map(p => <ProductCard key={p.id} p={p} />)}</div>}
          </div>
        </div>
      </section>
    </div>
  );
};

window.CategoryPage = function CategoryPage({ cat }) {
  const all = window.PRODUCTS || [];
  const c = (window.CATEGORIES || []).find(x => x.id === cat);
  const products = c ? all.filter(p => p.category === c.id) : all;
  return (
    <window.ProductListing
      products={products} activeCat={c ? c.id : ""}
      crumb={c ? c.label : "Catálogo"}
      title={c ? c.label : "Catálogo"} italic={c ? "" : "completo"}
      subtitle={c ? null : "Materiais médico-hospitalares certificados: aventais, campos cirúrgicos, kits, sterile drapes e sondas."}
    />
  );
};
