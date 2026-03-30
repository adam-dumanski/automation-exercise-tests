class LoginPage {
    //signup / login link
    get singupLoginLink() {
        return cy.get('[href="/login"]').contains(' Signup / Login')
    }
    // email login
    get loginEmailInput() {
        return cy.get('[data-qa="login-email"]')
    }
    // pass login
    get loginPasswordInput() {
        return cy.get('[data-qa="login-password"]')
    }
    // button login
    get loginButton() {
        return cy.get('[data-qa="login-button"]')
    }
    // error message
    get errorMessage(){
        return cy.get('[action="/login"] > p')
    }
    //logged in as
    get loggedInUser() {
        return cy.get('li').contains(' Logged in as')
    }
    //logout
    get logoutLink(){
        return cy.get('[href="/logout"]')
    }

    visit() {
        cy.visit('https://www.automationexercise.com/')
    }
    // strona logowania
    goToLoginPage() {
        this.singupLoginLink.click()
    }
    // podaj dane logowania
    login(email, password){
        this.loginEmailInput.type(email)
        this.loginPasswordInput.type(password)
    }
    // błąd jak złe hasło/login
    shouldShowError(message) {
        this.errorMessage.should('be.visible')
        this.errorMessage.should('contain' , message)
    }
    // sprawdz czy zalogowany
    shouldBeLoggedIn(username) {
        this.loggedInUser.should('contain' , `Logged in as ${username}`)
    }
    //wyloguj
    logout() {
        this.logoutLink.click()
    }
    shouldBeOnHomePage(){
        cy.url().should('eq' , 'https://www.automationexercise.com/')
    }
}

export default new LoginPage()