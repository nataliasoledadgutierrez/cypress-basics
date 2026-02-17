describe('Locators', () => {
    
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


    it('Type of locators', () => {
        
        //Localizador por tagname
        cy.get('textarea')

        //Localizador por clase (class)
        cy.get('.gLFyf')

        //Localizar por atrubuto (attribute)
        cy.get('[maxlength]')

        //localizar por atrubuto y su valor (attribute and value)
        cy.get('[maxlength="2048"]')

        //Localizador por id
        cy.get('#APjFqb')

        //Combinar localizadores
        cy.get('textarea[maxlength="2048"].gLFyf#APjFqb')
        
      })
  })
