/* global React, Icon, ProductCard, PRODUCTS, brl, go, BrandLogo, WheatIcon, TrustBanner */
const { useState } = React;

window.HomePage = function HomePage() {
  const B = window.BRAND.copy;
  const HERO = B.hero;
  const cats = B.categories;
  const promos = B.promos;
  const best = B.bestsellers;
  const sec = B.secondaryGrid;
  const bs = B.brandStatement;
  const ag = B.agronomoCta;
  const phone = window.BRAND.contact.phone;

  return (
    <div>
      {/* HERO */}
      <section style={{ background: "var(--green-900)", color: "var(--cream-100)", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center", padding: "80px 32px", position: "relative", zIndex: 2 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--orange-500)" }}>{HERO.eyebrow}</div>
            <h1 style={{ marginTop: 16, fontSize: 96, lineHeight: 0.95, fontWeight: 600 }}>
              {HERO.title}<br/>
              <span style={{ fontStyle: "italic", color: "var(--orange-500)" }}>{HERO.italic || HERO.italicTitle}</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.5, color: "rgba(244,234,213,0.85)", maxWidth: 480 }}>{HERO.subtitle}</p>
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <button className="btn btn-primary btn-lg" onClick={()=>go("categoria")}>{HERO.cta1 || HERO.cta} <Icon.Chevron size={16} color="#fff"/></button>
              <button className="btn btn-outline btn-lg" style={{ color: "var(--cream-100)", boxShadow: "inset 0 0 0 1.5px var(--cream-100)" }}>
                <Icon.Whatsapp size={16} color="var(--cream-100)"/> {HERO.cta2}
              </button>
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: 32, fontSize: 13, color: "rgba(244,234,213,0.7)" }}>
              {(HERO.stats || []).map((s, i) => (
                <div key={i}>
                  <span className="display" style={{ fontSize: 28, color: "var(--cream-100)", fontWeight: 700 }}>{s.v}</span>
                  <div>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "1", borderRadius: 24, overflow: "hidden", background: "var(--green-800)" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(244,234,213,0.04) 0 12px, transparent 12px 24px)" }}/>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <BrandLogo size={48} mode="inverse" color="var(--yellow-300)" />
              <div className="mono" style={{ fontSize: 11, color: "rgba(244,234,213,0.5)" }}>{HERO.photoLabel}</div>
            </div>
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, background: "var(--cream-100)", color: "var(--ink-900)", padding: 20, borderRadius: 14, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--orange-600)", display: "grid", placeItems: "center" }}>
                <Icon.Truck size={26} color="#fff"/>
              </div>
              <div>
                <div className="display" style={{ fontSize: 18, fontWeight: 600 }}>{HERO.heroCardTitle}</div>
                <div style={{ fontSize: 13, color: "var(--ink-500)" }}>{HERO.heroCardBody}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <div>
              <div className="eyebrow">{cats.eyebrow}</div>
              <h2 style={{ marginTop: 8 }}>{cats.titleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{cats.italic}</span> {cats.titleEnd}</h2>
            </div>
            <a href="#" onClick={(e)=>{e.preventDefault(); go("categoria");}} style={{ color: "var(--green-700)", fontWeight: 500, fontSize: 14 }}>{cats.seeAll}</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12 }}>
            {cats.items.map((c) => {
              const I = Icon[c.icon];
              return (
                <a key={c.id} href="#" onClick={(e)=>{e.preventDefault(); go("categoria");}} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 12px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, transition: "all 0.15s ease" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 999, background: c.color, display: "grid", placeItems: "center" }}>
                    <I size={26} color="#fff"/>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink-900)" }}>{c.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <TrustBanner />

      {/* PROMO BIG CARD */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
            <div style={{ background: "var(--orange-600)", color: "#fff", borderRadius: 24, padding: 56, position: "relative", overflow: "hidden", minHeight: 360 }}>
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 14px, transparent 14px 28px)" }}/>
              <div style={{ position: "relative", maxWidth: 540 }}>
                <div className="mono" style={{ color: "rgba(255,255,255,0.8)" }}>{promos.mainEyebrow}</div>
                <h2 style={{ marginTop: 16, fontSize: 56, lineHeight: 0.95 }}>
                  {promos.mainTitleStart} <span className="italic">{promos.mainTitleItalic}</span>{promos.mainTitleEnd}
                </h2>
                <p style={{ marginTop: 16, fontSize: 16, color: "rgba(255,255,255,0.9)", maxWidth: 420 }}>{promos.mainBody}</p>
                <button className="btn btn-lg" style={{ marginTop: 24, background: "#fff", color: "var(--orange-700)" }}>{promos.mainCta}</button>
              </div>
              <div style={{ position: "absolute", bottom: -40, right: -40, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }}/>
              <div style={{ position: "absolute", top: 32, right: 32 }}>
                <BrandLogo size={36} color="rgba(255,255,255,0.7)" />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "var(--green-900)", color: "var(--cream-100)", borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
                <div className="mono" style={{ color: "var(--orange-500)" }}>{promos.shipEyebrow}</div>
                <h3 style={{ marginTop: 12, fontSize: 28, lineHeight: 1, color: "var(--cream-100)" }}>{promos.shipTitle}</h3>
                <div style={{ marginTop: 16, fontSize: 13, color: "rgba(244,234,213,0.7)" }}>{promos.shipBody}</div>
                <Icon.Truck size={64} color="rgba(244,234,213,0.15)" />
              </div>
              <div style={{ background: "var(--cream-100)", borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
                <div className="mono" style={{ color: "var(--green-700)" }}>{promos.payEyebrow}</div>
                <h3 style={{ marginTop: 12, fontSize: 28, lineHeight: 1, color: "var(--green-900)" }}>{promos.payTitle}</h3>
                <div style={{ marginTop: 16, fontSize: 13, color: "var(--ink-500)" }}>{promos.payBody}</div>
                <Icon.CreditCard size={48} color="var(--green-700)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS — bestsellers */}
      <section style={{ paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="eyebrow">{best.eyebrow}</div>
              <h2 style={{ marginTop: 8 }}>{best.titleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{best.italic}</span> {best.titleEnd}</h2>
            </div>
            <div className="chip-row">
              {best.chips.map((c, i) => (
                <button key={i} className={`chip ${i===0 ? "active" : ""}`}>{c}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {PRODUCTS.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} onClick={()=>go("produto")}/>)}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="section bg-cream-warm">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ aspectRatio: "4/5", background: "var(--green-900)", borderRadius: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(244,234,213,0.05) 0 14px, transparent 14px 28px)" }}/>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div className="mono" style={{ color: "rgba(244,234,213,0.5)", fontSize: 11 }}>{bs.photoLabel}</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">{bs.eyebrow}</div>
            <h2 style={{ marginTop: 16, fontSize: 56 }}>
              {bs.titleLine1}<br/>{bs.titleLine2Start} <span className="italic" style={{ color: "var(--orange-600)" }}>{bs.italic}</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: "var(--ink-700)" }}>
              {bs.body}
            </p>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {bs.pillars.map((it, i) => {
                const I = Icon[it.icon];
                return (
                  <div key={i}>
                    <I size={22} color="var(--green-700)"/>
                    <div className="display" style={{ marginTop: 8, fontSize: 17, fontWeight: 600 }}>{it.title}</div>
                    <div style={{ marginTop: 4, fontSize: 13, color: "var(--ink-500)" }}>{it.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY PRODUCTS GRID */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="eyebrow">{sec.eyebrow}</div>
              <h2 style={{ marginTop: 8 }}>{sec.titleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{sec.italic}</span> {sec.titleEnd}</h2>
            </div>
            <a href="#" onClick={(e)=>{e.preventDefault(); go("categoria");}} style={{ color: "var(--green-700)", fontWeight: 500 }}>{sec.seeAll}</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {PRODUCTS.slice(4, 12).map((p) => <ProductCard key={p.id} p={p} onClick={()=>go("produto")}/>)}
          </div>
        </div>
      </section>

      {/* AGRONOMO CTA */}
      <section className="section-sm">
        <div className="container">
          <div style={{ background: "var(--green-700)", color: "var(--cream-100)", borderRadius: 24, padding: 56, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div>
              <div className="mono" style={{ color: "var(--yellow-300)" }}>{ag.eyebrow}</div>
              <h3 style={{ marginTop: 12, fontSize: 40, color: "var(--cream-100)" }}>
                {ag.titleStart} <span className="italic">{ag.italic}</span>
              </h3>
              <p style={{ marginTop: 12, fontSize: 16, color: "rgba(244,234,213,0.85)", maxWidth: 540 }}>{ag.body}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button className="btn btn-primary btn-lg"><Icon.Whatsapp size={18} color="#fff"/> {ag.ctaWhats}</button>
              <button className="btn btn-lg" style={{ background: "transparent", color: "var(--cream-100)", boxShadow: "inset 0 0 0 1.5px var(--cream-100)" }}>
                <Icon.Phone size={16} color="var(--cream-100)"/> {phone}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
