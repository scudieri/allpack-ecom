/* global React */
// allpack. — Produtos Médicos Hospitalares

const AllpackMark = ({ size = 40, color = "#0d3d5c" }) => {
  const blue = "#2196F3";
  const navy = "#0d3d5c";
  const amber = "#F5A623";
  const sq = size * 0.22;
  const gap = size * 0.08;
  const col0 = 0;
  const col1 = sq + gap;
  const col2 = (sq + gap) * 2;
  const amberTop = size * 0.02;
  const amberH = sq * 1.1;
  const r = sq * 0.5;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Amber M-shape top */}
      <rect x="14" y="2" width="8" height="14" rx="4" fill={amber}/>
      <rect x="26" y="2" width="8" height="14" rx="4" fill={amber}/>
      <rect x="18" y="10" width="12" height="8" rx="4" fill={amber}/>
      {/* Row 1 */}
      <rect x="2"  y="2"  width="10" height="10" rx="2" fill={blue}/>
      <rect x="36" y="2"  width="10" height="10" rx="2" fill={blue}/>
      {/* Row 2 */}
      <rect x="2"  y="20" width="10" height="10" rx="2" fill={navy}/>
      <rect x="19" y="20" width="10" height="10" rx="2" fill={navy}/>
      <rect x="36" y="20" width="10" height="10" rx="2" fill={navy}/>
      {/* Row 3 */}
      <rect x="2"  y="36" width="10" height="10" rx="2" fill={blue}/>
      <rect x="19" y="36" width="10" height="10" rx="2" fill={navy}/>
      <rect x="36" y="36" width="10" height="10" rx="2" fill={blue}/>
    </svg>
  );
};

