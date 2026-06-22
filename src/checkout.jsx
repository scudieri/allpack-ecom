/* global React, Icon, CART_ITEMS, brl, go */
const { useState } = React;

window.CheckoutPage = function CheckoutPage() {
  const [step, setStep] = useState(2);
  const [pay, setPay] = useState("pix");
  const [addr, setAddr] = useState(0);

  const items = CART_ITEMS;
  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const total = sub * 0.95;

  return (
    <div>
      <section style={{ background: "var(--cream-100)", padding: "32px 0" }}>
        <div className="container">
          <h1 style={{ fontSize: 48 }}>{window.BRAND.copy.checkout.titleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{window.BRAND.copy.checkout.italic}</span></h1>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
            {[
              { n: 1, t: "Carrinho", done: true },
              { n: 2, t: "Identificação", done: true },
              { n: 3, t: "Entrega" },
              { n: 4, t: "Pagamento" },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 999, background: s.done || s.n === step ? "var(--green-700)" : "var(--cream-200)", color: s.done || s.n === step ? "var(--cream-100)" : "var(--ink-500)", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 600 }}>
                    {s.done ? "✓" : s.n}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: s.n === step ? 600 : 400, color: s.n === step ? "var(--ink-900)" : "var(--ink-500)" }}>{s.t}</span>
                </div>
                {i < 3 && <div style={{ flex: "0 0 24px", height: 1, background: "var(--ink-300)" }}/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Endereço */}
            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div className="display" style={{ fontSize: 22, fontWeight: 600, display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon.Pin size={22} color="var(--green-700)"/> {window.BRAND.copy.checkout.addressTitle}
                </div>
                <button className="btn btn-ghost btn-sm" style={{ color: "var(--green-700)" }}>+ Novo endereço</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { n: "Sítio Boa Vista — minha lavoura", l: "Estrada do Café, km 12 — Pouso Alegre/MG • CEP 37550-000" },
                  { n: "Casa", l: "Rua das Flores, 145 — Centro, Pouso Alegre/MG" },
                ].map((a, i) => (
                  <div key={i} className={`radio-card ${addr === i ? "selected" : ""}`} onClick={()=>setAddr(i)}>
                    <div className="radio-dot"/>
                    <div>
                      <div className="display" style={{ fontSize: 15, fontWeight: 600 }}>{a.n}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 4 }}>{a.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frete */}
            <div className="card" style={{ padding: 32 }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.Truck size={22} color="var(--green-700)"/> Como você quer receber?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { t: "Frete grátis na lavoura", d: "Chega entre 02 e 04 mai (terça a quinta)", v: "GRÁTIS", sel: true },
                  { t: "Frete expresso", d: "Chega amanhã, 30 abr — caminhão direto", v: brl(180) },
                  { t: "Retirada na loja Pouso Alegre", d: "Pronto em 2h • Av. das Nações, 1466", v: "GRÁTIS" },
                ].map((o, i) => (
                  <div key={i} className={`radio-card ${o.sel ? "selected" : ""}`}>
                    <div className="radio-dot"/>
                    <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div className="display" style={{ fontSize: 15, fontWeight: 600 }}>{o.t}</div>
                        <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 2 }}>{o.d}</div>
                      </div>
                      <div className="bold" style={{ color: o.v === "GRÁTIS" ? "var(--green-700)" : "var(--ink-900)" }}>{o.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagamento */}
            <div className="card" style={{ padding: 32 }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.CreditCard size={22} color="var(--green-700)"/> Como você quer pagar?
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 24 }}>
                {[
                  { id: "pix", t: "Pix", s: "5% off", icon: "Pix" },
                  { id: "cartao", t: "Cartão", s: "12x s/ juros", icon: "CreditCard" },
                  { id: "boleto", t: "Boleto", s: "À vista", icon: "Barcode" },
                  { id: "agricola", t: "Boleto agrícola", s: "Pague na safra", icon: "Calendar" },
                ].map(opt => {
                  const I = Icon[opt.icon];
                  return (
                    <button key={opt.id} onClick={()=>setPay(opt.id)} className="radio-card" style={{ flexDirection: "column", textAlign: "center", padding: 16, borderColor: pay === opt.id ? "var(--green-700)" : undefined, background: pay === opt.id ? "var(--green-50)" : "var(--paper)" }}>
                      <I size={24} color={pay === opt.id ? "var(--green-700)" : "var(--ink-700)"}/>
                      <div className="display" style={{ fontSize: 14, fontWeight: 600, marginTop: 8 }}>{opt.t}</div>
                      <div style={{ fontSize: 11, color: pay === opt.id ? "var(--green-700)" : "var(--ink-500)" }}>{opt.s}</div>
                    </button>
                  );
                })}
              </div>

              {pay === "pix" && (
                <div style={{ padding: 24, background: "var(--green-50)", borderRadius: 14, border: "1px solid var(--green-100)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "center" }}>
                  <div style={{ width: 140, height: 140, background: "var(--green-900)", borderRadius: 12, padding: 12 }}>
                    <div style={{ width: "100%", height: "100%", background: "var(--cream-100)", borderRadius: 6, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "repeat(12, 1fr)", gap: 1, padding: 6 }}>
                      {Array.from({length: 144}).map((_,i) => <div key={i} style={{ background: Math.random() > 0.5 ? "var(--green-900)" : "transparent" }}/>)}
                    </div>
                  </div>
                  <div>
                    <div className="display" style={{ fontSize: 20, fontWeight: 600, color: "var(--green-800)" }}>Pague no Pix e ganhe 5%</div>
                    <div style={{ fontSize: 14, color: "var(--ink-700)", marginTop: 8 }}>Aponte a câmera no QR code, ou copie a chave abaixo:</div>
                    <div style={{ marginTop: 12, padding: "10px 14px", background: "var(--paper)", borderRadius: 8, border: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>00020126360014BR.GOV.BCB.PIX0114+5535342414...</span>
                      <button className="btn btn-sm btn-green">Copiar</button>
                    </div>
                  </div>
                </div>
              )}
              {pay === "cartao" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div className="field" style={{ gridColumn: "1 / -1" }}><label className="field-label">Número do cartão</label><input className="input" placeholder="0000 0000 0000 0000"/></div>
                  <div className="field" style={{ gridColumn: "1 / -1" }}><label className="field-label">Nome impresso</label><input className="input" placeholder="JOÃO DA SILVA"/></div>
                  <div className="field"><label className="field-label">Validade</label><input className="input" placeholder="MM/AA"/></div>
                  <div className="field"><label className="field-label">CVV</label><input className="input" placeholder="123"/></div>
                  <div className="field" style={{ gridColumn: "1 / -1" }}>
                    <label className="field-label">Parcelas</label>
                    <select className="select"><option>12x de {brl(total/12)} sem juros (Total {brl(total)})</option><option>6x de {brl(total/6)} sem juros</option><option>1x de {brl(total)} à vista</option></select>
                  </div>
                </div>
              )}
              {pay === "agricola" && (
                <div style={{ padding: 20, background: "var(--cream-100)", borderRadius: 12 }}>
                  <div className="display" style={{ fontSize: 18, fontWeight: 600 }}>Pague na safra que vem</div>
                  <p style={{ fontSize: 14, color: "var(--ink-700)", marginTop: 8, lineHeight: 1.5 }}>Pra produtor cadastrado na Santos, fechamos o boleto pra vencer junto com a colheita. Análise em até 24h via WhatsApp.</p>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn btn-outline" onClick={()=>go("carrinho")}>← Voltar pro carrinho</button>
              <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={()=>alert("Pedido confirmado! 🌾")}>Finalizar pedido • {brl(total)} →</button>
            </div>
          </div>

          {/* Sidebar resumo */}
          <aside>
            <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <div className="display" style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Seu pedido</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map(it => (
                    <div key={it.id} style={{ display: "flex", gap: 12 }}>
                      <div style={{ width: 56, height: 56, background: it.color, borderRadius: 8, flexShrink: 0, position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, transparent 6px 12px)" }}/>
                        <span style={{ position: "absolute", top: -4, right: -4, background: "var(--ink-900)", color: "var(--cream-100)", fontSize: 10, fontWeight: 600, borderRadius: 999, width: 18, height: 18, display: "grid", placeItems: "center" }}>{it.qty}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{it.name}</div>
                        <div style={{ fontSize: 11, color: "var(--ink-500)", marginTop: 2 }}>{brl(it.price)} × {it.qty}</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{brl(it.price * it.qty)}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ margin: "16px 0" }}/>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span>Subtotal</span><span>{brl(sub)}</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--green-700)" }}><span>Cupom SAFRA5</span><span>- {brl(sub*0.05)}</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--green-700)" }}><span>Frete</span><span className="bold">GRÁTIS</span></div>
                </div>
                <hr className="divider" style={{ margin: "16px 0" }}/>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span className="display" style={{ fontSize: 16, fontWeight: 600 }}>Total</span>
                  <span className="display" style={{ fontSize: 30, fontWeight: 700, color: "var(--green-800)" }}>{brl(total)}</span>
                </div>
              </div>

              <div className="card-soft" style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
                <Icon.Shield size={20} color="var(--green-700)"/>
                <div style={{ fontSize: 12, color: "var(--ink-700)" }}>Compra 100% segura. Seus dados protegidos.</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
