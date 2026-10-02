/* global React, ReactDOM, useRoute, Header, Footer, HomePage, CategoryPage, PdpPage, CartPage, AuthPage, AccountPage, SearchPage, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, go, loadLiveCatalog */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#004160",
  "accent": "#ffb948",
  "cream": "#f6f6f6",
  "density": "comfortable",
  "showRural": false,
  "headerStyle": "clean"
}/*EDITMODE-END*/;

function App() {
  const [path] = useRoute();
  const [route, rawArg] = path.split("/");
  const arg = rawArg ? decodeURIComponent(rawArg) : "";
  const [, setCatalogVersion] = React.useState(0);

  // Mantém o catálogo sincronizado com a Shopify: a cada 2 min e ao voltar para a aba.
  useEffect(() => {
    const refresh = () => window.loadLiveCatalog().then(ok => ok && setCatalogVersion(v => v + 1));
    const t = setInterval(refresh, 120000);
    const onVis = () => { if (!document.hidden) refresh(); };
    document.addEventListener("visibilitychange", onVis);
    return () => { clearInterval(t); document.removeEventListener("visibilitychange", onVis); };
  }, []);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--green-700", tweaks.primary);
    r.style.setProperty("--orange-600", tweaks.accent);
    r.style.setProperty("--cream-100", tweaks.cream);
  }, [tweaks.primary, tweaks.accent, tweaks.cream]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  let page;
  switch (route) {
    case "categoria": page = <CategoryPage cat={arg}/>; break;
    case "produto": page = <PdpPage handle={arg}/>; break;
    case "carrinho": page = <CartPage/>; break;
    case "login": page = <AuthPage/>; break;
    case "conta": page = <AccountPage/>; break;
    case "busca": page = <SearchPage q={arg}/>; break;
    default: page = <HomePage/>;
  }

  const showChrome = true;

  const isHome = route === "home" || route === "";

  return (
    <div className="page-shell">
      {showChrome && <Header/>}
      {/* Espaçador para páginas internas compensar o header fixo (~156px) */}
      {showChrome && !isHome && <div style={{ height: 156 }} />}
      <main>{page}</main>
      {showChrome && <Footer/>}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Cores da marca">
          <TweakColor label="Verde primário" value={tweaks.primary} onChange={v=>setTweak("primary", v)} />
          <TweakColor label="Laranja CTA" value={tweaks.accent} onChange={v=>setTweak("accent", v)} />
          <TweakColor label="Creme/fundo" value={tweaks.cream} onChange={v=>setTweak("cream", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

window.loadLiveCatalog().finally(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
});
