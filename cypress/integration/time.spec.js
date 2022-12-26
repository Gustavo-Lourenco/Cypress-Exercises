/// <reference types = "cypress" />

describe('Dinamic tests', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
        cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '07/11/2019')

        //cy.clock()
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '07/11/2019')

        const dt = new Date(2022, 3 , 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2022')
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        //cy.get('#resultado > span').should('contain', '16720')
        //cy.get('#resultado > span').invoke('text').should('gt', 16720167201672016720 )

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(1000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 1000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
    })
})