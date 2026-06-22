/* global React, Icon, ORDERS, brl, go, PRODUCTS */
const { useState } = React;

window.AccountPage = function AccountPage() {
  const [tab, setTab] = useState("pedidos");

  return (
    <div>
      <section style={{ background: "var(--green-900)", color: "var(--cream-100)", padding: "48px 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" }}>
          <div style={{ width: 84, height: 84, borderRadius: 999, background: "var(--orange-600)", color: "#fff", display: "grid", placeItems: "center", fontSize: 32, fontWeight: 700, fontFamily: "var(--display)" }}>JS</div>
          <div>
            <div className="mono" style={{ color: "var(--orange-500)" }}>Produtor desde 2019</div>
            <h1 style={{ fontSize: 48, color: "var(--cream-100)" }}>JoÃ£o da Silva</h1>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>SÃ­tio Boa Vista â€¢ Pouso Alegre/MG â€¢ 24 pedidos no histÃ³rico</div>
          </div>
          <button className="btn btn-outline" style={{ color: "var(--cream-100)", boxShadow: "inset 0 0 0 1.5px var(--cream-100)" }} onClick={()=>go("home")}>
            <Icon.Logout size={16} color="var(--cream-100)"/> Sair
          </button>
        </div>
      </section>

      <section style={{ padding: "32px 0 96px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32 }}>
          {/* Side menu */}
          <aside>
            <div className="card" style={{ padding: 8, position: "sticky", top: 24 }}>
              {[
                { id: "pedidos", t: "Meus pedidos", icon: "Package", count: 24 },
                { id: "favoritos", t: "Favoritos", icon: "Heart", count: 12 },
                { id: "enderecos", t: "EndereÃ§os", icon: "Pin", count: 2 },
                { id: "pagamento", t: "Formas de pagamento", icon: "CreditCard" },
                { id: "perfil", t: "Meus dados", icon: "User" },
                { id: "agronomo", t: "Falar com agrÃ´nomo", icon: "Whatsapp" },
              ].map(item => {
                const I = Icon[item.icon];
                const active = tab === item.id;
                return (
                  <button key={item.id} onClick={()=>setTab(item.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, background: active ? "var(--green-700)" : "transparent", color: active ? "var(--cream-100)" : "var(--ink-700)", width: "100%", textAlign: "left", fontSize: 14, fontWeight: active ? 500 : 400 }}>
                    <I size={18} color="currentColor"/>
                    <span style={{ flex: 1 }}>{item.t}</span>
                    {item.count && <span style={{ fontSize: 11, opacity: 0.7 }}>{item.count}</span>}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Content */}
          <div>
            {tab === "pedidos" && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <div>
                    <div className="eyebrow">HistÃ³rico</div>
                    <h2 style={{ marginTop: 8, fontSize: 36 }}>Meus pedidos</h2>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <select className="select" style={{ width: "auto", padding: "8px 12px", fontSize: 13 }}>
                      <option>Todos os pedidos</option>
                      <option>Em trÃ¢nsito</option>
                      <option>Entregues</option>
                      <option>Cancelados</option>
                    </select>
                    <select className="select" style={{ width: "auto", padding: "8px 12px", fontSize: 13 }}>
                      <option>Ãšltimos 90 dias</option>
                      <option>Ãšltimos 6 meses</option>
                      <option>2026</option>
                      <option>2025</option>
                    </select>
                  </div>
                </div>

                {/* Stats strip */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
                  {[
                    { l: "Pedidos esse ano", v: "8", sub: "+ 2 vs ano passado" },
                    { l: "Investido na safra", v: brl(18420.50), sub: "Janeiro a abril" },
                    { l: "Boleto agrÃ­cola aberto", v: brl(4200), sub: "Vence em 90 dias" },
                    { l: "Cashback acumulado", v: brl(184.20), sub: "Pra usar na prÃ³xima" },
                  ].map((s,i) => (
                    <div key={i} className="card" style={{ padding: 20, background: i === 0 ? "var(--cream-100)" : "var(--paper)" }}>
                      <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{s.l}</div>
                      <div className="display" style={{ fontSize: 26, fontWeight: 700, color: "var(--green-800)", marginTop: 6 }}>{s.v}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-500)", marginTop: 4 }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Orders list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ORDERS.map((o, i) => (
                    <div key={o.id} className="card" style={{ padding: 24 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 16, borderBottom: "1px solid var(--line)", marginBottom: 16 }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                            <span className={`status-pill status-${o.status}`}>{o.statusLabel}</span>
                            <span className="mono" style={{ color: "var(--ink-500)", fontSize: 11 }}>{o.id}</span>
                          </div>
                          <div className="display" style={{ fontSize: 20, fontWeight: 600 }}>Pedido feito em {o.date}</div>
                          <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 4 }}>{o.items} itens â€¢ {o.eta}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>Total</div>
                          <div className="display" style={{ fontSize: 24, fontWeight: 700, color: "var(--green-800)" }}>{brl(o.total)}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <div style={{ display: "flex", gap: -8, marginRight: 8 }}>
                          {PRODUCTS.slice(i, i+3).map((p, j) => (
                            <div key={j} style={{ width: 44, height: 44, borderRadius: 8, background: p.color, border: "2px solid var(--paper)", marginLeft: j > 0 ? -10 : 0, position: "relative", overflow: "hidden" }}>
                              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, transparent 6px 12px)" }}/>
                            </div>
                          ))}
                        </div>
                        <span style={{ fontSize: 12, color: "var(--ink-500)" }}>+ {o.items - 3 > 0 ? o.items - 3 : 0} outros itens</span>
                        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                          <button className="btn btn-ghost btn-sm">Ver detalhes</button>
                          {o.status === "transit" && <button className="btn btn-outline btn-sm"><Icon.Truck size={14} color="currentColor"/> Rastrear</button>}
                          <button className="btn btn-green btn-sm">Repetir pedido</button>
                        </div>
                      </div>
                      {o.status === "transit" && (
                        <div style={{ marginTop: 16, padding: 16, background: "var(--cream-100)", borderRadius: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, fontSize: 12 }}>
                            <span className="mono" style={{ color: "var(--green-700)" }}>RASTREIO</span>
                            <span style={{ color: "var(--ink-500)" }}>Atualizado hÃ¡ 2h</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                            {["Confirmado", "Separado", "Saiu pra entrega", "Entregue"].map((s, j) => (
                              <React.Fragment key={s}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: "0 0 auto" }}>
                                  <div style={{ width: 28, height: 28, borderRadius: 999, background: j <= 2 ? "var(--green-700)" : "var(--cream-200)", color: j <= 2 ? "var(--cream-100)" : "var(--ink-500)", display: "grid", placeItems: "center", fontSize: 13 }}>
                                    {j <= 2 ? "âœ“" : j+1}
                                  </div>
                                  <span style={{ fontSize: 11, color: j <= 2 ? "var(--ink-900)" : "var(--ink-500)", fontWeight: j === 2 ? 600 : 400 }}>{s}</span>
                                </div>
                                {j < 3 && <div style={{ flex: 1, height: 2, background: j < 2 ? "var(--green-700)" : "var(--cream-200)", margin: "0 4px", marginBottom: 18 }}/>}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab !== "pedidos" && (
              <div className="card" style={{ padding: 64, textAlign: "center" }}>
                <Icon.Package size={48} color="var(--ink-300)"/>
                <h3 style={{ marginTop: 16, fontSize: 24 }}>Em construÃ§Ã£o</h3>
                <p style={{ marginTop: 8, color: "var(--ink-500)" }}>Esta seÃ§Ã£o serÃ¡ desenhada na prÃ³xima rodada.</p>
                <button className="btn btn-outline" style={{ marginTop: 16 }} onClick={()=>setTab("pedidos")}>â† Voltar pra pedidos</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};


