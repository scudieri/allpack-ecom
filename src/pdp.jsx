/* global React, Icon, ProductCard, PRODUCTS, brl, go */
const { useState } = React;

window.PdpPage = function PdpPage() {
  const p = PRODUCTS[0];
  const [qty, setQty] = useState(10);
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState("descricao");
  const [cep, setCep] = useState("37550-000");

  return (
    <div>
      <section style={{ paddingTop: 24, paddingBottom: 48 }}>
        <div className="container">
          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 11, marginBottom: 24 }}>
            <a href="#home" style={{ color: "var(--green-700)" }}>Início</a> / <a href="#" style={{ color: "var(--green-700)" }}>Fertilizantes</a> / NPK 04-14-08 Premium
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48 }}>
            {/* IMAGE GALLERY */}
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[0,1,2,3].map((i) => (
                  <button key={i} onClick={()=>setActiveImg(i)} style={{ aspectRatio: "1", borderRadius: 10, background: i===0?"#1f4a2a":i===1?"#3a2818":i===2?"#5a3a18":"#aa6a3a", border: activeImg===i ? "2px solid var(--green-700)" : "1px solid var(--line)", padding: 0, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)" }}/>
                  </button>
                ))}
                <div style={{ aspectRatio: "1", borderRadius: 10, background: "var(--cream-200)", display: "grid", placeItems: "center", color: "var(--ink-500)", fontSize: 11 }}>+3</div>
              </div>
              <div style={{ aspectRatio: "1", background: "#1f4a2a", borderRadius: 18, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 14px, transparent 14px 28px)" }}/>
                <div style={{ position: "absolute", top: 20, left: 20 }}>
                  <span className="discount-badge" style={{ position: "static" }}>MAIS VENDIDO</span>
                </div>
                <div style={{ position: "absolute", top: 20, right: 20, display: "flex", gap: 8 }}>
                  <button style={{ width: 44, height: 44, borderRadius: 999, background: "rgba(255,253,246,0.9)", display: "grid", placeItems: "center" }}><Icon.Heart size={18}/></button>
                  <button style={{ width: 44, height: 44, borderRadius: 999, background: "rgba(255,253,246,0.9)", display: "grid", placeItems: "center" }}><Icon.Send size={18}/></button>
                </div>
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "rgba(255,255,255,0.6)", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em" }}>
                  [ FOTO PRODUTO — SACO 50KG ]
                </div>
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", justifyContent: "center", gap: 6 }}>
                  {[0,1,2,3].map((i) => <span key={i} style={{ width: i===activeImg?24:6, height: 6, borderRadius: 999, background: i===activeImg ? "var(--cream-100)" : "rgba(244,234,213,0.4)" }}/>)}
                </div>
              </div>
            </div>

            {/* INFO */}
            <div>
              <div className="mono" style={{ color: "var(--ink-500)" }}>Santos Mix • Cód. 04-14-08-PRM</div>
              <h1 style={{ marginTop: 8, fontSize: 44, lineHeight: 1.05 }}>NPK 04-14-08 <span className="italic" style={{ color: "var(--orange-600)" }}>Premium</span></h1>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, fontSize: 14, color: "var(--ink-700)" }}>
                <span className="stars" style={{ display: "inline-flex", gap: 1 }}>
                  {[1,2,3,4,5].map(i => <Icon.Star key={i} size={16} color="var(--orange-600)"/>)}
                </span>
                <span className="bold">4.8</span>
                <span style={{ color: "var(--ink-500)" }}>· 142 avaliações · 1.2k vendidos</span>
              </div>

              <div style={{ marginTop: 24, padding: 24, borderRadius: 14, background: "var(--cream-100)" }}>
                <div style={{ fontSize: 13, color: "var(--ink-500)", textDecoration: "line-through" }}>De {brl(p.oldPrice)}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 4 }}>
                  <span className="display" style={{ fontSize: 48, fontWeight: 700, color: "var(--green-800)" }}>{brl(p.price)}</span>
                  <span className="pill pill-orange">17% OFF</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-700)", marginTop: 4 }}>por saco de 50kg • {brl(p.price/50)} o kg</div>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon.Pix size={16} color="var(--green-700)"/> <span className="bold" style={{ color: "var(--green-800)" }}>{brl(p.price * 0.95)}</span> à vista no Pix (5% off)</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon.CreditCard size={16} color="var(--ink-700)"/> ou <span className="bold">12x de {brl(p.price/12)}</span> sem juros</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon.Barcode size={16} color="var(--ink-700)"/> ou boleto agrícola — fatura na safra</div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Quantidade (sacos de 50kg)</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="qty">
                    <button onClick={()=>setQty(Math.max(1, qty-1))}><Icon.Minus size={14} color="currentColor"/></button>
                    <input value={qty} onChange={(e)=>setQty(parseInt(e.target.value)||1)}/>
                    <button onClick={()=>setQty(qty+1)}><Icon.Plus size={14} color="currentColor"/></button>
                  </div>
                  <span style={{ fontSize: 13, color: "var(--ink-500)" }}>= {qty * 50}kg • Total {brl(p.price * qty)}</span>
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: "var(--green-700)" }}>✓ 240 sacos disponíveis em estoque</div>
              </div>

              <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <button className="btn btn-primary btn-lg" onClick={()=>go("carrinho")}><Icon.Cart size={18} color="#fff"/> Adicionar ao carrinho</button>
                <button className="btn btn-green btn-lg" onClick={()=>go("checkout")}>Comprar agora →</button>
              </div>

              {/* CEP / freight calc */}
              <div style={{ marginTop: 24, padding: 20, border: "1.5px solid var(--line-strong)", borderRadius: 14 }}>
                <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon.Truck size={18} color="var(--green-700)"/> Calcular frete pra sua roça
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input className="input" value={cep} onChange={(e)=>setCep(e.target.value)} style={{ flex: 1 }}/>
                  <button className="btn btn-outline">Calcular</button>
                </div>
                <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--green-50)", borderRadius: 10, border: "1px solid var(--green-100)" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--green-800)" }}>✓ Frete grátis na lavoura</div>
                      <div style={{ fontSize: 12, color: "var(--ink-500)" }}>Entrega entre 02 e 04 mai (terça a quinta)</div>
                    </div>
                    <div className="bold" style={{ color: "var(--green-800)" }}>GRÁTIS</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--paper)", borderRadius: 10, border: "1px solid var(--line)" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>Retirada na loja Pouso Alegre/MG</div>
                      <div style={{ fontSize: 12, color: "var(--ink-500)" }}>Pronto em 2h</div>
                    </div>
                    <div className="bold" style={{ color: "var(--green-800)" }}>GRÁTIS</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 16, alignItems: "center", padding: "12px 0", fontSize: 12, color: "var(--ink-500)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.Shield size={14} color="var(--green-700)"/> Compra 100% segura</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.Award size={14} color="var(--green-700)"/> Garantia Santos</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.Whatsapp size={14} color="var(--green-700)"/> Suporte agrônomo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="tabs">
            {[["descricao","Descrição"],["especificacoes","Especificações técnicas"],["aplicacao","Modo de aplicação"],["avaliacoes","Avaliações (142)"]].map(([k,l])=>(
              <button key={k} className={`tab ${tab===k?"active":""}`} onClick={()=>setTab(k)}>{l}</button>
            ))}
          </div>
          <div style={{ padding: "32px 0", display: "grid", gridTemplateColumns: tab==="avaliacoes" ? "1fr 1fr" : "1.5fr 1fr", gap: 48 }}>
            {tab === "descricao" && (
              <>
                <div>
                  <div className="eyebrow">Sobre o produto</div>
                  <h3 style={{ marginTop: 8, fontSize: 28 }}>Nutrição balanceada pra sua próxima colheita</h3>
                  <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "var(--ink-700)" }}>
                    O NPK 04-14-08 Premium da Santos é a fórmula favorita de quem planta soja, milho e café no Sul de Minas. Com nitrogênio de liberação controlada, fósforo solúvel em ácido cítrico e potássio em forma cloretada, é a base certa pra um plantio que rende.
                  </p>
                  <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "var(--ink-700)" }}>
                    Granulometria uniforme pra distribuição precisa — não entope plantadeira, não empedra no estoque. Pra cada saco, a garantia Santos: se não rendeu, a gente troca.
                  </p>
                  <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      {t: "Pra cultura", v: "Soja, milho, café, hortaliças"},
                      {t: "Dose recomendada", v: "300 a 400 kg/ha no plantio"},
                      {t: "Embalagem", v: "Saco de 50kg laminado"},
                      {t: "Validade", v: "24 meses na embalagem fechada"},
                    ].map((it,i)=>(
                      <div key={i} style={{ padding: 16, background: "var(--cream-100)", borderRadius: 10 }}>
                        <div className="mono" style={{ color: "var(--green-700)", fontSize: 10 }}>{it.t}</div>
                        <div style={{ marginTop: 4, fontSize: 14, fontWeight: 500 }}>{it.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <aside style={{ background: "var(--green-900)", color: "var(--cream-100)", borderRadius: 18, padding: 32 }}>
                  <div className="mono" style={{ color: "var(--orange-500)" }}>Análise técnica</div>
                  <h4 style={{ marginTop: 12, fontSize: 24, color: "var(--cream-100)" }}>Garantias da fórmula</h4>
                  <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      {l: "Nitrogênio (N)", v: "4%", color: "var(--orange-500)"},
                      {l: "Fósforo (P₂O₅)", v: "14%", color: "var(--yellow-300)"},
                      {l: "Potássio (K₂O)", v: "8%", color: "var(--green-500)"},
                      {l: "Enxofre (S)", v: "5%", color: "rgba(244,234,213,0.6)"},
                    ].map((it,i)=>(
                      <div key={i}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                          <span>{it.l}</span><span className="bold">{it.v}</span>
                        </div>
                        <div style={{ marginTop: 6, height: 6, background: "rgba(244,234,213,0.1)", borderRadius: 999, overflow: "hidden" }}>
                          <div style={{ width: it.v, height: "100%", background: it.color, borderRadius: 999 }}/>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-block" style={{ marginTop: 24, background: "var(--cream-100)", color: "var(--green-900)" }}>Baixar ficha técnica (PDF)</button>
                </aside>
              </>
            )}
            {tab === "especificacoes" && (
              <div style={{ gridColumn: "1 / -1" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    ["Formulação", "NPK 04-14-08 + 5% S"],
                    ["Granulometria", "2,8 a 4,0 mm"],
                    ["Densidade aparente", "1,02 g/cm³"],
                    ["Solubilidade do fósforo", "Ácido cítrico 2%"],
                    ["Forma física", "Granulado misturado"],
                    ["Higroscopicidade", "Baixa"],
                    ["Embalagem", "50 kg / saco laminado PE"],
                    ["Pallet", "30 sacos / 1.500 kg"],
                    ["Origem", "Brasil"],
                  ].map(([k,v],i)=>(
                    <div key={i} style={{ padding: 16, border: "1px solid var(--line)", borderRadius: 10, background: "var(--paper)" }}>
                      <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{k}</div>
                      <div style={{ marginTop: 4, fontSize: 15, fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === "aplicacao" && (
              <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  {n: "01", t: "Análise do solo", b: "Antes de aplicar, faça análise do solo. Mande pra gente — fazemos a recomendação certa pra sua área."},
                  {n: "02", t: "Aplicação no plantio", b: "Distribua 300 a 400 kg/ha em sulco no momento do plantio. Plantadeira regulada — granulometria uniforme não entope."},
                  {n: "03", t: "Cobertura", b: "30 a 45 dias após plantio, faça cobertura com ureia ou foliar Santos. Combo plantio fecha o ciclo."},
                ].map((s,i)=>(
                  <div key={i} style={{ padding: 32, background: "var(--cream-100)", borderRadius: 18 }}>
                    <div className="display" style={{ fontSize: 56, color: "var(--orange-600)", lineHeight: 1, fontWeight: 700 }}>{s.n}</div>
                    <h4 style={{ marginTop: 16, fontSize: 20 }}>{s.t}</h4>
                    <p style={{ marginTop: 8, fontSize: 14, color: "var(--ink-700)", lineHeight: 1.6 }}>{s.b}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === "avaliacoes" && (
              <>
                <div>
                  <div style={{ display: "flex", gap: 32, alignItems: "center", padding: 24, background: "var(--cream-100)", borderRadius: 14 }}>
                    <div style={{ textAlign: "center" }}>
                      <div className="display" style={{ fontSize: 56, fontWeight: 700, color: "var(--green-800)", lineHeight: 1 }}>4.8</div>
                      <div className="stars" style={{ display: "inline-flex", gap: 2, marginTop: 4 }}>{[1,2,3,4,5].map(i=><Icon.Star key={i} size={16} color="var(--orange-600)"/>)}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 4 }}>142 avaliações</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5,4,3,2,1].map(s => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 12, width: 14 }}>{s}★</span>
                          <div style={{ flex: 1, height: 6, background: "var(--cream-200)", borderRadius: 999 }}>
                            <div style={{ width: `${s===5?78:s===4?16:s===3?4:s===2?1:1}%`, height: "100%", background: "var(--orange-600)", borderRadius: 999 }}/>
                          </div>
                          <span style={{ fontSize: 11, color: "var(--ink-500)", width: 32, textAlign: "right" }}>{s===5?111:s===4?23:s===3?6:s===2?1:1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    {n: "Aldemir T.", c: "Pouso Alegre/MG", r: 5, t: "Comprei pra 12 hectares de café, rendeu demais. Plantadeira não entupiu uma vez. Recomendo.", d: "há 3 dias"},
                    {n: "Sebastião R.", c: "Itajubá/MG", r: 5, t: "Tô comprando da Santos há 8 anos. Esse NPK é o melhor pra minha lavoura de soja. Frete chegou na quinta como combinado.", d: "há 1 semana"},
                  ].map((rev,i)=>(
                    <div key={i} className="card" style={{ padding: 20 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 36, height: 36, borderRadius: 999, background: "var(--green-700)", color: "var(--cream-100)", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>{rev.n[0]}</div>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 500 }}>{rev.n}</div>
                            <div style={{ fontSize: 12, color: "var(--ink-500)" }}>{rev.c} · {rev.d}</div>
                          </div>
                        </div>
                        <div className="stars" style={{ display: "inline-flex", gap: 2 }}>{Array.from({length: rev.r}).map((_,i)=><Icon.Star key={i} size={14} color="var(--orange-600)"/>)}</div>
                      </div>
                      <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.5, color: "var(--ink-700)" }}>{rev.t}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section bg-cream-warm">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <div>
              <div className="eyebrow">Pra fechar o combo</div>
              <h2>Quem comprou esse, levou também</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {PRODUCTS.slice(8, 12).map(p => <ProductCard key={p.id} p={p} onClick={()=>go("produto")}/>)}
          </div>
        </div>
      </section>
    </div>
  );
};
