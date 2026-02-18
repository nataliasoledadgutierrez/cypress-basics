import LoginPage from '../pages/LoginPage'

describe('Login Flow - OrangeHRM', () => {

    beforeEach(() => {
        LoginPage.visit()
    })
    
    it('should login with valid credentials', () => {

        LoginPage.enterUsername('Admin')
        LoginPage.enterPassword('admin123')
        LoginPage.clickLogin()

        cy.url().should('include', '/dashboard')
    })

    it('should login with invalid password', () => {

        cy.intercept('POST', '**/auth/**').as('loginRequest')

        LoginPage.enterUsername('Admin')
        LoginPage.enterPassword('Naty1234')
        LoginPage.clickLogin()

        /*cy.wait('@loginRequest').its('response.statusCode').should('eq', 302)

        cy.wait('@loginRequest').then((interception) => {
            console.log(interception)
          })*/
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302)
            console.log(interception)
        })
              
          

        cy.contains('Invalid credentials').should('be.visible')
    })

})
