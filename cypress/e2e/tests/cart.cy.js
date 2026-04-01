import loginPage from "../../support/pages/loginPage"
import productsPage from "../../support/pages/productsPage"
import cartPage from "../../support/pages/cartPage"

describe ('TESTY KOSZYKA' , () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.goToLoginPage()
        loginPage.login('qa_adams_tests@mailsac.com' , 'ilUSzC&0szs&')
        cartPage.clearCart()
    
        // Wróć na stronę główną
         cy.visit('https://www.automationexercise.com')
    })
    it('Test 1: "Powinien pokazać dodany produkt w koszyku"' , () => {
        productsPage.addProductToCart(0)
        productsPage.goToCartFromPopup()
        cartPage.shouldContainProduct('Blue Top')
    })
    it('Test 2: "Powinien usunąć produkt z koszyka"' , () => {
        productsPage.addProductToCart(0)
        productsPage.goToCartFromPopup()
        cartPage.removeProduct(0)
        cartPage.shouldHaveProductCount(0)
    })
    it('Test 3: "Powinien dodać wiele produktów"' , () => {
        productsPage.hoverAndAddProduct(0)
        productsPage.pressButtonContinue()

        productsPage.hoverAndAddProduct(1)
        productsPage.pressButtonContinue()

        productsPage.hoverAndAddProduct(2)
        productsPage.goToCartFromPopup()

        cartPage.shouldHaveProductCount(3)
        cartPage.shouldContainProduct('Blue Top')
        cartPage.shouldContainProduct('Men Tshirt')
        cartPage.shouldContainProduct('Dress')
    })
})