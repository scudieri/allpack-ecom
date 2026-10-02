/* global React, go */

// O login real é da Shopify (contas de clientes). "#login" leva à página de conta.
window.AuthPage = function AuthPage() {
  React.useEffect(() => { go("conta"); }, []);
  return null;
};
