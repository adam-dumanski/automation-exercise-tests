import loginPage from '../../support/pages/loginPage'
import productPage from '../../support/pages/productsPage'
import cartPage from '../../support/pages/cartPage'
import checkoutPage from '../../support/pages/checkoutPage'

describe ('TESTY CHECKOUT', () => {
    beforeEach(() => {
        cy.clearAllSessionStorage()
        loginPage.visit()
        loginPage.goToLoginPage()
        loginPage.login('qa_adams_tests@mailsac.com' , 'ilUSzC&0szs&')
        cartPage.clearCart()
    })
    it('Test 1: "Pełny flow zakupów E2E"' , () => {
        productPage.addProductToCart(0)
        productPage.goToCartFromPopup()
        cartPage.clickProceedToCheckout()
        checkoutPage.shouldDeliveryAddresssBeVisible()
        checkoutPage.shouldBillingAddressBeVisible()
        checkoutPage.addComment(`
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
        large language ocean.`)
        checkoutPage.clickPlaceOrder()
        const userCard = {
            name: 'John Smith',
            cardNumber: '4242424242424242',
            cvc: '123',
            month: '12',
            year: '2030'
        }
        checkoutPage.fillPaymentDetails(userCard)
        checkoutPage.clickPayButton()
        checkoutPage.shouldShowSuccessMessage()
        checkoutPage.pressDowndloadInvoiceButton()
        checkoutPage.pressContinueButtonAtTheFinish()


        
    })
})