(window.BRANDS = window.BRANDS || {}).allpack = {
  meta: {
    id: "allpack",
    name: "allpack.",
    short: "allpack",
    cnpj: "",
    foundedYear: null,
  },

  colors: {
    // Fundos e textos — tons Galáxia / Céu Estrelado
    "green-900": "#002840",
    "green-800": "#004160",   // Galáxia
    "green-700": "#004b61",   // Céu Estrelado
    "green-600": "#005f7a",
    "green-500": "#007aab",
    "green-100": "#cce4f0",
    "green-50":  "#e6f2f8",
    // CTAs e ações — Ice blue como primário
    "orange-700": "#007acc",
    "orange-600": "#0195ff",  // Ice — botão principal
    "orange-500": "#33aaff",
    "orange-100": "#cce8ff",
    // Backgrounds neutros — Nuvem
    "cream-200": "#e2e2e2",
    "cream-100": "#efefef",
    "cream-50":  "#f6f6f6",   // Nuvem
    "paper":     "#ffffff",
    // Tipografia
    "ink-900": "#002840",
    "ink-800": "#004160",
    "ink-700": "#004b61",
    "ink-500": "#5a7a90",
    "ink-400": "#8aaabb",
    "ink-300": "#c0d4e0",
    "line": "#ddeaf5",
    "line-strong": "#bcd4e4",
    // Sol — âmbar só como acento pontual
    "yellow-300": "#ffb948",
    "berry": "#004160",
  },

  fonts: {
    display: '"Barlow", "Helvetica Neue", Arial, sans-serif',
    sans: '"Barlow", "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    googleUrl: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
  },

  logo: {
    type: "image",
    url: "assets/allpack-logo.png",
  },

  contact: {
    phone: "(11) 0000-0000",
    whatsapp: "(11) 0000-0000",
    email: "contato@allpack.com.br",
    address: "Endereço — Cidade/UF",
  },

  copy: {
    topStrip: [
      "ENTREGA EM TODO O BRASIL",
      "CERTIFICAÇÃO ANVISA EM TODOS OS PRODUTOS",
      "NOTA FISCAL GARANTIDA",
      "FATURAMENTO PARA CNPJ — HOSPITAIS E CLÍNICAS",
      "PRONTA ENTREGA — PEDIDOS ATÉ 14H SAEM NO MESMO DIA",
    ],

    header: {
      searchPlaceholder: "Buscar por produto, código ANVISA ou categoria...",
      searchBtn: "Buscar",
      categories: ["Centro Cirúrgico", "Kits", "Campos", "Cateteres", "Estetoscópios", "Oxímetros", "Ap. de Pressão", "Termômetros"],
      allCategoriesBtn: "Catálogo completo",
      greetingPrefix: "Olá,",
      greetingName: "Cliente",
      myAccount: "Minha conta",
      cart: "Carrinho",
      login: "Entrar / Cadastrar",
      phoneLabel: "(11) 0000-0000",
    },

    hero: {
      eyebrow: "Fornecedor médico-hospitalar • ANVISA regulamentado",
      title: "Materiais",
      italic: "cirúrgicos de precisão",
      subtitle: "Cateteres, kits, campos cirúrgicos e equipamentos com certificação ANVISA — entrega rápida e faturamento para hospitais, clínicas e distribuidores.",
      cta1: "Explorar catálogo",
      cta2: "Falar com consultor",
      stats: [
        { v: "ANVISA", l: "todos certificados" },
        { v: "48h", l: "entrega capitais" },
        { v: "B2B", l: "faturamento disponível" },
      ],
      photoLabel: "[ IMAGEM ]",
      heroCardTitle: "Estoque pronto. Envio imediato.",
      heroCardBody: "Pedidos até 14h saem no mesmo dia.",
    },

    categories: {
      eyebrow: "Linha completa",
      titleStart: "Encontre o que",
      italic: "você precisa",
      titleEnd: "",
      seeAll: "Ver catálogo",
      items: [
        { id: "centro-cirurgico",  label: "Centro Cirúrgico",  icon: "Shield",  color: "var(--green-700)" },
        { id: "kits-cirurgicos",   label: "Kits Cirúrgicos",   icon: "Package", color: "#0073a8" },
        { id: "campos-cirurgicos", label: "Campos Cirúrgicos", icon: "Leaf",    color: "var(--green-600)" },
        { id: "cateteres-sondas",  label: "Cateteres",         icon: "Drop",    color: "var(--green-800)" },
        { id: "estetoscopios",     label: "Estetoscópios",     icon: "Package", color: "#004b61" },
        { id: "oximetros",         label: "Oxímetros",         icon: "Box",     color: "#005f7a" },
        { id: "pressao",           label: "Ap. de Pressão",    icon: "Shield",  color: "#004160" },
        { id: "termometros",       label: "Termômetros",       icon: "Box",     color: "#002840" },
      ],
    },

    promos: {
      mainEyebrow: "Condições especiais B2B",
      mainTitleStart: "Volume com",
      mainTitleItalic: "qualidade",
      mainTitleEnd: " garantida.",
      mainBody: "Compras em volume para hospitais, redes de clínicas e distribuidores com faturamento no CNPJ, boleto e prazos diferenciados.",
      mainCta: "Solicitar cotação",
      shipEyebrow: "Logística express",
      shipTitle: "Despacho em 24h para todo o Brasil",
      shipBody: "Pedidos confirmados até 14h saem no mesmo dia",
      payEyebrow: "Facilidade de pagamento",
      payTitle: "Boleto, PIX e faturamento",
      payBody: "Condições especiais para PJ e hospitais",
    },

    bestsellers: {
      eyebrow: "Mais solicitados",
      titleStart: "Produtos em",
      italic: "destaque",
      titleEnd: "",
      chips: ["Todos", "Cirúrgicos", "Cateteres", "Estetoscópios", "Oxímetros"],
    },

    secondaryGrid: {
      eyebrow: "Linha certificada",
      titleStart: "Mais produtos",
      italic: "disponíveis",
      titleEnd: "",
      seeAll: "Ver catálogo completo",
    },

    brandStatement: {
      eyebrow: "Sobre a allpack.",
      titleLine1: "Precisão e",
      titleLine2Start: "confiança em cada",
      italic: "entrega.",
      body: "A allpack. é especializada em materiais médico-hospitalares certificados. Atendemos hospitais, clínicas cirúrgicas, distribuidores e centros de diagnóstico com rigor técnico, rastreabilidade e agilidade logística.",
      photoLabel: "[ FOTO ]",
      pillars: [
        { icon: "Award",    title: "Certificação ANVISA",    body: "100% dos produtos dentro das normas regulatórias vigentes." },
        { icon: "Truck",    title: "Entrega expressa",       body: "48h para capitais. Rastreamento em tempo real." },
        { icon: "Shield",   title: "Qualidade homologada",   body: "Produtos testados e aprovados para uso hospitalar." },
        { icon: "Whatsapp", title: "Suporte especializado",  body: "Equipe técnica para indicação e dúvidas sobre produtos." },
      ],
    },

    agronomoCta: {
      eyebrow: "Atendimento B2B",
      titleStart: "Compra para sua",
      italic: "instituição?",
      body: "Oferecemos condições especiais de faturamento, prazos diferenciados e suporte técnico dedicado para hospitais, redes de clínicas e distribuidores autorizados.",
      ctaWhats: "WhatsApp comercial",
    },

    trust: [
      { icon: "Truck",    title: "Entrega expressa",     sub: "48h para capitais, rastreio incluso" },
      { icon: "Award",    title: "Certificado ANVISA",   sub: "100% dos produtos regulamentados" },
      { icon: "Whatsapp", title: "Suporte técnico",      sub: "Equipe especializada disponível" },
      { icon: "Shield",   title: "Faturamento B2B",      sub: "Boleto e CNPJ para empresas" },
    ],

    productCard: {
      addBtn: "Adicionar",
      photoLabel: "[ FOTO PRODUTO ]",
    },

    footer: {
      tagline: "Materiais médico-hospitalares certificados — fornecimento com rigor técnico, rastreabilidade e agilidade para sua equipe.",
      cols: [
        { h: "Catálogo", links: ["Centro Cirúrgico", "Kits Cirúrgicos", "Campos Cirúrgicos", "Cateteres e Sondas", "Estetoscópios", "Oxímetros"] },
        { h: "Atendimento", links: ["Fale conosco", "Suporte técnico", "Calcule o frete", "Política de troca", "Rastrear pedido"] },
        { h: "allpack.", links: ["Quem somos", "Certificações", "Seja distribuidor", "Parcerias", "Trabalhe conosco"] },
        { h: "Jurídico", links: ["Termos de uso", "Privacidade", "Compra segura", "Regulamento ANVISA"] },
      ],
      copyright: "© 2026 allpack. — Produtos Médico-Hospitalares. Todos os direitos reservados.",
    },

    auth: {
      sideEyebrow: "Bem-vindo",
      sideTitleLine1: "Saúde com",
      sideTitleLine2Start: "qualidade em que",
      sideItalic: "você confia.",
      sideBody: "Entre na sua conta para acompanhar pedidos, acessar histórico de compras e falar com nosso time.",
      sideBenefits: [
        "✓ Repita pedidos anteriores com 1 clique",
        "✓ Faturamento para hospitais e clínicas",
        "✓ Histórico completo de compras",
        "✓ Atendimento técnico prioritário",
      ],
      tabLogin: "Entrar",
      tabRegister: "Criar conta",
      loginTitleStart: "Bem-vindo,",
      loginItalic: "cliente.",
      loginSub: "Entre com seu CNPJ ou e-mail para ver seus pedidos.",
      registerTitleStart: "Vamos",
      registerItalic: "começar",
      registerTitleEnd: "juntos.",
      registerSub: "Crie seu cadastro — em 2 minutos você está comprando.",
    },

    cart: {
      titleStart: "Seu",
      italic: "carrinho",
      freeShippingTitle: "Frete grátis liberado!",
      freeShippingBody: "Sua compra qualifica para frete grátis. Entrega em até 48h.",
      crossSell: "Aproveite também",
    },

    checkout: {
      titleStart: "Finalizar",
      italic: "pedido",
      addressTitle: "Endereço de entrega",
    },

    search: {
      titleStart: "O que você",
      italic: "está buscando",
      titleEnd: "?",
    },
  },
};
