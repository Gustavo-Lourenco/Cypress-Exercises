/// <reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Testes funcionais de uma aplicação real', () => {
    before(() => {
        cy.login('gl@gl.com', '131294')
    })

    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()
    })

    it('... Login', () => {
        
    })

    it('Inserir Conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta Teste')
    })

    it('Alterar conta', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME).clear().type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })

    it('Inserir Conta Repetida', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
    })

    it('Adicionar Movimentacao', () => {
        cy.get(loc.MOVIMENTACAO.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Teste')
        cy.get(loc.MOVIMENTACAO.VALOR).type('1001,00')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Gustavo')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENTACAO.BTN_CONTA_PAGA).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Movimentação inserida com sucesso')
    })

    it('Verifica o saldo', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.HOME.FN_XP_CONTA('Conta para saldo')).should('contain', 'Conta para saldo')
        cy.xpath(loc.HOME.FN_XP_SALDO('Conta para saldo', '534,00')).should('contain', '534,00')
        


        cy.get(loc.MENU.EXTRATO).click()
        

        cy.xpath(loc.EXTRATO.FN_XP_BTN_EDITAR('Movimentacao 1, calculo saldo')).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')

        cy.get(loc.MOVIMENTACAO.BTN_CONTA_PAGA).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Movimentação alterada com sucesso')
    })

    it('Elimina uma movimentação', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_BTN_EXCLUIR('Movimentacao para exclusao')).click()
        cy.xpath(loc.MESSAGE).should('contain', 'Movimentação removida com sucesso')

    })

})