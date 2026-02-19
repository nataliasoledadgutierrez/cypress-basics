class AddEmployeePage {

    enterFirstName(firstName) {
        cy.get('input[name="firstName"]').clear().type(firstName)
    }
    enterLastName(lastName) {
        cy.get('input[name="lastName"]').clear().type(lastName)
    }
    clickSave() {
        cy.get('button[type="submit"]').click()
    }
    enterEmployeeId(employeeId) {
        cy.contains('label', 'Employee Id')
          .parent()
          .parent()
          .find('input')
          .clear()
          .type(employeeId)
      }
      clickSave() {
        cy.contains('button', 'Save').click()
      }
}
export default new AddEmployeePage()