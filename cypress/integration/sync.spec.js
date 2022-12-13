/// <reference types = "cypress" />

describe('Espertas ...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#buttonDelay')
            .click()
            .type('Funciona')
    })

})