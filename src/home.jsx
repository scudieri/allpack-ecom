/* global React, Icon, ProductCard, PRODUCTS, PRODUCTS_WITH_PHOTO, brl, go, BrandLogo, TrustBanner */

window.HomePage = function HomePage() {
  const B    = window.BRAND.copy;
  const HERO = B.hero;
  const cats = B.categories;
  const promos = B.promos;
  const best = B.bestsellers;
  const sec  = B.secondaryGrid;
  const bs   = B.brandStatement;
  const ag   = B.agronomoCta;
  const phone = window.BRAND.contact.phone;

  return (
    <div style={{ background: "#f4f8fc" }}>

      {/* ─────────────────────────────────────────
          HERO — vídeo sticky, sem copy
      ───────────────────────────────────────── */}
      <section style={{ position: "sticky", top: 0, zIndex: 0, height: "100vh", overflow: "hidden" }}>
        <video autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          src="assets/hero-video.mp4"
        />
        {/* fade para o fundo branco da próxima seção */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, background: "linear-gradient(to top, #f4f8fc, transparent)" }} />
      </section>

      {/* ─────────────────────────────────────────
          CONTEÚDO — desliza sobre o hero
      ───────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── PROPOSTA DE VALOR (logo após o vídeo) ── */}
        <section style={{ background: "#fff", padding: "64px 0 56px", borderBottom: "1px solid #e2ecf5" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{HERO.eyebrow}</div>
                <h1 style={{ fontSize: 56, lineHeight: 1, margin: "0 0 20px", color: "#002840" }}>
                  {HERO.title}<br />
                  <span style={{ fontStyle: "italic", color: "#0195ff" }}>{HERO.italic}</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#334d62", maxWidth: 480, margin: "0 0 36px" }}>{HERO.subtitle}</p>
                <div style={{ display: "flex", gap: 12 }}>
                  <button className="btn btn-primary btn-lg" onClick={() => go("categoria")}>
                    {HERO.cta1} <Icon.Chevron size={15} color="#fff" />
                  </button>
                  <button className="btn btn-outline btn-lg" style={{ color: "#002840", borderColor: "#c8dcea" }}>
                    <Icon.Whatsapp size={16} color="#0195ff" /> {HERO.cta2}
                  </button>
                </div>
              </div>
              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { v: "ANVISA",  l: "Certificação em todos os produtos",      icon: "Award"    },
                  { v: "48h",     l: "Prazo de entrega para capitais",          icon: "Truck"    },
                  { v: "5.000+",  l: "SKUs disponíveis em estoque",             icon: "Box"      },
                  { v: "B2B",     l: "Faturamento e boleto para CNPJ",          icon: "Shield"   },
                ].map((s, i) => {
                  const I = Icon[s.icon];
                  return (
                    <div key={i} style={{ background: i === 0 ? "#002840" : "#f4f8fc", borderRadius: 20, padding: "28px 24px", border: i === 0 ? "none" : "1px solid #e2ecf5" }}>
                      <I size={20} color={i === 0 ? "#0195ff" : "#0195ff"} />
                      <div style={{ fontSize: 32, fontWeight: 800, color: i === 0 ? "#fff" : "#002840", fontFamily: "var(--display)", margin: "12px 0 6px", letterSpacing: "-0.02em" }}>{s.v}</div>
                      <div style={{ fontSize: 13, color: i === 0 ? "rgba(255,255,255,0.6)" : "#7a9ab0", lineHeight: 1.4 }}>{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <TrustBanner />

        {/* ── CATEGORIAS ── */}
        <section style={{ background: "#fff", padding: "72px 0 64px" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>{cats.eyebrow}</div>
                <h2 style={{ fontSize: 38, color: "#002840", margin: 0 }}>
                  {cats.titleStart} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{cats.italic}</span>
                </h2>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); go("categoria"); }}
                style={{ fontSize: 13, fontWeight: 600, color: "#0195ff", display: "flex", alignItems: "center", gap: 5 }}>
                {cats.seeAll} <Icon.Chevron size={12} color="#0195ff" />
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12 }}>
              {cats.items.map((c) => {
                const I = Icon[c.icon];
                return (
                  <a key={c.id} href="#" onClick={(e) => { e.preventDefault(); go("categoria"); }}
                    style={{ background: "#f4f8fc", border: "1.5px solid #e2ecf5", borderRadius: 18, padding: "22px 8px 18px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer", transition: "all 0.18s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#eef5fc"; e.currentTarget.style.borderColor = "#0195ff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(1,149,255,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#f4f8fc"; e.currentTarget.style.borderColor = "#e2ecf5"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ width: 52, height: 52, borderRadius: 999, background: c.color, display: "grid", placeItems: "center", boxShadow: "0 4px 12px rgba(0,40,96,0.15)" }}>
                      <I size={23} color="#fff" />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#334d62", lineHeight: 1.35 }}>{c.label}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* divisor */}
        <div style={{ height: 1, background: "#e2ecf5" }} />

        {/* ── MAIS PEDIDOS ── */}
        <section style={{ background: "#f4f8fc", padding: "88px 0 96px" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>{best.eyebrow}</div>
                <h2 style={{ fontSize: 42, color: "#002840", margin: 0 }}>
                  {best.titleStart} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{best.italic}</span>
                </h2>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {best.chips.map((c, i) => (
                  <button key={i} style={{ padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s", border: "1.5px solid", background: i === 0 ? "#002840" : "transparent", color: i === 0 ? "#fff" : "#334d62", borderColor: i === 0 ? "#002840" : "#c8dcea" }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {PRODUCTS_WITH_PHOTO.slice(0, 8).map(p => <ProductCard key={p.id} p={p} onClick={() => go("produto")} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 52 }}>
              <button className="btn btn-lg" onClick={() => go("categoria")}
                style={{ background: "#fff", color: "#002840", border: "1.5px solid #c8dcea", padding: "14px 40px", borderRadius: 999, fontWeight: 600, boxShadow: "0 2px 8px rgba(0,40,96,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#0195ff"; e.currentTarget.style.color = "#0195ff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#c8dcea"; e.currentTarget.style.color = "#002840"; }}>
                Ver catálogo completo <Icon.Chevron size={14} color="currentColor" />
              </button>
            </div>
          </div>
        </section>

        {/* ── BREAK ESCURO — urgência / B2B ── */}
        <section style={{ background: "#002840", padding: "72px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(1,149,255,0.15)", border: "1px solid rgba(1,149,255,0.3)", borderRadius: 999, padding: "6px 14px", marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "#0195ff", display: "block" }} />
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#33aaff", letterSpacing: "0.15em" }}>{promos.mainEyebrow}</span>
                </div>
                <h2 style={{ fontSize: 48, color: "#fff", lineHeight: 1, margin: "0 0 20px" }}>
                  {promos.mainTitleStart}{" "}
                  <span style={{ fontStyle: "italic", color: "#0195ff" }}>{promos.mainTitleItalic}</span>
                  {promos.mainTitleEnd}
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>{promos.mainBody}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <button className="btn btn-primary btn-lg" style={{ justifyContent: "center", fontWeight: 700 }} onClick={() => go("categoria")}>
                  {promos.mainCta} <Icon.Chevron size={14} color="#fff" />
                </button>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 18px" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#0195ff", marginBottom: 8 }}>{promos.shipEyebrow}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>{promos.shipTitle}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 6, lineHeight: 1.5 }}>{promos.shipBody}</div>
                  </div>
                  <div style={{ background: "#ffb948", borderRadius: 16, padding: "20px 18px" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(0,0,0,0.5)", marginBottom: 8 }}>{promos.payEyebrow}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#001422", lineHeight: 1.25 }}>{promos.payTitle}</div>
                    <div style={{ fontSize: 12, color: "rgba(0,0,0,0.55)", marginTop: 6, lineHeight: 1.5 }}>{promos.payBody}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE A ALLPACK ── */}
        <section style={{ background: "#fff", padding: "96px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              {/* Visual */}
              <div style={{ background: "linear-gradient(145deg, #002840 0%, #004160 100%)", borderRadius: 28, position: "relative", overflow: "hidden", minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 36 }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(1,149,255,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(1,149,255,0.08)" }} />
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                  <BrandLogo size={56} mode="inverse" />
                </div>
                <div style={{ position: "relative", zIndex: 2, background: "rgba(1,149,255,0.1)", border: "1px solid rgba(1,149,255,0.2)", borderRadius: 14, padding: "18px 22px", display: "flex", gap: 28 }}>
                  {[{ v: "ANVISA", l: "Cert." }, { v: "48h", l: "Entrega" }, { v: "B2B", l: "Fatur." }].map((s, i) => (
                    <div key={i} style={{ paddingRight: i < 2 ? 28 : 0, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{s.v}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Texto + pilares */}
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{bs.eyebrow}</div>
                <h2 style={{ fontSize: 48, color: "#002840", lineHeight: 1.05, margin: "0 0 24px" }}>
                  {bs.titleLine1}<br />
                  {bs.titleLine2Start} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{bs.italic}</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#334d62", margin: "0 0 40px" }}>{bs.body}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {bs.pillars.map((it, i) => {
                    const I = Icon[it.icon];
                    return (
                      <div key={i} style={{ background: "#f4f8fc", border: "1px solid #e2ecf5", borderRadius: 16, padding: "24px 20px" }}>
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: "#eef5fc", display: "grid", placeItems: "center", marginBottom: 14 }}>
                          <I size={18} color="#0195ff" />
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#002840", marginBottom: 6 }}>{it.title}</div>
                        <div style={{ fontSize: 13, color: "#7a9ab0", lineHeight: 1.55 }}>{it.body}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* divisor */}
        <div style={{ height: 1, background: "#e2ecf5" }} />

        {/* ── LINHA CERTIFICADA ── */}
        <section style={{ background: "#f4f8fc", padding: "88px 0 96px" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>{sec.eyebrow}</div>
                <h2 style={{ fontSize: 42, color: "#002840", margin: 0 }}>
                  {sec.titleStart} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{sec.italic}</span>
                </h2>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); go("categoria"); }}
                style={{ fontSize: 13, fontWeight: 600, color: "#0195ff", display: "flex", alignItems: "center", gap: 5 }}>
                {sec.seeAll} <Icon.Chevron size={12} color="#0195ff" />
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {PRODUCTS_WITH_PHOTO.slice(4, 12).map(p => <ProductCard key={p.id} p={p} onClick={() => go("produto")} />)}
            </div>
          </div>
        </section>

        {/* ── CTA B2B — fundo claro para não fundir com o rodapé ── */}
        <section style={{ background: "#eef5fc", borderTop: "1px solid #ddeaf5", padding: "88px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "center" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 16 }}>{ag.eyebrow}</div>
                <h2 style={{ fontSize: 48, color: "#002840", lineHeight: 1.05, margin: "0 0 18px" }}>
                  {ag.titleStart} <span style={{ fontStyle: "italic", color: "#0195ff" }}>{ag.italic}</span>
                </h2>
                <p style={{ fontSize: 16, color: "#334d62", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>{ag.body}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <button className="btn btn-primary btn-lg" style={{ fontWeight: 700, justifyContent: "center" }}>
                  <Icon.Whatsapp size={18} color="#fff" /> {ag.ctaWhats}
                </button>
                <button className="btn btn-lg" style={{ background: "#fff", color: "#002840", border: "1.5px solid #c8dcea", justifyContent: "center" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#0195ff"; e.currentTarget.style.color = "#0195ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#c8dcea"; e.currentTarget.style.color = "#002840"; }}>
                  <Icon.Phone size={16} color="#0195ff" /> {phone}
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
