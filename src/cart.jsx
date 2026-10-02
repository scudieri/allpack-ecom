/* global React, Icon, ProductCard, brl, go */

window.CartPage = function CartPage() {
  const [items, setItems] = window.useCart();

  // Cruza o carrinho com o catálogo atual da Shopify: preço atualizado e itens que saíram de venda.
  const index = {};
  (window.PRODUCTS || []).forEach(p => {
    if (p.variants) p.variants.forEach(v => { index[v.variantId] = { price: v.price, ok: v.available !== false }; });
    else if (p.variantId) index[p.variantId] = { price: p.price, ok: true };
  });
  const rows = items.map(i => {
    const live = index[i.variantId];
    return { ...i, price: live ? live.price : i.price, available: !!live && live.ok };
  });
  const buyable = rows.filter(r => r.available);
  const count = buyable.reduce((s, i) => s + i.qty, 0);
  const total = buyable.reduce((s, i) => s + i.price * i.qty, 0);

  const updateQty = (key, q) => setItems(items.map(i => i.key === key ? { ...i, qty: Math.max(1, q) } : i));
  const remove = (key) => setItems(items.filter(i => i.key !== key));
  const checkout = () => { window.location.href = window.buildShopifyCartUrl(buyable); };
  const suggestions = (window.PRODUCTS || []).filter(p => !items.some(i => i.id === p.id)).slice(0, 4);

  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid #e2ecf5", padding: "36px 0 40px" }}>
        <div className="container">
          <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 11, marginBottom: 14, letterSpacing: "0.08em" }}>
            <a href="#home" onClick={e => { e.preventDefault(); go("home"); }} style={{ color: "#0195ff" }}>Início</a>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span><span>Carrinho</span>
          </div>
          <h1 style={{ fontSize: 48, color: "#002840", margin: 0 }}>Seu <span style={{ fontStyle: "italic", color: "#0195ff" }}>carrinho</span></h1>
        </div>
      </section>

      <section style={{ padding: "40px 0 96px" }}>
        <div className="container">
          {rows.length === 0 ? (
            <div className="card" style={{ padding: 64, textAlign: "center" }}>
              <Icon.Cart size={40} color="#c8dcea" />
              <h3 style={{ fontSize: 26, color: "#002840", margin: "16px 0 8px" }}>Seu carrinho está vazio</h3>
              <p style={{ color: "#334d62", margin: "0 0 24px" }}>Explore o catálogo e adicione os produtos que você precisa.</p>
              <button className="btn btn-primary btn-lg" onClick={() => go("categoria")}>Ver catálogo</button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "start" }}>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#002840" }}>{rows.length} {rows.length === 1 ? "item" : "itens"}</div>
                  <button onClick={() => setItems([])} className="btn btn-ghost btn-sm" style={{ color: "#7a9ab0" }}>Esvaziar carrinho</button>
                </div>
                {rows.map((it, idx) => (
                  <div key={it.key} style={{ display: "grid", gridTemplateColumns: "88px 1fr auto auto", gap: 18, padding: "20px 0", borderTop: "1px solid #e2ecf5", alignItems: "center", opacity: it.available ? 1 : 0.55 }}>
                    <a href={"#produto/" + it.handle} onClick={e => { e.preventDefault(); go("produto/" + it.handle); }}
                      style={{ aspectRatio: "1", background: "#fff", border: "1.5px solid #e2ecf5", borderRadius: 12, overflow: "hidden", display: "grid", placeItems: "center" }}>
                      {it.photo ? <img src={it.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <Icon.Box size={24} color="#c8dcea" />}
                    </a>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#002840", lineHeight: 1.3 }}>{it.name}</div>
                      {it.variantLabel && <div style={{ fontSize: 13, color: "#7a9ab0", marginTop: 4 }}>Tamanho: {it.variantLabel}</div>}
                      {!it.available && <div style={{ fontSize: 13, color: "#c0392b", fontWeight: 600, marginTop: 4 }}>Indisponível no momento — não será incluído na compra</div>}
                      <button onClick={() => remove(it.key)} style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#7a9ab0", background: "none", border: 0, cursor: "pointer", fontFamily: "inherit", padding: 0 }}>
                        <Icon.Trash size={13} color="currentColor" /> Remover
                      </button>
                    </div>
                    <div className="qty">
                      <button onClick={() => updateQty(it.key, it.qty - 1)}><Icon.Minus size={14} color="currentColor" /></button>
                      <input value={it.qty} onChange={e => updateQty(it.key, parseInt(e.target.value) || 1)} />
                      <button onClick={() => updateQty(it.key, it.qty + 1)}><Icon.Plus size={14} color="currentColor" /></button>
                    </div>
                    <div style={{ textAlign: "right", minWidth: 110 }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#002840" }}>{brl(it.price * it.qty)}</div>
                      <div style={{ fontSize: 11, color: "#7a9ab0" }}>{it.qty} × {brl(it.price)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="card" style={{ padding: 24, position: "sticky", top: 190 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#002840", marginBottom: 16 }}>Resumo da compra</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#334d62", marginBottom: 8 }}><span>Subtotal ({count} {count === 1 ? "item" : "itens"})</span><span>{brl(total)}</span></div>
                <div style={{ fontSize: 12, color: "#7a9ab0" }}>Frete e formas de pagamento são calculados no checkout seguro da Shopify.</div>
                <hr className="divider" style={{ margin: "16px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "#002840" }}>Total</span>
                  <span style={{ fontSize: 30, fontWeight: 800, color: "#002840" }}>{brl(total)}</span>
                </div>
                <button className="btn btn-primary btn-lg btn-block" style={{ marginTop: 20 }} disabled={buyable.length === 0} onClick={checkout}>Finalizar compra →</button>
                <button className="btn btn-outline btn-block" style={{ marginTop: 8 }} onClick={() => go("categoria")}>Continuar comprando</button>
              </aside>
            </div>
          )}

          {suggestions.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <h2 style={{ fontSize: 28, color: "#002840", margin: "0 0 20px" }}>Aproveite <span style={{ fontStyle: "italic", color: "#0195ff" }}>também</span></h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {suggestions.map(p => <ProductCard key={p.id} p={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
