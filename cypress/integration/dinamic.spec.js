/// <reference types = "cypress" />

describe('Dinamic tests', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {
        it(`Cadastro com comida ${food}`, () => {
            cy.get('#formNome').type('Gustavo')
            cy.get('#formSobrenome').type('Lourenço')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
    
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })

    it.only('Deve selecionar todos usando o each', () => {
        cy.get('#formNome').type('Gustavo')
        cy.get('#formSobrenome').type('Lourenço')
        cy.get(`[name=formSexo][value=M]`).click()

        //cy.get(`[name=formComidaFavorita]`).click({multiple: true})
        cy.get(`[name=formComidaFavorita]`).each($el => {
            if($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')
        //cy.get('#formCadastrar').click()
        //cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })

})