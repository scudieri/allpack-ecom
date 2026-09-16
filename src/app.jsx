/* global React, ReactDOM, useRoute, Header, Footer, HomePage, CategoryPage, PdpPage, CartPage, AuthPage, AccountPage, SearchPage, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, go */
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
  const [route] = useRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--green-700", tweaks.primary);
    r.style.setProperty("--orange-600", tweaks.accent);
    r.style.setProperty("--cream-100", tweaks.cream);
  }, [tweaks.primary, tweaks.accent, tweaks.cream]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  let page;
  switch (route) {
    case "categoria": page = <CategoryPage/>; break;
    case "produto": page = <PdpPage/>; break;
    case "carrinho": page = <CartPage/>; break;
    case "login": page = <AuthPage/>; break;
    case "conta": page = <AccountPage/>; break;
    case "busca": page = <SearchPage/>; break;
    default: page = <HomePage/>;
  }

  const showChrome = route !== "login";

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

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
