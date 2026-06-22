/* global React, Icon, ProductCard, PRODUCTS, CART_ITEMS, brl, go */
const { useState } = React;

window.CartPage = function CartPage() {
  const [items, setItems] = useState(CART_ITEMS);
  const [coupon, setCoupon] = useState("");

  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = sub * 0.05;
  const shipping = sub > 800 ? 0 : 89;
  const total = sub - discount + shipping;

  const updateQty = (id, q) => setItems(items.map(i => i.id === id ? {...i, qty: Math.max(1, q)} : i));
  const remove = (id) => setItems(items.filter(i => i.id !== id));

  return (
    <div>
      <section style={{ background: "var(--cream-100)", padding: "32px 0" }}>
        <div className="container">
          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 11, marginBottom: 12 }}>
            <a href="#home" style={{ color: "var(--green-700)" }}>Início</a> / Carrinho
          </div>
          <h1 style={{ fontSize: 56 }}>{window.BRAND.copy.cart.titleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{window.BRAND.copy.cart.italic}</span></h1>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 12, fontSize: 13, color: "var(--ink-500)" }}>
            <span><span style={{ color: "var(--green-700)", fontWeight: 600 }}>1.</span> Carrinho</span>
            <span>→</span>
            <span><span style={{ fontWeight: 600 }}>2.</span> Identificação</span>
            <span>→</span>
            <span><span style={{ fontWeight: 600 }}>3.</span> Entrega e pagamento</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32 }}>
          <div>
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>{items.length} produtos no carrinho</div>
                <button className="btn btn-ghost btn-sm" style={{ color: "var(--ink-500)" }}>Esvaziar carrinho</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {items.map((it, idx) => (
                  <div key={it.id} style={{ display: "grid", gridTemplateColumns: "100px 1fr auto auto", gap: 20, padding: "20px 0", borderBottom: idx < items.length-1 ? "1px solid var(--line)" : "none", alignItems: "center" }}>
                    <div style={{ aspectRatio: "1", background: it.color, borderRadius: 10, position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 8px, transparent 8px 16px)" }}/>
                    </div>
                    <div>
                      <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{it.brand}</div>
                      <div className="display" style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>{it.name}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 4 }}>Vendido e entregue por Santos</div>
                      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                        <button onClick={()=>remove(it.id)} className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--ink-500)" }}><Icon.Trash size={13} color="currentColor"/> Remover</button>
                        <button className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--ink-500)" }}><Icon.Heart size={13} color="currentColor"/> Salvar pra depois</button>
                      </div>
                    </div>
                    <div className="qty">
                      <button onClick={()=>updateQty(it.id, it.qty-1)}><Icon.Minus size={14} color="currentColor"/></button>
                      <input value={it.qty} onChange={(e)=>updateQty(it.id, parseInt(e.target.value)||1)}/>
                      <button onClick={()=>updateQty(it.id, it.qty+1)}><Icon.Plus size={14} color="currentColor"/></button>
                    </div>
                    <div style={{ textAlign: "right", minWidth: 110 }}>
                      <div className="display" style={{ fontSize: 20, fontWeight: 700, color: "var(--green-800)" }}>{brl(it.price * it.qty)}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-500)" }}>{it.qty} × {brl(it.price)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 16, padding: 20, background: "var(--green-50)", borderRadius: 14, border: "1px solid var(--green-100)", display: "flex", alignItems: "center", gap: 16 }}>
              <Icon.Truck size={24} color="var(--green-700)"/>
              <div style={{ flex: 1 }}>
                <div className="bold" style={{ color: "var(--green-800)" }}>{window.BRAND.copy.cart.freeShippingTitle}</div>
                <div style={{ fontSize: 13, color: "var(--ink-700)" }}>{window.BRAND.copy.cart.freeShippingBody}</div>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <div className="display" style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>{window.BRAND.copy.cart.crossSell}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {PRODUCTS.slice(4, 8).map(p => <ProductCard key={p.id} p={p}/>)}
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <aside>
            <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <div className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>Resumo da compra</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                  <Row l={`Subtotal (${items.reduce((s,i)=>s+i.qty,0)} itens)`} v={brl(sub)} />
                  <Row l="Cupom SAFRA5" v={`- ${brl(discount)}`} green/>
                  <Row l="Frete (Pouso Alegre/MG)" v={shipping === 0 ? "GRÁTIS" : brl(shipping)} green={shipping===0}/>
                  <hr className="divider" style={{ margin: "8px 0" }}/>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span className="display" style={{ fontSize: 18, fontWeight: 600 }}>Total</span>
                    <div style={{ textAlign: "right" }}>
                      <div className="display" style={{ fontSize: 32, fontWeight: 700, color: "var(--green-800)" }}>{brl(total)}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-500)" }}>ou 12x de {brl(total/12)} sem juros</div>
                    </div>
                  </div>
                  <div style={{ padding: 12, background: "var(--cream-100)", borderRadius: 8, fontSize: 13, marginTop: 4, display: "flex", gap: 8, alignItems: "center" }}>
                    <Icon.Pix size={16} color="var(--green-700)"/>
                    <span>Pague no Pix por <span className="bold" style={{ color: "var(--green-800)" }}>{brl(total * 0.95)}</span> (5% off)</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block" style={{ marginTop: 20 }} onClick={()=>go("checkout")}>Ir pro checkout →</button>
                <button className="btn btn-outline btn-block" style={{ marginTop: 8 }} onClick={()=>go("home")}>Continuar comprando</button>
              </div>

              <div className="card" style={{ padding: 20 }}>
                <div className="display" style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Cupom de desconto</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input className="input" placeholder="Digite seu cupom" value={coupon} onChange={(e)=>setCoupon(e.target.value)} style={{ flex: 1 }}/>
                  <button className="btn btn-green">Aplicar</button>
                </div>
                <div style={{ marginTop: 12, fontSize: 12, color: "var(--green-700)" }}>✓ SAFRA5 aplicado — 5% off no Pix</div>
              </div>

              <div className="card-soft" style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon.Whatsapp size={24} color="var(--green-700)"/>
                  <div>
                    <div className="display" style={{ fontSize: 15, fontWeight: 600 }}>Dúvida na compra?</div>
                    <div style={{ fontSize: 12, color: "var(--ink-500)" }}>Fala com agrônomo no WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

function Row({l, v, green}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", color: green ? "var(--green-700)" : "var(--ink-700)" }}>
      <span>{l}</span><span className={green?"bold":""}>{v}</span>
    </div>
  );
}
