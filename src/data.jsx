/* global React */

window.CATEGORIES = [
  { id: "centro-cirurgico", label: "Centro Cirúrgico", icon: "Shield", count: 41 },
  { id: "cateteres-sondas", label: "Cateteres e Sondas", icon: "Drop", count: 18 },
  { id: "estetoscopios", label: "Estetoscópios", icon: "Package", count: 6 },
  { id: "oximetros", label: "Oxímetros", icon: "Box", count: 4 },
  { id: "pressao", label: "Ap. de Pressão", icon: "Shield", count: 5 },
  { id: "kits-cirurgicos", label: "Kits Cirúrgicos", icon: "Package", count: 14 },
  { id: "campos-cirurgicos", label: "Campos Cirúrgicos", icon: "Leaf", count: 22 },
  { id: "termometros", label: "Termômetros", icon: "Box", count: 3 },
];

window.ALL_CATEGORIES = [
  "Avental Cirúrgico", "Campo Fenestrado", "Campo de Mesa", "Kit Universal",
  "Kit Angiográfico", "Kit Ortopedia", "Kit Cardíaco", "Kit Cesária",
  "Cateter Foley", "Sonda Vesical", "Estetoscópio Adulto", "Estetoscópio Pediátrico",
  "Oxímetro de Pulso", "Esfigmomanômetro", "Termômetro Infravermelho", "Sterile Drape",
];

const GD = (id) => `https://lh3.googleusercontent.com/d/${id}`;

