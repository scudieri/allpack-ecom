/* global React */
// Second brand to demonstrate whitelabel swap.
// Same niche (insumos agrícolas) but distinct visual identity:
// navy + amber palette, modern agtech tone, simpler geometric mark.

const BoaLavouraMark = ({ size = 28, color = "currentColor" }) => (
  React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 64 64", fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
    React.createElement("circle", { cx: 32, cy: 32, r: 28, stroke: color, strokeWidth: 4, fill: "none" }),
    React.createElement("path", {
      d: "M32 14 C24 22 22 30 22 38 C22 44 26 48 32 48 C38 48 42 44 42 38 C42 30 40 22 32 14 Z",
      fill: color,
    }),
    React.createElement("path", {
      d: "M32 28 V48", stroke: "var(--cream-50)", strokeWidth: 1.5, strokeLinecap: "round",
    }),
  )
);

(window.BRANDS = window.BRANDS || {})["boa-lavoura"] = {
  meta: {
    id: "boa-lavoura",
    name: "Boa Lavoura Insumos",
    short: "Boa Lavoura",
    cnpj: "98.765.432/0001-10",
    foundedYear: 2008,
  },

  // Same CSS var names — totally different visual identity.
  // navy primary + amber CTA + bone backgrounds.
  colors: {
    "green-900": "#061f33",
    "green-800": "#0a3a5c",
    "green-700": "#0e5b8c",
    "green-600": "#1a78b3",
    "green-500": "#3094cf",
    "green-100": "#cfe1ee",
    "green-50":  "#e8f0f7",
    "orange-700": "#b3611d",
    "orange-600": "#e58a1f",
    "orange-500": "#f0a042",
    "orange-100": "#fbe0bf",
    "cream-200": "#ece4d3",
    "cream-100": "#f5efde",
    "cream-50":  "#faf6ec",
    "paper":     "#fffdf6",
    "ink-900": "#1a1f24",
    "ink-800": "#252b32",
    "ink-700": "#3a4250",
    "ink-500": "#6b7280",
    "ink-400": "#8c95a0",
    "ink-300": "#b9c0c8",
    "line": "#e0d9c5",
    "line-strong": "#c5bda3",
    "yellow-300": "#f3c64f",
    "berry": "#9b3a1f",
  },

  fonts: {
    display: '"Playfair Display", "Times New Roman", serif',
    sans: '"Inter", "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    googleUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
  },

  logo: {
    type: "mark+wordmark",
    small: "Insumos",
    wordmark: "boa lavoura",
    mark: BoaLavouraMark,
  },

  contact: {
    phone: "(34) 3232-9090",
    whatsapp: "(34) 9 9988-7766",
    email: "ola@boalavoura.com.br",
    address: "Av. dos Cerrados, 850 — Uberlândia/MG",
  },

  copy: {
    topStrip: [
      "FRETE GRÁTIS PARA TODO O TRIÂNGULO MINEIRO",
      "★ AGRÔNOMO DISPONÍVEL DE SEG A SÁB",
      "PARCELAMENTO EM ATÉ 12X NO CARTÃO",
      "TECNOLOGIA E TRADIÇÃO NA SUA LAVOURA",
      "+15 ANOS NUTRINDO O CERRADO",
    ],

    header: {
      searchPlaceholder: "O que você precisa pra sua lavoura?",
      searchBtn: "Buscar",
      categories: ["Fertilizantes", "Defensivos", "Sementes", "Corretivos", "Adubos orgânicos", "Ferramentas", "Irrigação", "Nutrição animal"],
      allCategoriesBtn: "Categorias",
      greetingPrefix: "Bem-vindo,",
      greetingName: "Carlos",
      myAccount: "Minha conta",
      cart: "Sacola",
      login: "Entrar / Cadastrar",
      phoneLabel: "(34) 3232-9090 — fale com a gente",
    },

    hero: {
      eyebrow: "Safra 25/26 • Frete grátis no Triângulo Mineiro",
      title: "Tecnologia",
      italic: "no campo certo.",
      subtitle: "Catálogo curado por agrônomos, logística que entende prazo de safra e a melhor relação custo-benefício do Cerrado. Insumo certo, dose certa, colheita maior.",
      cta1: "Explorar catálogo",
      cta2: "Fale com agrônomo",
      stats: [
        { v: "15+", l: "anos de mercado" },
        { v: "+8k", l: "lavouras atendidas" },
        { v: "+2k", l: "produtos no catálogo" },
      ],
      photoLabel: "[ FOTO LAVOURA — VISTA AÉREA ]",
      heroCardTitle: "Pedido confirmado, lavoura abastecida.",
      heroCardBody: "Logística dedicada para o produtor do Cerrado.",
    },

    categories: {
      eyebrow: "Categorias",
      titleStart: "Tudo pra sua",
      italic: "próxima",
      titleEnd: "safra",
      seeAll: "Ver todas →",
      items: [
        { id: "fertilizantes", label: "Fertilizantes", icon: "Sprout", color: "var(--green-700)" },
        { id: "defensivos", label: "Defensivos", icon: "Shield", color: "var(--orange-600)" },
        { id: "sementes", label: "Sementes", icon: "Drop", color: "var(--berry)" },
        { id: "corretivos", label: "Corretivos", icon: "Leaf", color: "var(--ink-700)" },
        { id: "organicos", label: "Adubo orgânico", icon: "Package", color: "var(--green-800)" },
        { id: "ferramentas", label: "Ferramentas", icon: "Tractor", color: "var(--orange-700)" },
        { id: "irrigacao", label: "Irrigação", icon: "Drop", color: "var(--green-600)" },
        { id: "racao", label: "Nutrição animal", icon: "Box", color: "#5a3a18" },
      ],
    },

    promos: {
      mainEyebrow: "Combo safra",
      mainTitleStart: "A combinação",
      mainTitleItalic: "certa",
      mainTitleEnd: "rende mais.",
      mainBody: "NPK + foliar + micronutriente com 25% off na sacola fechada. Promoção válida enquanto durar o estoque da safra.",
      mainCta: "Montar combo →",
      shipEyebrow: "Logística dedicada",
      shipTitle: "Frete grátis no Triângulo Mineiro",
      shipBody: "Acima de R$ 600 — Uberlândia, Uberaba, Patos e região",
      payEyebrow: "Pagamento flexível",
      payTitle: "12x no cartão ou faturamento safra",
      payBody: "Análise de crédito em 24h",
    },

    bestsellers: {
      eyebrow: "Os mais pedidos",
      titleStart: "Os queridinhos",
      italic: "do produtor",
      titleEnd: "",
      chips: ["Todos", "Fertilizantes", "Defensivos", "Sementes", "Ferramentas"],
    },

    secondaryGrid: {
      eyebrow: "Pra preparar o solo",
      titleStart: "Corretivos e",
      italic: "sementes",
      titleEnd: "",
      seeAll: "Ver todos →",
    },

    brandStatement: {
      eyebrow: "Sobre a Boa Lavoura",
      titleLine1: "Tecnologia",
      titleLine2Start: "no campo",
      italic: "certo.",
      body: "A Boa Lavoura nasceu no Triângulo Mineiro com uma ideia simples: usar tecnologia e curadoria técnica pra ajudar o produtor a comprar melhor. Agrônomos selecionam cada produto, logística dedicada entrega no prazo da safra e atendimento humano resolve.",
      photoLabel: "[ FOTO LAVOURA — VISTA AÉREA ]",
      pillars: [
        { icon: "Award", title: "15 anos de mercado", body: "Atendendo o produtor do Cerrado desde 2010." },
        { icon: "Truck", title: "Logística do Triângulo", body: "Frota própria, entrega no prazo da safra." },
        { icon: "Sprout", title: "Curadoria técnica", body: "Catálogo selecionado por agrônomos da casa." },
        { icon: "Whatsapp", title: "Atendimento humano", body: "Agrônomo no WhatsApp, sem chatbot, sem fila." },
      ],
    },

    agronomoCta: {
      eyebrow: "Consultoria técnica gratuita",
      titleStart: "Em dúvida na recomendação?",
      italic: "A gente resolve.",
      body: "Envie a análise de solo ou foto da lavoura no WhatsApp. Nossos agrônomos retornam com a recomendação técnica completa, sem custo, sem compromisso de compra.",
      ctaWhats: "Falar no WhatsApp",
    },

    trust: [
      { icon: "Truck", title: "Logística dedicada", sub: "Entrega no prazo da safra" },
      { icon: "Shield", title: "Compra segura", sub: "Pix, boleto e cartão" },
      { icon: "Whatsapp", title: "Agrônomo na hora", sub: "Sem chatbot, sem fila" },
      { icon: "Award", title: "Curadoria técnica", sub: "Cada produto avaliado" },
    ],

    productCard: {
      addBtn: "Adicionar",
      photoLabel: "[ IMAGEM PRODUTO ]",
    },

    footer: {
      tagline: "Tecnologia, curadoria técnica e logística dedicada pra quem tira o sustento da terra.",
      cols: [
        { h: "Comprar", links: ["Fertilizantes", "Defensivos", "Sementes", "Corretivos", "Ferramentas", "Ofertas"] },
        { h: "Suporte", links: ["Fale conosco", "Consultoria técnica", "Calcular frete", "Trocas e devoluções", "Status do pedido"] },
        { h: "A empresa", links: ["Nossa história", "Time técnico", "Parcerias", "Seja revendedor", "Carreira"] },
        { h: "Jurídico", links: ["Termos de uso", "Privacidade", "Cookies", "Compra segura"] },
      ],
      copyright: "© 2026 Boa Lavoura Insumos • CNPJ 98.765.432/0001-10",
    },

    auth: {
      sideEyebrow: "Bem-vindo de volta",
      sideTitleLine1: "Tecnologia",
      sideTitleLine2Start: "no campo",
      sideItalic: "certo.",
      sideBody: "Entre na Boa Lavoura para acompanhar pedidos, repetir compras da safra anterior e falar com nossos agrônomos.",
      sideBenefits: [
        "✓ Histórico completo de pedidos da safra",
        "✓ Faturamento safra para produtor cadastrado",
        "✓ Recomendações técnicas personalizadas",
        "✓ Atendimento prioritário com agrônomo",
      ],
      tabLogin: "Entrar",
      tabRegister: "Cadastrar",
      loginTitleStart: "Olá,",
      loginItalic: "produtor.",
      loginSub: "Acesse com seu CPF/CNPJ ou e-mail para ver seus pedidos.",
      registerTitleStart: "Vamos",
      registerItalic: "começar",
      registerTitleEnd: "juntos.",
      registerSub: "Crie sua conta — em 2 minutos você está comprando.",
    },

    cart: {
      titleStart: "Sua",
      italic: "sacola",
      freeShippingTitle: "Frete grátis liberado!",
      freeShippingBody: "Sua compra passou de R$ 600. Entrega no prazo da safra.",
      crossSell: "Para completar a sacola",
    },

    checkout: {
      titleStart: "Finalizar",
      italic: "pedido",
      addressTitle: "Endereço de entrega",
    },

    search: {
      titleStart: "O que você",
      italic: "procura",
      titleEnd: "para a lavoura?",
    },
  },
};
