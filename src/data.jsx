/* global React */

window.CATEGORIES = [
  { id: "categoria-1", label: "Categoria 1", icon: "Package", count: 0 },
  { id: "categoria-2", label: "Categoria 2", icon: "Box", count: 0 },
  { id: "categoria-3", label: "Categoria 3", icon: "Shield", count: 0 },
  { id: "categoria-4", label: "Categoria 4", icon: "Leaf", count: 0 },
  { id: "categoria-5", label: "Categoria 5", icon: "Package", count: 0 },
  { id: "categoria-6", label: "Categoria 6", icon: "Box", count: 0 },
  { id: "categoria-7", label: "Categoria 7", icon: "Shield", count: 0 },
  { id: "categoria-8", label: "Categoria 8", icon: "Leaf", count: 0 },
];

window.ALL_CATEGORIES = [
  "Subcategoria 1", "Subcategoria 2", "Subcategoria 3", "Subcategoria 4",
  "Subcategoria 5", "Subcategoria 6", "Subcategoria 7", "Subcategoria 8",
  "Subcategoria 9", "Subcategoria 10", "Subcategoria 11", "Subcategoria 12",
];

window.PRODUCTS = [];

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
