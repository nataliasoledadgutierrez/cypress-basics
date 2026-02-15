describe('uso_de_cy.get_en_el_DOM', () => {

  beforeEach(() => {
    cy.visit('https://www.google.com/')

    // Aceptar cookies si el banner está visible (puede no aparecer si ya se aceptó)
    cy.get('body').then(($body) => {
      let btn = $body.find('.QS5gu.sy4vM').first()
      if (!btn.length) {
        btn = $body.find('button').filter((_, el) => /aceptar todo|accept all|aceptar/i.test(el.innerText)).first()
      }
      if (btn.length) {
        cy.wrap(btn).click()
      }
    })
  })

  it('escribe Roma en la barra de búsqueda de Google', () => {
    // Selector más estable para la barra de búsqueda
    cy.get('textarea[name="q"], input[name="q"]').first()
      .should('be.visible')
      .type('Roma{enter}')

    // Verificar que la búsqueda se realizó (aparecen resultados)
    cy.url().should('include', 'google.com/search')
    cy.contains('Roma', { timeout: 10000 }).should('be.visible')
  })

  it('verificar que el botón Buscar esté visible', () => {
    // El botón está en un panel que solo se muestra al interactuar con la búsqueda
    cy.get('textarea[name="q"], input[name="q"]').first().click().type('Roma')
    cy.get('input[name="btnK"], input[value="Buscar con Google"], input[type="submit"]', { timeout: 8000 })
      .first()
      .should('be.visible')
  })

  it('encontrar barra de búsqueda de google', () => {
    cy.get('textarea[name="q"], input[name="q"], .RNNXgb')
      .first()
      .should('be.visible')
  })

  it('escribir en el buscador', () => {
    cy.get('textarea[name="q"], input[name="q"]')
      .first()
      .should('be.visible')
      .clear()
      .type('Roma{enter}')
  })
})
