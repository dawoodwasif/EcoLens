// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
// First, validate the message's structure.
if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    let spanElems = document.querySelectorAll("span");
    let manufacturer;
    for (let i = 0; i < spanElems.length; i++) {
        if (spanElems[i].innerText === "Manufacturer ‏ : ‎ ") {
            manufacturer = spanElems[i].nextElementSibling.innerText;
            break;
        }
    }

    // If not found, fall back to using the productTitle element for Amazon
    if (!manufacturer) {
        const productTitleElem = document.getElementById("productTitle");
        if (productTitleElem) {
            // Use the first word of the product title as the manufacturer name
            manufacturer = productTitleElem.innerText.trim().split(" ")[0];
        }
    }

    // If "Manufacturer" label is not found, check for Walmart-specific attribute
    if (!manufacturer) {
        const walmartBrandElem = document.querySelector('a[data-seo-id="brand-name"]');
        if (walmartBrandElem) {
            manufacturer = walmartBrandElem.innerText.trim();
        }
         // Clean up manufacturer name if it starts with "Visit"
         if (manufacturer && manufacturer.startsWith("Visit")) {
            manufacturer = manufacturer.replace(/^Visit\s+(the\s+)?/i, "").replace(/\s+Store$/i, "").trim();
        }
    }

    // If not found, fall back to using the productTitle element for Target
    if (!manufacturer) {
        const productTitleElem = document.getElementById("pdp-product-title-id");
        if (productTitleElem) {
            // Use the first word of the product title as the manufacturer name
            manufacturer = productTitleElem.innerText.trim().split(" ")[0];
        }
    }


    var domInfo = {
    total: document.querySelectorAll('*').length,
    inputs: document.querySelectorAll('input').length,
    buttons: document.querySelectorAll('button').length,
    manufacturer: manufacturer
    };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
}
});