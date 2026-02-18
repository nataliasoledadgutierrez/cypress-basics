import LoginPage from '../pages/LoginPage'

describe('Login Flow - OrangeHRM', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login with valid credentials', () => {

    cy.intercept('POST', '**/auth/**').as('loginRequest')

    LoginPage.enterUsername('Admin')
    LoginPage.enterPassword('admin123')
    LoginPage.clickLogin()

    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 302)

    cy.url().should('include', '/dashboard')

    cy.get('.oxd-userdropdown-name')
      .should('be.visible')
      .and('not.be.empty')

  })

  it('should login with invalid password', () => {

    cy.intercept('POST', '**/auth/**').as('loginRequest')

    LoginPage.enterUsername('Admin')
    LoginPage.enterPassword('Naty1234')
    LoginPage.clickLogin()

    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 302)

    cy.url().should('include', '/auth/login')

    cy.contains('Invalid credentials')
      .should('be.visible')

  })

})
