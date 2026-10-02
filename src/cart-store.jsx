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

// item do carrinho = produto + variante. product.variantId é a variante padrão; "variant" escolhe outra.
window.addToCart = (product, qty = 1, variant = null) => {
  const variantId = (variant && variant.variantId) || product.variantId;
  const key = product.id + ":" + variantId;
  const items = readCart();
  const existing = items.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({
      key, id: product.id, variantId, handle: product.handle, name: product.name, variantLabel: variant ? variant.label : "",
      brand: product.brand, price: (variant && variant.price) || product.price, photo: product.photoUrl || "", qty,
    });
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
