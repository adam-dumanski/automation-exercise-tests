class contactPage {
    // formularz kontaktowy z nav bar
    get contactUsLink() {
        return cy.get('.shop-menu [href="/contact_us"]')
    }
    // get in touch
    get getInTouch(){
        return cy.get('.contact-form .title')
    }
    // name na formularzu
    get nameInput(){
        return cy.get('[data-qa="name"]')
    }
    get emailInput(){
        return cy.get('[data-qa="email"]')
    }
    get subjectInput(){
        return cy.get('[data-qa="subject"]')
    }
    get messageInput(){
        return cy.get('[data-qa="message"]')
    }
    // selektor pliku
    get fileInput(){
        return cy.get('[name="upload_file"]')
    }
    // klikniecie submit
    get submitButton(){
        return cy.get('[data-qa="submit-button"]')
    }
    // sukces submit
    get successMessage(){
        return cy.get('.alert-success')
    }
    // przycisk home
    get homeButton(){
        return cy.get('.btn-success')
    }


    //METORY
    // przejscie do formularza kontaktowego
    navigateToContactUsForm() {
        this.contactUsLink.click()
    }
    //assercja get in tocuh form
    isGetInTouchMessage(){
        this.getInTouch.should('be.visible')
        this.getInTouch.should('have.text' , 'Get In Touch')
    }
    fillContacForm(fillForm){
        this.nameInput.type(fillForm.firstName)
        this.emailInput.type(fillForm.email)
        this.subjectInput.type(fillForm.subject)
        this.messageInput.type(fillForm.message)
    }
    uploadFile(filePath){
        this.fileInput.selectFile(filePath , { force: true })
    }
    pressSubmitButton(){
        this.submitButton.click()
    }
    displayedSuccessMessage(){
        this.successMessage.should('be.visible')
        this.successMessage.should('contain' , 'Success')
    }
    pressHomeButton(){
        this.homeButton.click()
    }

}

export default new contactPage()