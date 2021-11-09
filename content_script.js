async function addSkusToCart() {
    var skus = document.getElementsByClassName("sku-property-item");
    var addToCartBtn = document.getElementsByClassName("addcart")[0];
    for (i = 0; i < skus.length; i++) {
        console.log(skus[i]);
        skus[i].click();
        addToCartBtn.click();

        await new Promise((r) => setTimeout(r, 1000));
        console.log("closing");
        var closeBtn = document.getElementsByClassName(
            "next-icon next-icon-close next-medium next-dialog-close-icon"
        )[0];
        closeBtn.click();
    }
}
addSkusToCart();