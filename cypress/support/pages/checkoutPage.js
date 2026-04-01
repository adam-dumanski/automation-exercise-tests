class checkoutPage {
    //sekcja adresu dostawy
    get deliveryAddress(){
        return cy.get('#address_delivery')
    }
    //sekcja adresu rozliczeniowego
    get billingAddress(){
        return cy.get('#address_invoice')
    }
    //lista zamówionych produktów
    get orderItems(){
        return cy.get('.cart_info tr')
    }
    //całkowita kwota
    get totalAmount(){
        return cy.get('.cart_total_price')
    }
    //komentarz do zamówienia
    get commentTextarea(){
        return cy.get('[name="message"]')
    }
    // button Place Order
    get placeOrderButton(){
        return cy.get('a[href="/payment"]')
    }
    //imię na karcie
    get nameOnCardInput() {
        return cy.get('[data-qa="name-on-card"]')
    }
    //numer karty
    get cardNumberInput(){
        return cy.get('[data-qa="card-number"]')
    }
    //kod cvc
    get cvcInput(){
        return cy.get('[data-qa="cvc"]')
    }
    // miesiac wygasniecia
    get expiryMonthInput(){
        return cy.get('[data-qa="expiry-month"]')
    }
    // rok wygasniecia
    get expiryYearInput() {
        return cy.get('[data-qa="expiry-year"]')
    }
    // button pay and confirm
    get payButton(){
        return cy.get('[data-qa="pay-button"]')
    }
    // wiadomosc o sukcesie
    get successMessage(){
        return cy.get('.col-sm-9 > p').contains('Congratulations')
    }
    //przycisk pobierania faktury
    get downloadInvoiceButton(){
        return cy.get('.check_out').contains('Download Invoice')
    }
    //przycisk kontynuuj
    get continueButton(){
        return cy.get('[data-qa="continue-button"]')
    }

    //METODY
    //dodaj komentarz do zamówienia
    addComment(text){
        this.commentTextarea.type(text)
    }
    //zloz zamowienie
    clickPlaceOrder(){
        this.placeOrderButton.click()
    }
    //wypełnij dane karty
    fillPaymentDetails(cardData){
        this.nameOnCardInput.type(cardData.name)
        this.cardNumberInput.type(cardData.cardNumber)
        this.cvcInput.type(cardData.cvc)
        this.expiryMonthInput.type(cardData.month)
        this.expiryYearInput.type(cardData.year)
    }
    // kliknij zapłać
    clickPayButton(){
        this.payButton.click()
    }
    // sprawdz czy zakończono powodzeniem
    shouldShowSuccessMessage(){
        this.successMessage.should('be.visible')
        this.successMessage.should('contain' , 'Your order has been confirmed!')
    }
    shouldDeliveryAddresssBeVisible(){
        this.deliveryAddress.should('be.visible')
        this.deliveryAddress.should('contain' , 'delivery address')
    }
    shouldBillingAddressBeVisible(){
        this.billingAddress.should('be.visible')
        this.billingAddress.should('contain' , 'billing address')
    }
    pressDowndloadInvoiceButton(){
        this.downloadInvoiceButton.click()
    }
    pressContinueButtonAtTheFinish(){
        this.continueButton.click()
    }
    


}

export default new checkoutPage()