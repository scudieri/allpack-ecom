/* global React, Icon, go */

// Contas, pedidos e pagamentos ficam na Shopify. Esta página só leva o cliente até lá.
window.AccountPage = function AccountPage() {
  const shop = `https://${window.SHOPIFY.domain}`;
  const c = window.BRAND.contact;
  const cards = [
    { icon: "User", t: "Entrar ou criar conta", d: "Acesse sua conta para ver pedidos, endereços e dados de faturamento.", href: `${shop}/account`, cta: "Acessar minha conta" },
    { icon: "Truck", t: "Acompanhar pedido", d: "Use o e-mail da compra e o número do pedido para ver o status da entrega.", href: `${shop}/account`, cta: "Rastrear pedido" },
    { icon: "Whatsapp", t: "Falar com a equipe", d: "Cotações para hospitais, clínicas e distribuidores, e dúvidas técnicas.", href: null, cta: c.whatsapp || c.phone },
  ];
  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid #e2ecf5", padding: "36px 0 40px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 10 }}>Minha conta</div>
          <h1 style={{ fontSize: 48, color: "#002840", margin: 0 }}>Pedidos e <span style={{ fontStyle: "italic", color: "#0195ff" }}>atendimento</span></h1>
        </div>
      </section>
      <section style={{ padding: "48px 0 96px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cards.map((k, i) => {
            const I = Icon[k.icon];
            return (
              <div key={i} className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#eef5fc", display: "grid", placeItems: "center" }}><I size={22} color="#0195ff" /></div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#002840" }}>{k.t}</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#334d62", flex: 1 }}>{k.d}</p>
                {k.href
                  ? <a className="btn btn-primary btn-lg" href={k.href} style={{ justifyContent: "center" }}>{k.cta}</a>
                  : <div className="btn btn-outline btn-lg" style={{ justifyContent: "center", cursor: "default" }}>{k.cta}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
