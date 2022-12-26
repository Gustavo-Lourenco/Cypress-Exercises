
import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTING).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', (conta) => {
cy.get(loc.CONTAS.NOME).type(conta)
cy.get(loc.CONTAS.BTN_SALVAR).click()
cy.xpath(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
})

Cypress.Commands.add('inserirContRepetida', (conta) => {
    cy.get(loc.CONTAS.NOME).type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.xpath(loc.MESSAGE).should('contain', 'Error')
    })