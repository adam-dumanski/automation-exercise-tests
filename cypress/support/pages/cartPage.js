class cartPage {
    // lista produktów w koszyku
    get cartItems() {
        return cy.get('#cart_info_table tbody > tr')
    }
    // nazwa produktu
    get productName(){
        return cy.get('.cart_description a')
    }
    // cena produkty
    get productPrice(){
        return cy.get('.cart_price p')
    }
    // ilość produktu
    get productQuantity(){
        return cy.get('.cart_quantity > button')
    }
    // przycisk usuń
    get removeButton(){
        return cy.get('.cart_quantity_delete > .fa-times')
    }
    //  przycisk "Proceed To Checkout"
    get proceedToCheckout(){
        return cy.get('.check_out')
    }
    // logowanie z koszyka jezeli niezalogowany
    get registerLoginLink(){
        return cy.get('.modal-content [href="/login"]')
    }
    // METODY
    // usuwanie produktu
    removeProduct(index){
        this.removeButton.eq(index).click()
    }
    //przejdz do checkout
    clickProceedToCheckout(){
        this.proceedToCheckout.click()
    }
    // sprawdz liczbe produktow
    shouldHaveProductCount(count){
        this.cartItems.should('have.length' , count)
    }
    // sprawdz czy produkt jest w koszyku
    shouldContainProduct(name){
        this.productName.should('be.visible')
        this.productName.should('contain' , name)
    }
    //czyszczenie koszyka 
    clearCart(){
        cy.visit('https://www.automationexercise.com/view_cart')
        cy.get('body').then($body => {
            if ($body.find('.cart_quantity_delete').length > 0) {
                cy.get('.cart_quantity_delete').click({multiple: true})
                cy.wait(1000)
        }
    })
    
        // Wróć na stronę główną
         cy.visit('https://www.automationexercise.com')
    }

}

export default new cartPage()