import loginPage from '../../support/pages/loginPage'

describe ('TESTY LOGIN' , () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.goToLoginPage()
    })
    it('Test 1: "Powinien zalogować użytkownika z poprawnymi danymi"' , () => {
        loginPage.login('qa_adams_tests@mailsac.com' , 'ilUSzC&0szs&')
        loginPage.loginButton.click()
        loginPage.shouldBeLoggedIn('Adam')
    })

    it('Test 2: "Powinien pokazać błąd przy złych danych"' , () => {
        loginPage.login('test@twst.pl' , '123456789')
        loginPage.loginButton.click()
        loginPage.shouldShowError('Your email or password is incorrect!')
    })
    it('Test 3: "Powinien wylogować użytkownika"' , () => {
        loginPage.login('qa_adams_tests@mailsac.com' , 'ilUSzC&0szs&')
        loginPage.loginButton.click()
        loginPage.logout()
        cy.url().should('contain' , 'login')
    })
})