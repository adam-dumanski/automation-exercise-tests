class productsPage {
    //nawigacja do listy produktow
    get productsLink() {
        return cy.get('[href="/products"]').contains('Products')
    }
    // lista produktow
    get productsList() {
        return cy.get('.features_items .product-image-wrapper')
    }
    // wyszukiwarka
    get searchInput() {
        return cy.get('[id="search_product"]')
    }
    // button wyszukaj
    get searchButton() {
        return cy.get('[id="submit_search"]')
    }
    // dodaj do koszyka button
    get addToCartButton() {
        return cy.get('.add-to-cart')
    }
    //pokaz produkt button
    get viewProductButtons(){
        return cy.get('.fa-plus-square')
    }
    // button kontunuuj zakupy
    get continueShoppingButton() {
        return cy.get('[data-dismiss="modal"]')
    }
    // pokaz koszyk z menu nawigacji
    get viewCartLink() {
        return cy.get('.shop-menu > [href="/view_cart"]')
    }
    //pokaz koszyk z popup po dodaniu produktu
    get viewCartLinkPopup() {
        return cy.get('.modal-content [href="/view_cart"]')
    }
    // popup po dodadniu do koszyka
    get popupAdded() {
        return cy.get('.modal-title.w-100')
    }

    // METODY
    goToProducts() {
        this.productsLink.click()
    }
    searchProduct(name){
        this.searchInput.type(name)
    }
    pressSearchButton() {
        this.searchButton.click()
    }
    addProductToCart(index){
        this.addToCartButton
            .eq(index)
            .scrollIntoView()
            .wait(500)
            .click({force: true})
    }
    pressButtonAddToCart(){
        this.addToCartButton.click()
    }
    isProductListVisible(){
        this.productsList.should('be.visible')
    }
    isProductListGreaterThanOne(count){
        this.productsList.should('have.length.greaterThan' , count)
    }
    hoveOverProduct(index){
        this.productsList.eq(index).scrollIntoView().trigger('mouseover')
    }
    displayedPopupAdded(){
        this.popupAdded.should('be.visible')
        this.popupAdded.should('have.text' , 'Added!')
    }
    goToCartFromPopup(){
        this.viewCartLinkPopup.click()
    }
    pressButtonContinue(){
        this.continueShoppingButton.click()
        cy.wait(500)
        this.popupAdded.should('not.be.visible')
    }
    hoverAndAddProduct(index){
        this.productsList
            .eq(index)
            .scrollIntoView()
            .wait(300)
            .trigger('mouseover')
        this.productsList
            .eq(index)
            .find('.add-to-cart')
            .first()
            .click({force: true})



    }


}

export default new productsPage()
