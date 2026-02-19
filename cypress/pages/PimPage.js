class PimPage {
    clickPimMenu() {
        cy.contains('span', 'PIM').click()
    }
    clickAddEmployee() {
        cy.contains('button', 'Add').click()
      }
      
}
export default new PimPage()