/* global React */
// Whitelabel brand loader.
// Picks an active brand (URL ?brand=ID, fallback "santos"), applies its
// design tokens to :root, injects fonts, exposes window.BRAND and a generic
// <BrandLogo/> component the rest of the app reads from.

(function applyBrand() {
  const id = new URLSearchParams(window.location.search).get("brand") || "whitelabel";
  const brands = window.BRANDS || {};
  const brand = brands[id] || brands.santos || Object.values(brands)[0];
  if (!brand) {
    console.error("[brand-loader] No brand registered. Add a brand at brands/<id>.js");
    return;
  }
  window.BRAND = brand;

  const root = document.documentElement;
  for (const [k, v] of Object.entries(brand.colors || {})) {
    root.style.setProperty(`--${k}`, v);
  }
  if (brand.fonts?.display) root.style.setProperty("--display", brand.fonts.display);
  if (brand.fonts?.sans) root.style.setProperty("--sans", brand.fonts.sans);
  if (brand.fonts?.mono) root.style.setProperty("--mono", brand.fonts.mono);

  if (brand.fonts?.googleUrl) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = brand.fonts.googleUrl;
    document.head.appendChild(link);
  }

  if (brand.meta?.name) document.title = `${brand.meta.name} — Loja`;
})();

// Generic logo component — picks renderer by BRAND.logo.type.
// Supported types:
//   "mark+wordmark" — uses BRAND.logo.mark (a function returning SVG) plus a text wordmark
//   "wordmark"      — text-only
//   "image"         — <img src=BRAND.logo.url>
window.BrandLogo = function BrandLogo({ size = 28, color, mode = "primary" }) {
  const brand = window.BRAND;
  const logo = brand?.logo || {};
  const c = color || (mode === "inverse" ? "var(--cream-100)" : "var(--green-700)");
  const small = logo.small;
  const wordmark = logo.wordmark || brand?.meta?.short || "brand";

  if (logo.type === "image" && logo.url) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src={logo.url} alt={brand?.meta?.name || ""} style={{ height: size * 1.4, width: "auto", display: "block" }} />
      </div>
    );
  }

  const Mark = logo.type === "mark+wordmark" && typeof logo.mark === "function" ? logo.mark : null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {Mark ? <Mark size={size * 0.85} color={c} /> : null}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, lineHeight: 1 }}>
        {small ? <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.18em", color: c, opacity: 0.7, textTransform: "uppercase" }}>{small}</span> : null}
        <span className="display" style={{ fontSize: size, color: c, fontWeight: 600, letterSpacing: "-0.02em" }}>{wordmark}</span>
      </div>
    </div>
  );
};

// Convenience accessor: window.t("hero.title") → BRAND.copy.hero.title
window.t = function t(path, fallback) {
  const parts = path.split(".");
  let v = window.BRAND?.copy;
  for (const p of parts) {
    if (v == null) return fallback;
    v = v[p];
  }
  return v == null ? fallback : v;
};
