/* global React, Icon, BrandLogo, WheatIcon, go */
const { useState } = React;

window.AuthPage = function AuthPage() {
  const [mode, setMode] = useState("login");
  const a = window.BRAND.copy.auth;
  return (
    <div style={{ minHeight: "calc(100vh - 200px)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Side panel */}
      <div style={{ background: "var(--green-900)", color: "var(--cream-100)", padding: 64, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 14px, transparent 14px 28px)" }}/>
        <div style={{ position: "relative", zIndex: 2 }}>
          <BrandLogo size={28} mode="inverse" />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="mono" style={{ color: "var(--orange-500)" }}>{a.sideEyebrow}</div>
          <h2 style={{ marginTop: 16, fontSize: 56, lineHeight: 1, color: "var(--cream-100)" }}>
            {a.sideTitleLine1}<br/>{a.sideTitleLine2Start} <span className="italic" style={{ color: "var(--orange-500)" }}>{a.sideItalic}</span>
          </h2>
          <p style={{ marginTop: 24, fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 400, lineHeight: 1.6 }}>
            {a.sideBody}
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
          {a.sideBenefits.map((t,i) => <div key={i} style={{ color: "rgba(255,255,255,0.85)" }}>{t}</div>)}
        </div>
        <div style={{ position: "absolute", right: -20, bottom: 80, opacity: 0.06 }}>
          <WheatIcon size={140} color="var(--cream-100)"/>
        </div>
      </div>

      {/* Form */}
      <div style={{ display: "grid", placeItems: "center", padding: 64, background: "var(--cream-50)" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div className="tabs" style={{ marginBottom: 32 }}>
            <button className={`tab ${mode === "login" ? "active" : ""}`} onClick={()=>setMode("login")}>{a.tabLogin}</button>
            <button className={`tab ${mode === "cadastro" ? "active" : ""}`} onClick={()=>setMode("cadastro")}>{a.tabRegister}</button>
          </div>

          {mode === "login" ? (
            <>
              <h2 style={{ fontSize: 36 }}>{a.loginTitleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{a.loginItalic}</span></h2>
              <p style={{ marginTop: 12, fontSize: 15, color: "var(--ink-500)" }}>{a.loginSub}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
                <div className="field"><label className="field-label">CPF, CNPJ ou e-mail</label><input className="input" placeholder="000.000.000-00 ou seu e-mail" defaultValue="joao.silva@fazenda.com.br"/></div>
                <div className="field">
                  <label className="field-label" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Senha</span>
                    <a href="#" style={{ color: "var(--green-700)", fontSize: 12 }}>Esqueci minha senha</a>
                  </label>
                  <input className="input" type="password" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" defaultValue="********"/>
                </div>
                <label className="checkbox"><input type="checkbox" defaultChecked/><span>Continuar conectado nesta mÃ¡quina</span></label>
                <button className="btn btn-primary btn-lg btn-block" onClick={()=>go("conta")}>Entrar â†’</button>
              </div>

              <div className="wheat-divider"><span style={{ fontSize: 12, color: "var(--ink-500)" }}>ou</span></div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button className="btn btn-outline btn-block">Entrar com Google</button>
                <button className="btn btn-outline btn-block"><Icon.Whatsapp size={16} color="currentColor"/> Entrar via WhatsApp</button>
              </div>

              <div style={{ marginTop: 24, padding: 16, background: "var(--cream-100)", borderRadius: 10, fontSize: 13, color: "var(--ink-700)", textAlign: "center" }}>
                Primeira vez? <a href="#" onClick={(e)=>{e.preventDefault(); setMode("cadastro");}} style={{ color: "var(--green-700)", fontWeight: 600 }}>Cria sua conta de produtor</a>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: 36 }}>{a.registerTitleStart} <span className="italic" style={{ color: "var(--orange-600)" }}>{a.registerItalic}</span> {a.registerTitleEnd}</h2>
              <p style={{ marginTop: 12, fontSize: 15, color: "var(--ink-500)" }}>{a.registerSub}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
                <div className="field"><label className="field-label">Nome completo</label><input className="input" placeholder="JoÃ£o da Silva"/></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div className="field"><label className="field-label">CPF / CNPJ</label><input className="input" placeholder="000.000.000-00"/></div>
                  <div className="field"><label className="field-label">Telefone</label><input className="input" placeholder="(35) 9 0000-0000"/></div>
                </div>
                <div className="field"><label className="field-label">E-mail</label><input className="input" placeholder="seu@email.com"/></div>
                <div className="field"><label className="field-label">Cria uma senha</label><input className="input" type="password" placeholder="MÃ­nimo 8 caracteres"/></div>
                <div className="field"><label className="field-label">Sua propriedade</label><input className="input" placeholder="SÃ­tio Boa Vista â€” Pouso Alegre/MG"/></div>
                <label className="checkbox"><input type="checkbox" defaultChecked/><span>Aceito os termos de uso e a polÃ­tica de privacidade</span></label>
                <button className="btn btn-primary btn-lg btn-block">Criar conta â†’</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

