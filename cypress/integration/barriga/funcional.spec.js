/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Testes funcionais de uma aplicação real', () => {
    before(() => {
        cy.login('gl@gl.com', '131294')
        cy.resetApp()
    })

    it('... Login', () => {
        
    })

    it('Inserir Conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta Teste 6')
    })

    it('Alterar conta', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME).clear().type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })

    it('Inserir Conta Repetida', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta Alterada')
    })

    it.only('Adicionar Movimentacao', () => {
        cy.get(loc.MOVIMENTACAO.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Teste')
        cy.get(loc.MOVIMENTACAO.VALOR).type('100,00')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Gustavo')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Movimentação inserida com sucesso')
    })

})