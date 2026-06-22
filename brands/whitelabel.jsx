/* global React */
// White-label neutral brand — no identity, no company, just structure.
// Access via ?brand=whitelabel

(window.BRANDS = window.BRANDS || {}).whitelabel = {
  meta: {
    id: "whitelabel",
    name: "Sua Loja",
    short: "Loja",
    cnpj: "",
    foundedYear: null,
  },

  colors: {
    // Paleta completamente neutra — cinza/slate sem nenhuma cor de marca
    "green-900": "#0f172a",
    "green-800": "#1e293b",
    "green-700": "#334155",
    "green-600": "#475569",
    "green-500": "#64748b",
    "green-100": "#e2e8f0",
    "green-50":  "#f1f5f9",
    "orange-700": "#374151",
    "orange-600": "#4b5563",
    "orange-500": "#6b7280",
    "orange-100": "#e5e7eb",
    "cream-200": "#e5e7eb",
    "cream-100": "#f3f4f6",
    "cream-50":  "#f9fafb",
    "paper":     "#ffffff",
    "ink-900": "#0f172a",
    "ink-800": "#1e293b",
    "ink-700": "#374151",
    "ink-500": "#6b7280",
    "ink-400": "#9ca3af",
    "ink-300": "#d1d5db",
    "line": "#e5e7eb",
    "line-strong": "#d1d5db",
    "yellow-300": "#d1d5db",
    "berry": "#374151",
  },

  fonts: {
    display: '"Inter", "Helvetica Neue", Arial, sans-serif',
    sans: '"Inter", "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
  },

  logo: {
    type: "wordmark",
    small: "",
    wordmark: "sua loja",
  },

  contact: {
    phone: "(00) 0000-0000",
    whatsapp: "(00) 0000-0000",
    email: "contato@sualoja.com.br",
    address: "Endereço da loja — Cidade/UF",
  },

  copy: {
    topStrip: [
      "FRETE GRÁTIS ACIMA DE R$ 800",
      "ATENDIMENTO ESPECIALIZADO",
      "PARCELAMENTO SEM JUROS",
      "ENTREGA EM TODO O BRASIL",
      "PRODUTOS SELECIONADOS",
    ],

    header: {
      searchPlaceholder: "Buscar produto...",
      searchBtn: "Buscar",
      categories: ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5", "Categoria 6", "Categoria 7", "Categoria 8"],
      allCategoriesBtn: "Todas categorias",
      greetingPrefix: "Olá,",
      greetingName: "Cliente",
      myAccount: "Minha conta",
      cart: "Carrinho",
      login: "Entrar / Cadastrar",
      phoneLabel: "(00) 0000-0000 — atendimento",
    },

    hero: {
      eyebrow: "Promoção • Frete grátis acima de R$ 800",
      title: "Os melhores produtos",
      italic: "direto pra você",
      subtitle: "Produtos selecionados com qualidade e preço justo. Entrega rápida e atendimento especializado do início ao fim da sua compra.",
      cta1: "Ver ofertas",
      cta2: "Falar com atendente",
      stats: [
        { v: "10+", l: "anos no mercado" },
        { v: "+5k", l: "clientes atendidos" },
        { v: "500+", l: "produtos em estoque" },
      ],
      photoLabel: "[ FOTO PRINCIPAL ]",
      heroCardTitle: "Comprou, confirmou, chegou",
      heroCardBody: "No endereço que você escolheu, no prazo combinado.",
    },

    categories: {
      eyebrow: "Categorias",
      titleStart: "O que você está",
      italic: "procurando",
      titleEnd: "hoje?",
      seeAll: "Ver todas →",
      items: [
        { id: "categoria-1", label: "Categoria 1", icon: "Sprout", color: "var(--green-700)" },
        { id: "categoria-2", label: "Categoria 2", icon: "Shield", color: "var(--orange-600)" },
        { id: "categoria-3", label: "Categoria 3", icon: "Drop", color: "var(--berry)" },
        { id: "categoria-4", label: "Categoria 4", icon: "Leaf", color: "var(--ink-700)" },
        { id: "categoria-5", label: "Categoria 5", icon: "Package", color: "var(--green-800)" },
        { id: "categoria-6", label: "Categoria 6", icon: "Tractor", color: "var(--orange-700)" },
        { id: "categoria-7", label: "Categoria 7", icon: "Drop", color: "var(--green-600)" },
        { id: "categoria-8", label: "Categoria 8", icon: "Box", color: "var(--ink-500)" },
      ],
    },

    promos: {
      mainEyebrow: "Promoção em destaque",
      mainTitleStart: "Mais",
      mainTitleItalic: "valor",
      mainTitleEnd: ", mesmo preço.",
      mainBody: "Aproveite combos e ofertas especiais selecionados para você. Promoção por tempo limitado.",
      mainCta: "Aproveitar oferta →",
      shipEyebrow: "Entrega rápida",
      shipTitle: "Frete grátis essa semana",
      shipBody: "Acima de R$ 800 — todo o Brasil",
      payEyebrow: "Pague como preferir",
      payTitle: "12x sem juros ou à vista",
      payBody: "Pague da forma que for melhor pra você",
    },

    bestsellers: {
      eyebrow: "Mais vendidos",
      titleStart: "O que está",
      italic: "saindo",
      titleEnd: "agora",
      chips: ["Todos", "Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4"],
    },

    secondaryGrid: {
      eyebrow: "Destaques",
      titleStart: "Seleção",
      italic: "especial",
      titleEnd: "",
      seeAll: "Ver todos →",
    },

    brandStatement: {
      eyebrow: "Sobre nós",
      titleLine1: "Qualidade",
      titleLine2Start: "em que você pode",
      italic: "confiar.",
      body: "Nossa loja oferece produtos cuidadosamente selecionados com foco em qualidade, preço justo e atendimento humano. Estamos aqui para garantir a melhor experiência de compra do início ao fim.",
      photoLabel: "[ FOTO DA EQUIPE / LOJA ]",
      pillars: [
        { icon: "Award", title: "Qualidade garantida", body: "Produtos verificados e selecionados com critério." },
        { icon: "Truck", title: "Entrega confiável", body: "Enviamos com cuidado e agilidade para todo o Brasil." },
        { icon: "Sprout", title: "Curadoria especializada", body: "Cada item escolhido por especialistas no assunto." },
        { icon: "Whatsapp", title: "Atendimento humano", body: "Fale com a nossa equipe — sem robôs, sem fila." },
      ],
    },

    agronomoCta: {
      eyebrow: "Atendimento especializado",
      titleStart: "Tem dúvida?",
      italic: "A gente ajuda.",
      body: "Nossa equipe está disponível para tirar qualquer dúvida e ajudar você a escolher o produto certo para sua necessidade.",
      ctaWhats: "Falar no WhatsApp",
    },

    trust: [
      { icon: "Truck", title: "Entrega rápida", sub: "Para todo o Brasil" },
      { icon: "Shield", title: "Compra segura", sub: "Pix, boleto e cartão" },
      { icon: "Whatsapp", title: "Suporte online", sub: "Tire dúvidas na hora" },
      { icon: "Award", title: "Qualidade garantida", sub: "Produtos selecionados" },
    ],

    productCard: {
      addBtn: "Adicionar",
      photoLabel: "[ FOTO PRODUTO ]",
    },

    footer: {
      tagline: "Produtos selecionados com qualidade e preço justo. Aqui para servir você.",
      cols: [
        { h: "Comprar", links: ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5", "Ofertas"] },
        { h: "Atendimento", links: ["Fale conosco", "Atendimento online", "Calcule frete", "Política de troca", "Status do pedido"] },
        { h: "A loja", links: ["Nossa história", "Diferenciais", "Parcerias", "Seja revendedor", "Trabalhe conosco"] },
        { h: "Jurídico", links: ["Termos de uso", "Privacidade", "Cookies", "Compra segura"] },
      ],
      copyright: "© 2026 Sua Loja",
    },

    auth: {
      sideEyebrow: "Bem-vindo",
      sideTitleLine1: "Qualidade",
      sideTitleLine2Start: "em que você pode",
      sideItalic: "confiar.",
      sideBody: "Entre na sua conta para acompanhar pedidos, acessar histórico de compras e falar com nossa equipe.",
      sideBenefits: [
        "✓ Repita pedidos anteriores com 1 clique",
        "✓ Parcele em até 12x sem juros",
        "✓ Histórico completo de compras",
        "✓ Atendimento prioritário",
      ],
      tabLogin: "Entrar",
      tabRegister: "Criar conta",
      loginTitleStart: "Bem-vindo,",
      loginItalic: "cliente.",
      loginSub: "Entre com seu CPF/CNPJ ou e-mail para ver seus pedidos.",
      registerTitleStart: "Vamos",
      registerItalic: "começar",
      registerTitleEnd: "juntos.",
      registerSub: "Crie seu cadastro — em 2 minutos você está comprando.",
    },

    cart: {
      titleStart: "Seu",
      italic: "carrinho",
      freeShippingTitle: "Frete grátis liberado!",
      freeShippingBody: "Sua compra passou de R$ 800. Entrega em todo o Brasil em até 5 dias úteis.",
      crossSell: "Aproveite também",
    },

    checkout: {
      titleStart: "Finalizar",
      italic: "compra",
      addressTitle: "Endereço de entrega",
    },

    search: {
      titleStart: "O que você",
      italic: "está buscando",
      titleEnd: "?",
    },
  },
};
