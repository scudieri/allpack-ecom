/* global React */

window.SHOPIFY = {
  domain: "allpack-medical.myshopify.com",
};

// Variant ID real da Shopify por produto — preencher assim que cada item for confirmado na loja.
window.SHOPIFY_VARIANT_BY_PRODUCT_ID = {
  p1: null, p2: null, p3: null, p4: null, p5: null, p6: null, p7: null, p8: null, p9: null, p10: null,
  p11: null, p12: null, p13: null, p14: null, p15: null, p16: null, p17: null, p18: null, p19: null, p20: null,
  p21: null, p22: null, p23: null, p24: null, p25: null, p26: null, p27: null, p28: null, p29: null, p30: null,
};

window.buildShopifyCartUrl = function buildShopifyCartUrl(items) {
  const base = `https://${window.SHOPIFY.domain}`;
  const parts = items
    .map(i => ({ variantId: window.SHOPIFY_VARIANT_BY_PRODUCT_ID[i.id], qty: i.qty }))
    .filter(p => p.variantId)
    .map(p => `${p.variantId}:${p.qty}`);
  return parts.length ? `${base}/cart/${parts.join(",")}` : `${base}/cart`;
};
