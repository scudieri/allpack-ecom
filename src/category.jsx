/* global React, Icon, ProductCard, PRODUCTS, go, brl */
const { useState } = React;

window.CategoryPage = function CategoryPage() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("relevancia");
  const products = PRODUCTS;

  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh" }}>
      {/* Breadcrumb + título */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e2ecf5", padding: "40px 0 48px" }}>
        <div className="container">
          <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 11, marginBottom: 20, letterSpacing: "0.08em" }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ color: "#0195ff" }}>Início</a>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
            <span>Catálogo</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>{products.length} produtos disponíveis</div>
              <h1 style={{ fontSize: 56, color: "#002840", margin: 0 }}>
                Catálogo <span style={{ fontStyle: "italic", color: "#0195ff" }}>completo</span>
              </h1>
              <p style={{ marginTop: 14, fontSize: 16, color: "#334d62", maxWidth: 520, lineHeight: 1.65, margin: "14px 0 0" }}>
                Materiais médico-hospitalares certificados — kits cirúrgicos, campos, cateteres, estetoscópios, oxímetros e muito mais.
              </p>
            </div>
            <div style={{ background: "#f4f8fc", border: "1.5px solid #e2ecf5", borderRadius: 18, padding: "22px 24px" }}>
              <div style={{ fontFamily: "var(--mono)", color: "#0195ff", fontSize: 10, letterSpacing: "0.12em", marginBottom: 10 }}>ATENDIMENTO ESPECIALIZADO</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "#334d62", fontStyle: "italic" }}>
                "Nossa equipe técnica indica o produto ideal para o seu protocolo ou procedimento hospitalar."
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, fontSize: 12, color: "#7a9ab0" }}>
                <div style={{ width: 30, height: 30, borderRadius: 999, background: "#0195ff", color: "#fff", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700 }}>AP</div>
                <span>Equipe técnica allpack.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32 }}>
          {/* SIDEBAR */}
          <aside>
            <div style={{ position: "sticky", top: 168 }}>
              <div style={{ background: "#fff", borderRadius: 18, padding: 24, border: "1px solid #e2ecf5", boxShadow: "0 2px 8px rgba(0,40,96,0.05)" }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, color: "#002840" }}>Filtros</div>

                <FilterGroup title="Categoria" items={["Centro Cirúrgico", "Kits Cirúrgicos", "Campos Cirúrgicos", "Cateteres e Sondas", "Estetoscópios", "Oxímetros", "Ap. de Pressão", "Termômetros"]} selected={[]} />
                <FilterGroup title="Tipo de uso" items={["Descartável", "Reutilizável", "Estéril", "Não estéril"]} selected={[]} />
                <FilterGroup title="Certificação" items={["ANVISA", "ISO 13485", "CE Mark"]} selected={[]} />

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#002840" }}>Faixa de preço</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input placeholder="R$ 0"    style={{ flex: 1, border: "1.5px solid #e2ecf5", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: "#002840", background: "#f7fafd", outline: "none", fontFamily: "inherit" }}/>
                    <input placeholder="R$ 1000" style={{ flex: 1, border: "1.5px solid #e2ecf5", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: "#002840", background: "#f7fafd", outline: "none", fontFamily: "inherit" }}/>
                  </div>
                  <div style={{ marginTop: 14, height: 4, background: "#e0eaf5", borderRadius: 999, position: "relative" }}>
                    <div style={{ position: "absolute", left: "10%", right: "30%", height: "100%", background: "#0195ff", borderRadius: 999 }}/>
                    <div style={{ position: "absolute", left: "10%", top: -6, width: 16, height: 16, borderRadius: 999, background: "#0195ff", border: "3px solid #fff", boxShadow: "0 1px 4px rgba(0,40,96,0.2)" }}/>
                    <div style={{ position: "absolute", left: "70%", top: -6, width: 16, height: 16, borderRadius: 999, background: "#0195ff", border: "3px solid #fff", boxShadow: "0 1px 4px rgba(0,40,96,0.2)" }}/>
                  </div>
                </div>

                <FilterGroup title="Avaliação" items={["★★★★★ (5.0)", "★★★★ ou mais", "★★★ ou mais"]} selected={["★★★★ ou mais"]} />

                <button style={{ width: "100%", padding: "11px 0", borderRadius: 999, border: "1.5px solid #e2ecf5", background: "transparent", color: "#7a9ab0", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#0195ff"; e.currentTarget.style.color = "#0195ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2ecf5"; e.currentTarget.style.color = "#7a9ab0"; }}>
                  Limpar filtros
                </button>
              </div>
            </div>
          </aside>

          {/* RESULTS */}
          <div>
            {/* Active chips */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {["Kits Cirúrgicos", "Descartável", "★★★★ ou mais"].map((f, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#eef5fc", border: "1px solid #c8dcea", color: "#0195ff", padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                  {f} <Icon.Close size={11} color="currentColor"/>
                </span>
              ))}
            </div>

            {/* Sort bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, padding: "14px 18px", background: "#fff", borderRadius: 14, border: "1px solid #e2ecf5", boxShadow: "0 1px 4px rgba(0,40,96,0.04)" }}>
              <div style={{ fontSize: 14, color: "#7a9ab0" }}>
                <span style={{ fontWeight: 700, color: "#002840" }}>{products.length}</span> produtos encontrados
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "#7a9ab0" }}>Ordenar:</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)}
                  style={{ background: "#f7fafd", border: "1.5px solid #e2ecf5", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#002840", outline: "none", fontFamily: "inherit", cursor: "pointer" }}>
                  <option value="relevancia">Relevância</option>
                  <option value="menor">Menor preço</option>
                  <option value="maior">Maior preço</option>
                  <option value="avaliacao">Melhor avaliação</option>
                </select>
                <div style={{ display: "flex", border: "1.5px solid #e2ecf5", borderRadius: 999, overflow: "hidden" }}>
                  <button onClick={() => setView("grid")} style={{ padding: "8px 12px", background: view === "grid" ? "#002840" : "transparent", color: view === "grid" ? "#fff" : "#7a9ab0", transition: "all 0.15s", border: "none", cursor: "pointer" }}>
                    <Icon.Grid size={15} color="currentColor"/>
                  </button>
                  <button onClick={() => setView("list")} style={{ padding: "8px 12px", background: view === "list" ? "#002840" : "transparent", color: view === "list" ? "#fff" : "#7a9ab0", transition: "all 0.15s", border: "none", cursor: "pointer" }}>
                    <Icon.List size={15} color="currentColor"/>
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div style={{ display: "grid", gridTemplateColumns: view === "grid" ? "repeat(3, 1fr)" : "1fr", gap: 16 }}>
              {products.map((p) => <ProductCard key={p.id} p={p} onClick={() => go("produto")}/>)}
            </div>

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, marginTop: 56 }}>
              <button style={{ padding: "8px 16px", borderRadius: 999, background: "#fff", border: "1.5px solid #e2ecf5", color: "#7a9ab0", fontSize: 13, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
                <Icon.ChevronLeft size={13} color="currentColor"/> Anterior
              </button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} style={{ width: 38, height: 38, borderRadius: 999, background: n === 1 ? "#002840" : "#fff", color: n === 1 ? "#fff" : "#7a9ab0", fontSize: 14, cursor: "pointer", fontFamily: "inherit", border: n === 1 ? "none" : "1.5px solid #e2ecf5", fontWeight: n === 1 ? 700 : 400 }}>{n}</button>
              ))}
              <span style={{ color: "#c8dcea", padding: "0 4px" }}>…</span>
              <button style={{ width: 38, height: 38, borderRadius: 999, background: "#fff", color: "#7a9ab0", fontSize: 14, cursor: "pointer", fontFamily: "inherit", border: "1.5px solid #e2ecf5" }}>16</button>
              <button style={{ padding: "8px 16px", borderRadius: 999, background: "#fff", border: "1.5px solid #e2ecf5", color: "#7a9ab0", fontSize: 13, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
                Próxima <Icon.Chevron size={13} color="currentColor"/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function FilterGroup({ title, items, selected }) {
  return (
    <div style={{ marginBottom: 22, paddingBottom: 22, borderBottom: "1px solid #f0f4f8" }}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#002840" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, i) => (
          <label key={i} className="checkbox">
            <input type="checkbox" defaultChecked={selected.includes(item)}/>
            <span style={{ fontSize: 13, color: "#334d62" }}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
