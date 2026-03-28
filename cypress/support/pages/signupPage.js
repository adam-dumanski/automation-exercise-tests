class signupPage {
    // rejestracja imie
    get signupNameInput() {
        return cy.get('[data-qa="signup-name"]')
    }
    // rejestracja email
    get signupEmailInput () {
        return cy.get('[data-qa="signup-email"]')
    }
    // rejestracja button signup
    get signupButton () {
        return cy.get('[data-qa="signup-button"]')
    }
    //error message jak email zajęty
    get errorMessage() {
        return cy.get('[action="/signup"] > p')
    }
    //FORMULARZ
    //radio button Mr
    get titleMrRadio(){
        return cy.get('[for="id_gender1"] > [data-qa="title"]')
    }
    // radio button Mrs
    get titleMrsRadio() {
        return cy.get('[for="id_gender2"] > [data-qa="title"]')
    }
    // password
    get passwordInput() {
        return cy.get('[data-qa="password"]')
    }
    // dzien urodzin
    get daysDropdown() {
        return cy.get('[data-qa="days"]')
    }
    // miesiąc urodzin
    get monthsDropdown() {
        return cy.get('[data-qa="months"]')
    }
    // rok urodzin
    get yearsDropdown() {
        return cy.get('[data-qa="years"]')
    }
    // imie
    get firstNameInput() {
        return cy.get('[data-qa="first_name"]')
    }
    // nazwisko
    get lastNameInput() {
        return cy.get('[data-qa="last_name"]')
    }
    // adres
    get addressInput() {
        return cy.get('[data-qa="address"]')
    }
    // kraj
    get countryDropdown() {
        return cy.get('[data-qa="country"]')
    }
    // stan
    get stateInput() {
        return cy.get('[data-qa="state"]')
    }
    // miasto
    get cityInput() {
        return cy.get('[data-qa="city"]')
    }
    // kod pocztowy
    get zipcodeInput() {
        return cy.get('[data-qa="zipcode"]')
    }
    // numer telefonu
    get mobileNumberInput() {
        return cy.get('[data-qa="mobile_number"]')
    }
    // button create account
    get createAccountButton() {
        return cy.get('[data-qa="create-account"]')
    }
    // KONTO UTWORZONE
    // sukces
    get accountCreatedMessage() {
        return cy.get('[data-qa="account-created"]')
    }
    // button continue
    get continueButton() {
        return cy.get('[data-qa="continue-button"]')
    }
    // METODY
    // krok pierwszy
    fillSignupForm(name, email){
        this.signupNameInput.type(name)
        this.signupEmailInput.type(email)
    }
    pressSignupButton(){
        this.signupButton.click()
    }
    fillAccountDetails(userData){
        if (userData.title === 'Mr') {
            this.titleMrRadio.click()
        } else {
            this.titleMrsRadio.click()
        }
        this.passwordInput.type(userData.password)
        this.daysDropdown.select(userData.days)
        this.monthsDropdown.select(userData.months)
        this.yearsDropdown.select(userData.years)
        this.firstNameInput.type(userData.firstName)
        this.lastNameInput.type(userData.lastName)
        this.addressInput.type(userData.address)
        this.countryDropdown.select(userData.country)
        this.stateInput.type(userData.state)
        this.cityInput.type(userData.city)
        this.zipcodeInput.type(userData.zipcode)
        this.mobileNumberInput.type(userData.phoneNumber)

    }
    clickCreateAccount(){
        this.createAccountButton.click()
    }
    displayedMessageWithSuccess(){
        this.accountCreatedMessage.should('be.visible')
        this.accountCreatedMessage.should('have.text' , 'Account Created!')
    }

    emailIsAlreadyUsed(){
        this.errorMessage.should('be.visible')
        this.errorMessage.should('have.text' , 'Email Address already exist!')
    }
    
}

export default new signupPage()