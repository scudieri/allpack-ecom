/* global React */

const CART_STORAGE_KEY = "allpack_cart_v1";

function readCart() {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCart(items) {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {}
  window.dispatchEvent(new CustomEvent("cart:change", { detail: items }));
  return items;
}

window.getCartItems = readCart;

window.setCartItems = writeCart;

window.addToCart = (product, qty = 1) => {
  const items = readCart();
  const existing = items.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ id: product.id, name: product.name, brand: product.brand, price: product.price, color: product.color, qty });
  }
  return writeCart(items);
};

window.useCart = function useCart() {
  const [items, setItems] = React.useState(readCart);
  React.useEffect(() => {
    const onChange = (e) => setItems(e.detail);
    window.addEventListener("cart:change", onChange);
    return () => window.removeEventListener("cart:change", onChange);
  }, []);
  return [items, writeCart];
};
