/* global React, ReactDOM, useRoute, Header, Footer, HomePage, CategoryPage, PdpPage, CartPage, CheckoutPage, AuthPage, AccountPage, SearchPage, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, go */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#0a6b3a",
  "accent": "#e85a2c",
  "cream": "#f4ead5",
  "density": "comfortable",
  "showRural": true,
  "headerStyle": "warm"
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
    case "checkout": page = <CheckoutPage/>; break;
    case "login": page = <AuthPage/>; break;
    case "conta": page = <AccountPage/>; break;
    case "busca": page = <SearchPage/>; break;
    default: page = <HomePage/>;
  }

  const showChrome = route !== "login";

  return (
    <div className="page-shell">
      {showChrome && <Header cartCount={3}/>}
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
