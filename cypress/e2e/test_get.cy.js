describe('uso_de_cy.get_en_el_DOM', () => {

    it('escribe Roma en la barra de búsqueda de Google', () => {
  
      cy.visit('https://www.google.com/')
  
      // Aceptar cookies
      cy.get('.QS5gu.sy4vM')
        .first()
        .click()
  
      // Escribir en el buscador
      cy.get('textarea[name="q"]')
        .type('Roma{enter}')
  
      // Verificar que el botón Buscar esté visible
      cy.get('.gNO89b')
        .should('be.enabled')
  
    })
  
  })
  