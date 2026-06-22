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
    <div className="hero-strip">
      <div className="hero-strip-track">
        {all.map((tx, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
            <span style={{ color: "var(--orange-600)" }}>✦</span> {tx}
          </span>
        ))}
      </div>
    </div>
  );
};

window.Header = function Header({ cartCount = 3 }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const h = window.BRAND.copy.header;
  return (
    <header style={{ background: "var(--cream-50)", borderBottom: "1px solid var(--line)" }}>
      <TopStrip />
      <div className="container" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 32, padding: "20px 32px" }}>
        <a href="#home" onClick={(e)=>{e.preventDefault(); go("home");}}>
          <BrandLogo size={26} />
        </a>
        <div style={{ position: "relative", maxWidth: 580, width: "100%", justifySelf: "center" }}>
          <div style={{ position: "relative" }}>
            <input
              className="input"
              placeholder={h.searchPlaceholder}
              style={{ paddingLeft: 44, paddingRight: 100, height: 48, borderRadius: 999, background: "var(--paper)" }}
              onFocus={() => { go("busca"); }}
            />
            <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--ink-500)" }}>
              <Icon.Search size={18} />
            </div>
            <button className="btn btn-green btn-sm" style={{ position: "absolute", right: 6, top: 6, height: 36 }}>{h.searchBtn}</button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href="#" onClick={(e)=>{e.preventDefault(); go("conta");}} className="btn btn-ghost" style={{ flexDirection: "column", gap: 2, padding: "6px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon.User size={18} />
              <div style={{ textAlign: "left", lineHeight: 1.1 }}>
                <div style={{ fontSize: 11, color: "var(--ink-500)" }}>{h.greetingPrefix} {h.greetingName}</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{h.myAccount}</div>
              </div>
            </div>
          </a>
          <a href="#" onClick={(e)=>{e.preventDefault(); go("carrinho");}} className="btn btn-green" style={{ position: "relative", padding: "10px 16px" }}>
            <Icon.Cart size={18} color="var(--cream-100)"/>
            <span>{h.cart}</span>
            <span style={{ background: "var(--orange-600)", color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 999, padding: "2px 7px", marginLeft: 4 }}>{cartCount}</span>
          </a>
        </div>
      </div>
      <nav style={{ borderTop: "1px solid var(--line)", background: "var(--cream-50)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 32px", overflowX: "auto" }}>
          <button className="btn btn-ghost" style={{ background: "var(--green-900)", color: "var(--cream-100)", padding: "10px 16px", borderRadius: 999, fontSize: 13 }}>
            <Icon.Menu size={16} color="var(--cream-100)" /> {h.allCategoriesBtn}
          </button>
          {h.categories.map((c, i) => (
            <a key={i} href="#" onClick={(e)=>{e.preventDefault(); go("categoria");}} style={{ padding: "10px 14px", fontSize: 13, color: "var(--ink-700)", whiteSpace: "nowrap", borderRadius: 999 }}>
              {c}
            </a>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16, color: "var(--ink-700)", fontSize: 13, whiteSpace: "nowrap" }}>
            <a href="#login" onClick={(e)=>{e.preventDefault(); go("login");}} style={{ color: "var(--green-800)", fontWeight: 500 }}>{h.login}</a>
            <span style={{ width: 1, height: 14, background: "var(--line-strong)" }}/>
            <Icon.Whatsapp size={16} color="var(--green-700)"/> <span>{h.phoneLabel}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

window.Footer = function Footer() {
  const f = window.BRAND.copy.footer;
  const c = window.BRAND.contact;
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <BrandLogo size={28} mode="inverse" />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: 280 }}>
              {f.tagline}
            </p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Pin size={16} color="var(--orange-500)"/> {c.address}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Whatsapp size={16} color="var(--orange-500)"/> {c.whatsapp || c.phone}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon.Mail size={16} color="var(--orange-500)"/> {c.email}</div>
            </div>
          </div>
          {f.cols.map((col, i) => (
            <div key={i}>
              <div className="mono" style={{ color: "var(--orange-500)", marginBottom: 16, fontSize: 11 }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l, j) => (
                  <li key={j}><a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
          <div>{f.copyright}</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span>Pagamentos:</span>
            <span className="mono" style={{ background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 4, fontSize: 10 }}>PIX</span>
            <span className="mono" style={{ background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 4, fontSize: 10 }}>BOLETO</span>
            <span className="mono" style={{ background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 4, fontSize: 10 }}>VISA</span>
            <span className="mono" style={{ background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 4, fontSize: 10 }}>MASTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Trust banner — strip with icons (data from BRAND.copy.trust)
window.TrustBanner = function TrustBanner() {
  const items = window.BRAND.copy.trust;
  return (
    <div className="banner-trust">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {items.map((it, i) => {
          const I = Icon[it.icon];
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, background: "var(--green-700)", borderRadius: 999, display: "grid", placeItems: "center", color: "var(--cream-100)" }}>
                <I size={20} color="var(--cream-100)"/>
              </div>
              <div>
                <div className="display" style={{ fontSize: 17, fontWeight: 600, color: "var(--green-900)" }}>{it.title}</div>
                <div style={{ fontSize: 12, color: "var(--ink-500)" }}>{it.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Product card — used everywhere
window.ProductCard = function ProductCard({ p, onClick }) {
  const pc = window.BRAND.copy.productCard || {};
  return (
    <div className="prod-card" onClick={onClick} role="button">
      <div className="prod-img" style={{ background: p.color }}>
        {p.badge && <span className="discount-badge">{p.badge}</span>}
        <div style={{
          position: "absolute", inset: 0,
          background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 8px, transparent 8px 18px)`
        }}/>
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "rgba(255,255,255,0.7)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em" }}>
          {pc.photoLabel || "[ FOTO PRODUTO ]"}
        </div>
        <button onClick={(e)=>e.stopPropagation()} style={{ position: "absolute", top: 12, right: 12, width: 36, height: 36, borderRadius: 999, background: "rgba(255,253,246,0.9)", display: "grid", placeItems: "center", color: "var(--ink-700)" }}>
          <Icon.Heart size={16}/>
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{p.brand}</div>
        <div className="display" style={{ fontSize: 17, lineHeight: 1.15, color: "var(--ink-900)", fontWeight: 600, minHeight: 40 }}>{p.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--ink-500)" }}>
          <span className="stars"><Icon.Star size={13} color="var(--orange-600)"/></span>
          <span style={{ fontWeight: 600, color: "var(--ink-700)" }}>{p.rating}</span>
          <span>({p.reviews})</span>
        </div>
        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          {p.oldPrice && <div style={{ fontSize: 12, color: "var(--ink-500)", textDecoration: "line-through" }}>{brl(p.oldPrice)}</div>}
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span className="display" style={{ fontSize: 24, fontWeight: 700, color: "var(--green-800)" }}>{brl(p.price)}</span>
            <span style={{ fontSize: 12, color: "var(--ink-500)" }}>/ {p.unit}</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-500)", marginTop: 2 }}>ou 12x de {brl(p.price/12)} sem juros</div>
        </div>
      </div>
      <button className="btn btn-primary btn-block" onClick={(e)=>e.stopPropagation()}>
        <Icon.Cart size={16} color="#fff"/> {pc.addBtn || "Adicionar"}
      </button>
    </div>
  );
};
