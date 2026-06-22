/* global React, Icon, ProductCard, PRODUCTS, go, CATEGORIES, brl */
const { useState } = React;

window.CategoryPage = function CategoryPage() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("relevancia");
  const products = [...PRODUCTS, ...PRODUCTS.slice(0, 4).map(p => ({...p, id: p.id+"_b"}))];

  return (
    <div>
      {/* breadcrumbs + title */}
      <section style={{ background: "var(--cream-100)", padding: "32px 0 40px" }}>
        <div className="container">
          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 11, marginBottom: 16 }}>
            <a href="#home" style={{ color: "var(--green-700)" }}>Início</a> / <a href="#" style={{ color: "var(--green-700)" }}>Produtos</a> / Fertilizantes
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "end" }}>
            <div>
              <div className="eyebrow">184 produtos disponíveis</div>
              <h1 style={{ marginTop: 12, fontSize: 72 }}>Fertilizantes <span className="italic" style={{ color: "var(--orange-600)" }}>pra sua roça</span></h1>
              <p style={{ marginTop: 12, fontSize: 16, color: "var(--ink-700)", maxWidth: 600 }}>NPK, foliares, ureia, fosfatados e micronutrientes — pra cada cultura, pra cada dose. Nutrição que rende na colheita.</p>
            </div>
            <div className="card" style={{ padding: 20, background: "var(--paper)" }}>
              <div className="mono" style={{ color: "var(--green-700)", marginBottom: 8 }}>Dica do agrônomo</div>
              <div style={{ fontSize: 14, lineHeight: 1.5 }}>"Pra sua próxima safra de soja, o NPK 04-14-08 é o mais indicado. Combine com foliar de boro e zinco no V6."</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, fontSize: 12, color: "var(--ink-500)" }}>
                <div style={{ width: 28, height: 28, borderRadius: 999, background: "var(--green-700)", color: "var(--cream-100)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700 }}>RP</div>
                <span>Roberto P. — Agrônomo Santos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32 }}>
          {/* SIDEBAR FILTERS */}
          <aside>
            <div style={{ position: "sticky", top: 24 }}>
              <div className="display" style={{ fontSize: 20, marginBottom: 16, fontWeight: 600 }}>Filtros</div>

              <FilterGroup title="Subcategoria" items={["NPK formulado", "Foliares", "Ureia", "Fosfatados", "Micronutrientes", "Cloreto de potássio"]} selected={["NPK formulado", "Foliares"]} />
              <FilterGroup title="Marca" items={["Santos Mix", "AgroSantos", "Santos Tech", "Yara", "Heringer", "Mosaic"]} selected={["Santos Mix"]} />
              <FilterGroup title="Cultura" items={["Soja", "Milho", "Café", "Cana-de-açúcar", "Pastagem", "Hortaliças"]} selected={[]} />

              <div style={{ marginBottom: 24 }}>
                <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Faixa de preço</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input className="input" placeholder="R$ 0" style={{ fontSize: 13 }} />
                  <input className="input" placeholder="R$ 1000" style={{ fontSize: 13 }} />
                </div>
                <div style={{ marginTop: 12, height: 4, background: "var(--cream-200)", borderRadius: 999, position: "relative" }}>
                  <div style={{ position: "absolute", left: "10%", right: "30%", height: "100%", background: "var(--green-700)", borderRadius: 999 }}/>
                  <div style={{ position: "absolute", left: "10%", top: "-6px", width: 16, height: 16, borderRadius: 999, background: "var(--green-700)", border: "3px solid var(--paper)" }}/>
                  <div style={{ position: "absolute", left: "70%", top: "-6px", width: 16, height: 16, borderRadius: 999, background: "var(--green-700)", border: "3px solid var(--paper)" }}/>
                </div>
              </div>

              <FilterGroup title="Avaliação" items={["★★★★★ (5)", "★★★★ ou mais", "★★★ ou mais"]} selected={["★★★★ ou mais"]} />

              <button className="btn btn-outline btn-block" style={{ marginTop: 8 }}>Limpar filtros</button>
            </div>
          </aside>

          {/* RESULTS */}
          <div>
            {/* Active filter chips */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {["NPK formulado", "Foliares", "Santos Mix", "★★★★ ou mais"].map((f, i) => (
                <span key={i} className="pill" style={{ background: "var(--green-50)", color: "var(--green-800)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {f} <Icon.Close size={12} color="currentColor"/>
                </span>
              ))}
            </div>
            {/* Sort & view */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, padding: 16, background: "var(--paper)", borderRadius: 14, border: "1px solid var(--line)" }}>
              <div style={{ fontSize: 14, color: "var(--ink-700)" }}><span className="bold">{products.length}</span> produtos encontrados</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "var(--ink-500)" }}>Ordenar:</span>
                <select className="select" style={{ width: "auto", padding: "8px 12px", fontSize: 13 }} value={sort} onChange={(e)=>setSort(e.target.value)}>
                  <option value="relevancia">Relevância</option>
                  <option value="menor">Menor preço</option>
                  <option value="maior">Maior preço</option>
                  <option value="vendidos">Mais vendidos</option>
                  <option value="avaliacao">Melhor avaliação</option>
                </select>
                <div style={{ display: "flex", border: "1.5px solid var(--line-strong)", borderRadius: 999, overflow: "hidden" }}>
                  <button onClick={()=>setView("grid")} style={{ padding: "8px 12px", background: view==="grid" ? "var(--green-900)" : "transparent", color: view==="grid" ? "var(--cream-100)" : "var(--ink-700)" }}><Icon.Grid size={16} color="currentColor"/></button>
                  <button onClick={()=>setView("list")} style={{ padding: "8px 12px", background: view==="list" ? "var(--green-900)" : "transparent", color: view==="list" ? "var(--cream-100)" : "var(--ink-700)" }}><Icon.List size={16} color="currentColor"/></button>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div style={{ display: "grid", gridTemplateColumns: view === "grid" ? "repeat(3, 1fr)" : "1fr", gap: 16 }}>
              {products.map((p) => <ProductCard key={p.id} p={p} onClick={()=>go("produto")}/>)}
            </div>

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, marginTop: 48 }}>
              <button className="btn btn-ghost btn-sm"><Icon.ChevronLeft size={14} color="currentColor"/> Anterior</button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} style={{ width: 36, height: 36, borderRadius: 999, background: n === 1 ? "var(--green-900)" : "transparent", color: n === 1 ? "var(--cream-100)" : "var(--ink-700)", fontSize: 14 }}>{n}</button>
              ))}
              <span style={{ padding: "0 8px", color: "var(--ink-500)" }}>...</span>
              <button style={{ width: 36, height: 36, borderRadius: 999, color: "var(--ink-700)" }}>16</button>
              <button className="btn btn-ghost btn-sm">Próxima <Icon.Chevron size={14} color="currentColor"/></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function FilterGroup({ title, items, selected }) {
  return (
    <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
      <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, i) => (
          <label key={i} className="checkbox">
            <input type="checkbox" defaultChecked={selected.includes(item)}/>
            <span style={{ color: "var(--ink-700)" }}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
