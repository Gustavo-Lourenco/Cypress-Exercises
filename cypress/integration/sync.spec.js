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

    it('Deve fazer retrys ...', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novocampo').should('not.exist')
        cy.get('#novocampo').should('exist').type('funciona')  
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        // cy.get('#lista li')
        //    .find('span')
        //    .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do find Botão do DOM', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', {timeout:1000}).should('exist')
        //cy.get('#novoCampo').should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000) Bom evitar 
        //cy.get('#lista li span', {timeout:30000})
        //    .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('lista li span', {timeout:30000})
            .should('have.length', 1)
            .should('have.length', 2)
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => { 
            //Should fica sendo executado, enquanto o then espera a execução
            //Should retorna sempre o objeto que ele recebeu, portanto ignora o return
            //.should('have.length', 1)
            //console.log($el)
            expect($el).to.have.length(1)
            return 2
        }).and('eq', 2)
            .and('have.id', 'buttonListDOM')
    })

})