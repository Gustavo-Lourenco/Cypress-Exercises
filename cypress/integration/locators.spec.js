/// <reference types = "cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('using jquery selector', () => {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input')
        cy.get('table#tabelaUsuarios tbody > tr:ep(0) td:nth-child(3) > input').click()
        cy.get("[onclick*='Francisco']")
    })

    it('using xpath', () => {
        cy.xpath('//input')
    })

})