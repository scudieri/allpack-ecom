/* global React, Icon, ProductCard, brl, go */
const { useState, useEffect } = React;

window.PdpPage = function PdpPage({ handle }) {
  const p = (window.PRODUCTS || []).find(x => x.handle === handle);
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const [vi, setVi] = useState(0);
  const [added, setAdded] = useState(false);
  useEffect(() => { setQty(1); setImg(0); setVi(0); setAdded(false); }, [handle]);

  if (!p) {
    return (
      <section style={{ padding: "96px 0", textAlign: "center", background: "#f4f8fc" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Produto indisponível</div>
          <h1 style={{ fontSize: 40, color: "#002840", margin: "0 0 12px" }}>Este produto não está mais disponível</h1>
          <p style={{ color: "#334d62", marginBottom: 28 }}>Ele pode ter saído de linha ou estar sem estoque no momento.</p>
          <button className="btn btn-primary btn-lg" onClick={() => go("categoria")}>Ver catálogo completo</button>
        </div>
      </section>
    );
  }

  const variants = p.variants && p.variants.length ? p.variants : null;
  const variant = variants ? (variants[vi] || variants[0]) : null;
  const price = variant ? variant.price : p.price;
  const sku = variant ? variant.sku : p.sku;
  const canBuy = price > 0 && (variant ? variant.variantId && variant.available !== false : p.variantId);
  const variantId = variant ? variant.variantId : p.variantId;
  const photos = p.photos && p.photos.length ? p.photos : [];
  const related = (window.PRODUCTS || []).filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const cat = (window.CATEGORIES || []).find(c => c.id === p.category);

  const add = () => { window.addToCart(p, qty, variant); setAdded(true); setTimeout(() => setAdded(false), 2500); };
  const buyNow = () => { window.location.href = window.buyNowUrl(variantId, qty); };

  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh" }}>
      <section style={{ background: "#fff", padding: "28px 0 56px", borderBottom: "1px solid #e2ecf5" }}>
        <div className="container">
          <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 11, marginBottom: 24, letterSpacing: "0.08em" }}>
            <a href="#home" onClick={e => { e.preventDefault(); go("home"); }} style={{ color: "#0195ff" }}>Início</a>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
            {cat && <><a href={"#categoria/" + cat.id} onClick={e => { e.preventDefault(); go("categoria/" + cat.id); }} style={{ color: "#0195ff" }}>{cat.label}</a><span style={{ margin: "0 8px", opacity: 0.4 }}>/</span></>}
            <span>{p.name}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56 }}>
            {/* Galeria */}
            <div style={{ display: "grid", gridTemplateColumns: photos.length > 1 ? "84px 1fr" : "1fr", gap: 16, alignItems: "start" }}>
              {photos.length > 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {photos.map((src, i) => (
                    <button key={i} onClick={() => setImg(i)} style={{ aspectRatio: "1", borderRadius: 12, padding: 0, overflow: "hidden", background: "#fff", cursor: "pointer", border: img === i ? "2px solid #0195ff" : "1.5px solid #e2ecf5" }}>
                      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </button>
                  ))}
                </div>
              )}
              <div style={{ aspectRatio: "1", background: "#fff", border: "1.5px solid #e2ecf5", borderRadius: 20, overflow: "hidden", display: "grid", placeItems: "center" }}>
                {photos.length
                  ? <img src={photos[img] || photos[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  : <div style={{ color: "#c8dcea", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em" }}>FOTO EM BREVE</div>}
              </div>
            </div>

            {/* Informações */}
            <div>
              <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 11, letterSpacing: "0.1em" }}>{p.brand} · SKU {sku}</div>
              <h1 style={{ margin: "10px 0 0", fontSize: 38, lineHeight: 1.1, color: "#002840" }}>{p.name}</h1>
              <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "#1a7f4b" }}>● Em estoque</div>

              <div style={{ marginTop: 24, padding: 24, borderRadius: 16, background: "#f4f8fc", border: "1px solid #e2ecf5" }}>
                {price > 0
                  ? <>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span style={{ fontSize: 44, fontWeight: 800, color: "#002840", fontFamily: "var(--display)", letterSpacing: "-0.02em" }}>{brl(price)}</span>
                        <span style={{ fontSize: 14, color: "#7a9ab0" }}>/{p.unit}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "#334d62", marginTop: 4 }}>Frete e parcelamento calculados no checkout seguro da Shopify.</div>
                    </>
                  : <div style={{ fontSize: 20, fontWeight: 700, color: "#0195ff" }}>Consultar preço</div>}
              </div>

              {variants && (
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#002840", marginBottom: 10 }}>Tamanho: <span style={{ color: "#0195ff" }}>{variant.label}</span></div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {variants.map((v, i) => {
                      const off = v.available === false;
                      return (
                        <button key={i} disabled={off} onClick={() => setVi(i)}
                          style={{ minWidth: 56, padding: "10px 16px", borderRadius: 10, fontWeight: 600, fontSize: 14, fontFamily: "inherit", cursor: off ? "not-allowed" : "pointer",
                            border: vi === i ? "2px solid #0195ff" : "1.5px solid #c8dcea", background: vi === i ? "#eef5fc" : "#fff", color: off ? "#b8c9d6" : "#002840", textDecoration: off ? "line-through" : "none" }}>
                          {v.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {canBuy ? (
                <>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 14 }}>
                    <div className="qty">
                      <button onClick={() => setQty(Math.max(1, qty - 1))}><Icon.Minus size={14} color="currentColor" /></button>
                      <input value={qty} onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
                      <button onClick={() => setQty(qty + 1)}><Icon.Plus size={14} color="currentColor" /></button>
                    </div>
                    <span style={{ fontSize: 13, color: "#334d62" }}>Total <b style={{ color: "#002840" }}>{brl(price * qty)}</b></span>
                  </div>
                  <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <button className="btn btn-primary btn-lg" onClick={add}><Icon.Cart size={18} color="#fff" /> {added ? "Adicionado ✓" : "Adicionar ao carrinho"}</button>
                    <button className="btn btn-lg" onClick={buyNow} style={{ background: "#002840", color: "#fff", justifyContent: "center", fontWeight: 700 }}>Comprar agora →</button>
                  </div>
                  {added && <button onClick={() => go("carrinho")} style={{ marginTop: 12, background: "none", border: 0, color: "#0195ff", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Ver carrinho →</button>}
                </>
              ) : (
                <div style={{ marginTop: 24 }}>
                  <button className="btn btn-primary btn-lg btn-block"><Icon.Whatsapp size={18} color="#fff" /> Solicitar cotação</button>
                </div>
              )}

              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[["Truck", "Entrega em todo o Brasil"], ["Award", "Certificação ANVISA"], ["Shield", "Compra 100% segura"]].map(([ic, tx], i) => {
                  const I = Icon[ic];
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#334d62", lineHeight: 1.3 }}>
                      <I size={16} color="#0195ff" /> {tx}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição + ficha */}
      <section style={{ padding: "56px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 40 }}>
          <div className="card" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Descrição</div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#334d62", margin: 0 }}>{p.description || "Descrição em breve."}</p>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Ficha do produto</div>
            {[["SKU", sku], ["Categoria", cat ? cat.label : "—"], ["Marca", p.brand], variants ? ["Tamanhos", variants.map(v => v.label).join(", ")] : null].filter(Boolean).map(([k, v], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "12px 0", borderBottom: "1px solid #e2ecf5", fontSize: 14 }}>
                <span style={{ color: "#7a9ab0" }}>{k}</span><span style={{ color: "#002840", fontWeight: 600, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ padding: "0 0 88px" }}>
          <div className="container">
            <h2 style={{ fontSize: 30, color: "#002840", margin: "0 0 24px" }}>Produtos <span style={{ fontStyle: "italic", color: "#0195ff" }}>relacionados</span></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {related.map(r => <ProductCard key={r.id} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
