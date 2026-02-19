import PimPage from '../pages/PimPage'
import AddEmployeePage from '../pages/AddEmployeePage'
import LoginPage from '../pages/LoginPage'

describe('Create Employee Flow - OrangeHRM', () => {

    beforeEach(() => {
      LoginPage.visit()
      LoginPage.enterUsername('Admin')
      LoginPage.enterPassword('admin123')
      LoginPage.clickLogin()
  
      cy.url().should('include', '/dashboard')
    })
  
    it('should create employee successfully', () => {
  
      const uniqueId = Date.now().toString().slice(-5)
      const firstName = `QA_AUTO_${uniqueId}`
      const lastName = `E2E_${uniqueId}`
      const employeeId = `EMP${uniqueId}`
  
      PimPage.clickPimMenu()
      PimPage.clickAddEmployee()
  
      AddEmployeePage.enterFirstName(firstName)
      AddEmployeePage.enterLastName(lastName)
      AddEmployeePage.enterEmployeeId(employeeId)
  
      AddEmployeePage.clickSave()
  
      cy.contains(firstName).should('be.visible')
  
    })
  
  })