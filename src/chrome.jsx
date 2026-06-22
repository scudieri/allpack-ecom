/* global React, BrandLogo, Icon, brl, t */
const { useState, useEffect } = React;

window.useRoute = function useRoute() {
  const [route, setRoute] = React.useState(window.location.hash.slice(1) || "home");
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { window.location.hash = r; }];
};

window.go = (route) => { window.location.hash = route; };

window.TopStrip = function TopStrip() {
  const items = window.BRAND.copy.topStrip;
  const all = [...items, ...items, ...items];
  return (
    <div style={{ background: "#002840", padding: "9px 0", overflow: "hidden" }}>
      <div className="hero-strip-track" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.13em", color: "rgba(255,255,255,0.65)", display: "flex", gap: 48, whiteSpace: "nowrap" }}>
        {all.map((tx, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: "#0195ff", fontSize: 8 }}>◆</span> {tx}
          </span>
        ))}
      </div>
    </div>
  );
};

window.Header = function Header({ cartCount = 3 }) {
  const h = window.BRAND.copy.header;

  return (
    <header style={{ position: "fixed", left: 0, right: 0, top: 0, zIndex: 40, background: "#fff", boxShadow: "0 1px 0 #e2ecf5, 0 4px 20px rgba(0,40,96,0.06)" }}>
      <TopStrip />

      {/* Linha principal */}
      <div className="container" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 40, padding: "14px 40px" }}>

        <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>
          <BrandLogo size={46} />
        </a>

        {/* Busca */}
        <div style={{ position: "relative", maxWidth: 560, width: "100%", justifySelf: "center" }}>
          <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
            <Icon.Search size={16} color="#7a9ab0" />
          </div>
          <input
            placeholder={h.searchPlaceholder}
            style={{ width: "100%", height: 44, paddingLeft: 44, paddingRight: 108, border: "1.5px solid #e2ecf5", borderRadius: 999, background: "#f7fafd", fontSize: 14, color: "#002840", outline: "none", fontFamily: "inherit", transition: "border-color 0.15s, box-shadow 0.15s" }}
            onFocus={e => { e.target.style.borderColor = "#0195ff"; e.target.style.boxShadow = "0 0 0 3px rgba(1,149,255,0.1)"; go("busca"); }}
            onBlur={e => { e.target.style.borderColor = "#e2ecf5"; e.target.style.boxShadow = "none"; }}
          />
          <button className="btn btn-primary btn-sm" style={{ position: "absolute", right: 5, top: 5, height: 34, borderRadius: 999, fontSize: 13, fontWeight: 600 }}>
            {h.searchBtn}
          </button>
        </div>

        {/* Conta + Carrinho */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("conta"); }}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 12, cursor: "pointer", transition: "background 0.15s", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.background = "#f0f6fc"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: "#eef5fc", display: "grid", placeItems: "center" }}>
              <Icon.User size={17} color="#004160" />
            </div>
            <div style={{ lineHeight: 1.3 }}>
              <div style={{ fontSize: 11, color: "#7a9ab0", fontWeight: 400 }}>{h.greetingPrefix} {h.greetingName}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#002840" }}>{h.myAccount}</div>
            </div>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); go("carrinho"); }}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "#002840", color: "#fff", padding: "10px 20px", borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: "pointer", textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#003a5c"}
            onMouseLeave={e => e.currentTarget.style.background = "#002840"}>
            <Icon.Cart size={17} color="#fff" />
            <span>{h.cart}</span>
            <span style={{ background: "#0195ff", borderRadius: 999, fontSize: 11, fontWeight: 700, padding: "2px 7px" }}>{cartCount}</span>
          </a>
        </div>
      </div>

      {/* Nav de categorias */}
      <div style={{ borderTop: "1px solid #edf3f8", background: "#fff" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", padding: "0 40px" }}>
          {h.categories.map((c, i) => (
            <a key={i} href="#" onClick={(e) => { e.preventDefault(); go("categoria"); }}
              style={{ padding: "11px 16px", fontSize: 13, fontWeight: 500, color: "#334d62", whiteSpace: "nowrap", borderBottom: "2px solid transparent", display: "block", transition: "color 0.15s, border-color 0.15s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#0195ff"; e.currentTarget.style.borderBottomColor = "#0195ff"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#334d62"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
              {c}
            </a>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 20, paddingLeft: 20, flexShrink: 0 }}>
            <a href="#login" onClick={(e) => { e.preventDefault(); go("login"); }}
              style={{ fontSize: 13, fontWeight: 600, color: "#0195ff", cursor: "pointer" }}>{h.login}</a>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#7a9ab0" }}>
              <Icon.Whatsapp size={14} color="#0195ff" />
              <span>{h.phoneLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

window.Footer = function Footer() {
  const f = window.BRAND.copy.footer;
  const c = window.BRAND.contact;
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          <div>
            <BrandLogo size={38} mode="inverse" />
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 260 }}>{f.tagline}</p>
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Pin size={14} color="#0195ff"/> {c.address}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Whatsapp size={14} color="#0195ff"/> {c.whatsapp || c.phone}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Mail size={14} color="#0195ff"/> {c.email}</div>
            </div>
          </div>
          {f.cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.15em", color: "#0195ff", marginBottom: 20, textTransform: "uppercase" }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", transition: "color 0.15s" }}
                      onMouseEnter={e => e.target.style.color = "#fff"}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.07)", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          <div>{f.copyright}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["PIX", "BOLETO", "VISA", "MASTER"].map(m => (
              <span key={m} style={{ fontFamily: "var(--mono)", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 4, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

window.TrustBanner = function TrustBanner() {
  const items = window.BRAND.copy.trust;
  return (
    <div style={{ background: "#fff", borderTop: "1px solid #e2ecf5", borderBottom: "1px solid #e2ecf5", padding: "28px 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {items.map((it, i) => {
          const I = Icon[it.icon];
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "4px 24px", borderRight: i < 3 ? "1px solid #e2ecf5" : "none" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#eef5fc", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <I size={20} color="#0195ff" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#002840" }}>{it.title}</div>
                <div style={{ fontSize: 12, color: "#7a9ab0", marginTop: 2 }}>{it.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

window.ProductCard = function ProductCard({ p, onClick }) {
  const pc = window.BRAND.copy.productCard || {};
  const hasPrice = p.price > 0;
  const [wish, setWish] = React.useState(false);
  return (
    <div className="prod-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="prod-img">
        {p.badge && <span className="discount-badge">{p.badge}</span>}
        {p.photoUrl
          ? <img src={p.photoUrl} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.style.display = "none"} />
          : <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "#f0f6fc" }}>
              <div style={{ color: "#c8dcea", fontFamily: "var(--mono)", fontSize: 10 }}>{pc.photoLabel || "FOTO"}</div>
            </div>
        }
        <button onClick={e => { e.stopPropagation(); setWish(!wish); }}
          style={{ position: "absolute", top: 10, right: 10, width: 32, height: 32, borderRadius: 999, background: "#fff", display: "grid", placeItems: "center", border: "1px solid #e2ecf5", boxShadow: "0 1px 4px rgba(0,40,96,0.08)", zIndex: 2, transition: "transform 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          <Icon.Heart size={15} color={wish ? "#e53e3e" : "#7a9ab0"} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ fontFamily: "var(--mono)", color: "#7a9ab0", fontSize: 10, letterSpacing: "0.1em" }}>{p.brand}</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#002840", lineHeight: 1.3, minHeight: 40 }}>{p.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ color: "#ffb948", fontSize: 13 }}>★</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#002840" }}>{p.rating}</span>
          <span style={{ fontSize: 12, color: "#7a9ab0" }}>({p.reviews})</span>
        </div>
        <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid #f0f4f8" }}>
          {hasPrice
            ? <>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: "#002840", fontFamily: "var(--display)", letterSpacing: "-0.02em" }}>{brl(p.price)}</span>
                  <span style={{ fontSize: 12, color: "#7a9ab0" }}>/{p.unit}</span>
                </div>
                <div style={{ fontSize: 11, color: "#7a9ab0", marginTop: 2 }}>ou 12× de {brl(p.price / 12)}</div>
              </>
            : <div style={{ fontSize: 14, fontWeight: 700, color: "#0195ff", padding: "6px 0" }}>Consultar preço</div>
          }
        </div>
      </div>

      <button className="btn btn-primary btn-block" onClick={e => e.stopPropagation()} style={{ borderRadius: 12, fontWeight: 700 }}>
        <Icon.Cart size={15} color="#fff" />
        {hasPrice ? (pc.addBtn || "Adicionar ao carrinho") : "Solicitar cotação"}
      </button>
    </div>
  );
};
