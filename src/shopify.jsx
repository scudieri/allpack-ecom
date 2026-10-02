/* global React */

window.SHOPIFY = {
  domain: "allpack-medical.myshopify.com",
};

// Variant ID real da Shopify por produto (allpack-medical.myshopify.com).
window.SHOPIFY_VARIANT_BY_PRODUCT_ID = {
 "p1": 50675434291393,
 "p2": 50675434389697,
 "p3": 50675434488001,
 "p4": 50675434553537,
 "p5": 50675434619073,
 "p6": 50675434651841,
 "p7": 50675434684609,
 "p8": 50675434717377,
 "p9": 50675434750145,
 "p10": 50675434815681,
 "p11": 50675434881217,
 "p12": 50675434913985,
 "p13": 50675434946753,
 "p14": 50675434979521,
 "p15": 50675435012289,
 "p16": 50675435077825,
 "p17": 50675435143361,
 "p18": 50675435176129,
 "p19": 50675435241665,
 "p20": 50675435274433,
 "p21": 50675435307201,
 "p22": 50675435372737,
 "p23": 50675435438273,
 "p27": 50675435929793,
 "p28": 50675435962561,
 "p29": 50675436028097,
 "p30": 50675436191937,
 "p31": 50675436290241,
 "p32": 50675436323009,
 "p33": 50675436355777,
 "p35": 50675436421313,
 "p36": 50675436519617,
 "p37": 50675436552385,
 "p38": 50675436585153,
 "p39": 50675436617921,
 "p40": 50675436650689,
 "p41": 50675436716225,
 "p42": 50675436748993
};

window.buildShopifyCartUrl = function buildShopifyCartUrl(items) {
  const base = `https://${window.SHOPIFY.domain}`;
  const parts = items
    .map(i => ({ variantId: i.variantId || window.SHOPIFY_VARIANT_BY_PRODUCT_ID[i.id], qty: i.qty }))
    .filter(p => p.variantId)
    .map(p => `${p.variantId}:${p.qty}`);
  return parts.length ? `${base}/cart/${parts.join(",")}` : `${base}/cart`;
};

// Compra direta de um item (botão "Comprar agora").
window.buyNowUrl = (variantId, qty) => `https://${window.SHOPIFY.domain}/cart/${variantId}:${qty}`;
