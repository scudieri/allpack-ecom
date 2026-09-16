/* global React */

window.SHOPIFY = {
  domain: "allpack-medical.myshopify.com",
};

// Variant ID real da Shopify por produto (allpack-medical.myshopify.com).
window.SHOPIFY_VARIANT_BY_PRODUCT_ID = {
  p1: 50454044508353, p2: 50454044606657, p3: 50454044704961, p4: 50454044737729, p5: 50454045458625,
  p6: 50454045491393, p7: 50454045524161, p8: 50454045556929, p9: 50454045589697, p10: 50454046081217,
  p11: 50454046277825, p12: 50454046310593, p13: 50454046474433, p14: 50454046802113, p15: 50454046834881,
  p16: 50454046867649, p17: 50454046900417, p18: 50454046933185, p19: 50454046965953, p20: 50454046998721,
  p21: 50454047031489, p22: 50454047064257, p23: 50454047097025, p24: 50454047129793, p25: 50454047162561,
  p26: 50454046572737, p27: 50454046605505, p28: 50454046736577, p29: 50454045851841, p30: 50454046769345,
};

window.buildShopifyCartUrl = function buildShopifyCartUrl(items) {
  const base = `https://${window.SHOPIFY.domain}`;
  const parts = items
    .map(i => ({ variantId: window.SHOPIFY_VARIANT_BY_PRODUCT_ID[i.id], qty: i.qty }))
    .filter(p => p.variantId)
    .map(p => `${p.variantId}:${p.qty}`);
  return parts.length ? `${base}/cart/${parts.join(",")}` : `${base}/cart`;
};
