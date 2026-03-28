import loginPage from "../../support/pages/loginPage"
import productsPage from "../../support/pages/productsPage"

describe('TESTY PRODUKTÓW' , () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('Test 1: "Powinien wyświetlić listę produktów"', () => {
        productsPage.goToProducts()
        productsPage.isProductListVisible()
        productsPage.isProductListGreaterThanOne(0)
        productsPage.isProductListGreaterThanOne(20)
    })
    it('Test 2: "Powinien wyszukać produkt"' , () => {
        productsPage.goToProducts()
        productsPage.searchProduct('shirt')
        productsPage.pressSearchButton()
        productsPage.isProductListGreaterThanOne(0)

    })
    it('Test 3: "Powinien dodać produkt do koszyka"' , () => {
        productsPage.goToProducts()
        productsPage.hoveOverProduct(0)
        productsPage.addProductToCart(0)
        productsPage.displayedPopupAdded()
        productsPage.goToCartFromPopup()
        cy.url().should('contain' , 'view_cart')
    })
})