window.PRODUCTS = [
  // — Aventais —
  { id: "p1",  name: "Avental Cirúrgico Standard",                          brand: "allpack.", category: "centro-cirurgico",  price: 13.90,  unit: "unidade",      rating: 4.7, reviews: 38,  badge: "MAIS VENDIDO", color: "var(--green-800)", photoUrl: GD("1Kz3_2NVPDPNxF0q_V1DOO7zc0hsYu8I7") },
  { id: "p2",  name: "Avental Cirúrgico Standard com Reforço",              brand: "allpack.", category: "centro-cirurgico",  price: 16.40,  unit: "unidade",      rating: 4.8, reviews: 21,  color: "var(--green-700)", photoUrl: GD("17MxoNTMqWdQYIYVEVpPHrEsiTLdLy6ME") },
  // — Campos Cirúrgicos —
  { id: "p3",  name: "Campo Cirúrgico Fenestrado Laminado 0,75×0,50",       brand: "allpack.", category: "campos-cirurgicos", price: 6.28,   unit: "unidade",      rating: 4.6, reviews: 55,  color: "var(--green-800)", photoUrl: GD("1a7C9hnu5Qf1YYyYIg4GMcCMrdGyGBQEy") },
  { id: "p4",  name: "Campo Cirúrgico Fenestrado Laminado 0,80×0,80",       brand: "allpack.", category: "campos-cirurgicos", price: 6.28,   unit: "unidade",      rating: 4.6, reviews: 42,  color: "var(--green-800)", photoUrl: GD("1bbieH0gVIIef7ejUevagiYdNJcLqMFQs") },
  { id: "p5",  name: "Campo de Mesa Mayo Laminado 1,40×1,20",               brand: "allpack.", category: "campos-cirurgicos", price: 7.91,   unit: "unidade",      rating: 4.7, reviews: 32,  color: "var(--green-700)", photoUrl: GD("1bbieH0gVIIef7ejUevagiYdNJcLqMFQs") },
  { id: "p6",  name: "Campo de Mesa Mayo Laminado 1,40×0,50",               brand: "allpack.", category: "campos-cirurgicos", price: 6.93,   unit: "unidade",      rating: 4.7, reviews: 28,  color: "var(--green-700)", photoUrl: GD("1OuVJIwC0hbE-PcvRN3WXFnqe1vkcDquk") },
  // — Kits —
  { id: "p7",  name: "Kit Universal",                                        brand: "allpack.", category: "kits-cirurgicos",   price: 54.00,  unit: "kit",          rating: 4.9, reviews: 62,  badge: "COMPLETO",     color: "var(--green-900)", photoUrl: GD("1bbieH0gVIIef7ejUevagiYdNJcLqMFQs") },
  { id: "p8",  name: "Kit Universal Pequenas Cirurgias",                     brand: "allpack.", category: "kits-cirurgicos",   price: 54.00,  unit: "kit",          rating: 4.8, reviews: 44,  color: "var(--green-800)", photoUrl: GD("1bbieH0gVIIef7ejUevagiYdNJcLqMFQs") },
  { id: "p9",  name: "Kit Angiográfico",                                     brand: "allpack.", category: "kits-cirurgicos",   price: 34.85,  unit: "kit",          rating: 4.7, reviews: 29,  color: "var(--green-700)", photoUrl: GD("1bbieH0gVIIef7ejUevagiYdNJcLqMFQs") },
  // — Estetoscópios —
  { id: "p10", name: "Estetoscópio Eternity",                                brand: "allpack.", category: "estetoscopios",     price: 265.00, unit: "unidade",      rating: 4.7, reviews: 84,  color: "var(--green-900)", photoUrl: GD("1pt0RR9pTebqdNN6Wz_M1tO6mi9s5xh57") },
  { id: "p11", name: "Estetoscópio Black",                                   brand: "allpack.", category: "estetoscopios",     price: 320.00, unit: "unidade",      rating: 4.8, reviews: 56,  color: "var(--ink-900)",   photoUrl: GD("1wlCgA2tk6fN9ev0ciRUlff1bxqqpPNt_") },
  { id: "p12", name: "Estetoscópio Innova",                                  brand: "allpack.", category: "estetoscopios",     price: 240.00, unit: "unidade",      rating: 4.6, reviews: 40,  color: "var(--green-800)", photoUrl: GD("1e8n1Qp-5ABjofBHSowoQSLb30YTOIKLS") },
  // — Oxímetro —
  { id: "p13", name: "Oxímetro de Pulso",                                    brand: "allpack.", category: "oximetros",         price: 90.00,  unit: "unidade",      rating: 4.7, reviews: 112, badge: "MAIS VENDIDO", color: "var(--green-700)", photoUrl: GD("15dqqpmJXaR3IapD9inGNGNAdpm5Pauhv") },
  // — Cateteres Foley Dufour —
  { id: "p14", name: "Cateter Foley Silicone Dufour 3 Vias 18Fr 50ml",      brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 14,  color: "var(--green-900)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p15", name: "Cateter Foley Silicone Dufour 3 Vias 20Fr 50ml",      brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 11,  color: "var(--green-900)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p16", name: "Cateter Foley Silicone Dufour 3 Vias 22Fr 50ml",      brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 9,   color: "var(--green-900)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p17", name: "Cateter Foley Silicone Dufour 3 Vias 24Fr 50ml",      brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 7,   color: "var(--green-900)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  // — Cateteres Foley Anatômica —
  { id: "p18", name: "Cateter Foley Silicone Anatômica 3 Vias 20Fr 50ml",   brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 8,   color: "var(--green-800)", photoUrl: GD("1zh7xSUmJuITq8O-ZF_35HdRQTuzEE3GT") },
  { id: "p19", name: "Cateter Foley Silicone Anatômica 3 Vias 22Fr 50ml",   brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 6,   color: "var(--green-800)", photoUrl: GD("1zh7xSUmJuITq8O-ZF_35HdRQTuzEE3GT") },
  { id: "p20", name: "Cateter Foley Silicone Anatômica 2 Vias 20Fr 50ml",   brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 10,  color: "var(--green-800)", photoUrl: GD("1zh7xSUmJuITq8O-ZF_35HdRQTuzEE3GT") },
  { id: "p21", name: "Cateter Foley Silicone Anatômica 2 Vias 22Fr 50ml",   brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 8,   color: "var(--green-800)", photoUrl: GD("1zh7xSUmJuITq8O-ZF_35HdRQTuzEE3GT") },
  // — Cateteres Foley Round —
  { id: "p22", name: "Cateter Foley Silicone Round 2 Vias 20Fr 50ml",       brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 9,   color: "var(--green-700)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p23", name: "Cateter Foley Silicone Round 2 Vias 22Fr 50ml",       brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 7,   color: "var(--green-700)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p24", name: "Cateter Foley Silicone Round 3 Vias 20Fr 50ml",       brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 6,   color: "var(--green-700)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  { id: "p25", name: "Cateter Foley Silicone Round 3 Vias 22Fr 50ml",       brand: "allpack.", category: "cateteres-sondas",  price: 0, unit: "sob consulta",    rating: 4.8, reviews: 5,   color: "var(--green-700)", photoUrl: GD("1GKog0vtXe2gAwviVjBAvCwcz-K33UsAT") },
  // — sem foto —
  { id: "p26", name: "Oxímetro de Dedo Premium",            brand: "allpack.", category: "oximetros",         price: 450.00, unit: "unidade", rating: 4.9, reviews: 35,  badge: "PREMIUM", color: "var(--green-800)" },
  { id: "p27", name: "Aparelho de Pressão Digital de Braço",brand: "allpack.", category: "pressao",           price: 180.00, unit: "unidade", rating: 4.7, reviews: 67,  color: "var(--green-700)" },
  { id: "p28", name: "Termômetro Digital Infravermelho",    brand: "allpack.", category: "termometros",       price: 130.00, unit: "unidade", rating: 4.8, reviews: 93,  color: "var(--green-700)" },
  { id: "p29", name: "Kit Cesária",                         brand: "allpack.", category: "kits-cirurgicos",   price: 62.00,  unit: "kit",     rating: 4.8, reviews: 33,  color: "var(--green-800)" },
  { id: "p30", name: "Estetoscópio Ligas Metálicas (Luxo)", brand: "allpack.", category: "estetoscopios",     price: 350.00, unit: "unidade", rating: 4.9, reviews: 22,  badge: "LUXO", color: "var(--green-900)" },
];

window.PRODUCTS_WITH_PHOTO = window.PRODUCTS.filter(p => p.photoUrl);

// Hero copy now lives in the active brand config — exposed as window.HERO for compat.
window.HERO = window.BRAND?.copy?.hero || {};

window.CART_ITEMS = [];

window.ORDERS = [
  { id: "#PED-2026-04183", date: "22 abr 2026", total: 2479.40, status: "transit", statusLabel: "A CAMINHO", items: 3, eta: "Chega hoje, 30 abr" },
  { id: "#PED-2026-03921", date: "07 abr 2026", total: 894.00, status: "delivered", statusLabel: "ENTREGUE", items: 5, eta: "Entregue 12 abr" },
  { id: "#PED-2026-03774", date: "29 mar 2026", total: 4120.50, status: "delivered", statusLabel: "ENTREGUE", items: 8, eta: "Entregue 03 abr" },
  { id: "#PED-2026-03601", date: "14 mar 2026", total: 1280.00, status: "delivered", statusLabel: "ENTREGUE", items: 4, eta: "Entregue 18 mar" },
];

// Money helper
window.brl = (n) => "R$ " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
