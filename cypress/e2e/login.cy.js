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

        LoginPage.enterUsername('Admin')
        LoginPage.enterPassword('Naty1234')
        LoginPage.clickLogin()

        cy.contains('Invalid credentials').should('be.visible')
    })

})
