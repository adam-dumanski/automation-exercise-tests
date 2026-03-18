import loginPage from "../../support/pages/loginPage"
import signupPage from "../../support/pages/signupPage"

describe('Testy rejestracji',() => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.goToLoginPage()
    })
    it('Test 1: "Powinien zarejestrować nowego użytkownika"' , () => {
        const randomUser = `User_${Math.floor(Math.random() * 10)}`
        const uniqueEmail = `test_${Date.now()}@test.pl`
        signupPage.fillSignupForm(randomUser , uniqueEmail)
        signupPage.pressSignupButton()
        const userData = {
            title: 'Mr',
            password: 'Testowy123',
            days: '15',
            months: 'April',
            years: '1990',
            firstName: 'Jan',
            lastName: 'Kowalski',
            address: 'Marszałkowska 150 m.56',
            country: 'Australia',
            state: 'Mazovian',
            city: 'Warsaw',
            zipcode: '00-001',
            phoneNumber: '+48-789-789-789'
        }
        signupPage.fillAccountDetails(userData)
        signupPage.clickCreateAccount()
        signupPage.displayedMessageWithSuccess()
    })
    it('Test 2: "Powinien pokazać błąd przy istniejącym emailu"' , () => {
        const randomUser = `User_${Math.floor(Math.random() * 10)}`
        signupPage.fillSignupForm(radnomUser , 'test@test.com')
        signupPage.pressSignupButton()
        signupPage.emailIsAlreadyUsed()
    })
})