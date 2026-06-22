/* global React, Icon, ProductCard, PRODUCTS, brl, go */
const { useState } = React;

window.SearchPage = function SearchPage() {
  const [q, setQ] = useState("ureia");
  const recent = ["NPK 04-14-08", "calcÃ¡rio", "semente soja", "pulverizador costal"];
  const trending = ["foliar zinco", "ureia 50kg", "defensivo herbicida", "cama de aviÃ¡rio", "gesso agrÃ­cola"];
  return (
    <div>
      <section style={{ background: "var(--green-900)", padding: "64px 0", color: "var(--cream-100)" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--orange-500)" }}>Busca</div>
          <h1 style={{ fontSize: 56, marginTop: 12, color: "var(--cream-100)" }}>{window.BRAND.copy.search.titleStart} <span className="italic" style={{ color: "var(--orange-500)" }}>{window.BRAND.copy.search.italic}</span> {window.BRAND.copy.search.titleEnd}</h1>
          <div style={{ marginTop: 32, position: "relative", maxWidth: 720 }}>
            <input
              className="input"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              placeholder="Buscar adubo, semente, defensivo..."
              style={{ paddingLeft: 56, paddingRight: 120, height: 64, borderRadius: 999, fontSize: 18, background: "var(--paper)" }}
            />
            <div style={{ position: "absolute", left: 22, top: "50%", transform: "translateY(-50%)", color: "var(--green-700)" }}>
              <Icon.Search size={22}/>
            </div>
            <button className="btn btn-primary btn-lg" style={{ position: "absolute", right: 8, top: 8, height: 48 }}>Buscar</button>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginRight: 4 }}>Em alta:</span>
            {trending.map((t, i) => (
              <button key={i} onClick={()=>setQ(t)} className="pill" style={{ background: "rgba(255,255,255,0.1)", color: "var(--cream-100)" }}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32 }}>
          <aside>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 24 }}>
              <div>
                <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon.Clock size={16} color="var(--ink-700)"/> Suas buscas recentes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {recent.map((r, i) => (
                    <button key={i} onClick={()=>setQ(r)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, color: "var(--ink-700)", fontSize: 13, textAlign: "left" }}>
                      <span>{r}</span>
                      <Icon.Close size={14} color="var(--ink-400)"/>
                    </button>
                  ))}
                </div>
              </div>
              <div className="card-soft" style={{ padding: 16 }}>
                <div className="display" style={{ fontSize: 14, fontWeight: 600 }}>NÃ£o encontrou?</div>
                <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 6 }}>Manda foto da embalagem ou nome no WhatsApp e a gente acha pra vocÃª.</div>
                <button className="btn btn-green btn-sm btn-block" style={{ marginTop: 12 }}><Icon.Whatsapp size={14} color="currentColor"/> Pedir no WhatsApp</button>
              </div>
            </div>
          </aside>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <h2 style={{ fontSize: 28 }}>Resultados pra "<span className="italic" style={{ color: "var(--orange-600)" }}>{q}</span>"</h2>
              <span style={{ fontSize: 13, color: "var(--ink-500)" }}>14 produtos encontrados</span>
            </div>

            <div style={{ marginTop: 16, padding: 16, background: "var(--green-50)", borderRadius: 10, border: "1px solid var(--green-100)", display: "flex", gap: 12, alignItems: "center" }}>
              <Icon.Sprout size={20} color="var(--green-700)"/>
              <div style={{ fontSize: 13, color: "var(--ink-700)" }}>
                <span className="bold" style={{ color: "var(--green-800)" }}>Dica:</span> pra ureia, a Santos recomenda combinar com inibidor de urease pra reduzir perda por volatilizaÃ§Ã£o.
                <a href="#" style={{ color: "var(--green-700)", marginLeft: 8, fontWeight: 600 }}>Falar com agrÃ´nomo â†’</a>
              </div>
            </div>

            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {PRODUCTS.slice(0, 6).map(p => <ProductCard key={p.id} p={p} onClick={()=>go("produto")}/>)}
            </div>

            <div style={{ marginTop: 48 }}>
              <div className="display" style={{ fontSize: 22, marginBottom: 16, fontWeight: 600 }}>Categorias relacionadas</div>
              <div className="chip-row">
                {["Ureia 50kg", "Ureia revestida", "Sulfato de amÃ´nio", "Nitrato de amÃ´nio", "Ureia + NBPT", "Ureia perolada"].map((c, i) => (
                  <button key={i} className="chip">{c}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

