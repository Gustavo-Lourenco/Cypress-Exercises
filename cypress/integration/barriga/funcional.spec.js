/// <reference types = "cypress" />

describe('Testes funcionais de uma aplicação real', () => {
    before(() => {
        cy.visit('http://barrigareact.wcaquino.me')
        cy.get('[data-test=email]').type('gl@gl.com')
        cy.get('[data-test=passwd]').type('131294')
        cy.get('.btn').click()
        cy.xpath("//div[@id='toast-container']").should('contain', 'Bem vindo')
    })

    it('... Login', () => {
        
    })

    it('Inserir Conta', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta Teste 2')
        cy.get('.btn').click()
        cy.xpath("//div[@id='toast-container']").should('contain', 'Conta inserida com sucesso!')
    })

    it('Alterar conta', () => {
        cy.xpath("//table[@class='table']//tr[contains(. , 'Conta de Teste')]//i[@class='far fa-edit']").click()
        cy.get('[data-test=nome]').clear().type('Conta Alterada')
        cy.get('.btn').click()
        cy.xpath("//div[@id='toast-container']").should('contain', 'Conta atualizada com sucesso!')
    })

})