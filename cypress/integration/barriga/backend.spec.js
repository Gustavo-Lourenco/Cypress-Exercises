/// <reference types = "cypress" />


describe('Testes funcionais de uma aplicação real', () => {
    
    let token
    
    before(() => {
        cy.getToken('gl@gl.com', '131294')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        cy.resetRest()
    })

    it('Criar conta', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: {Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta via REST'
            }
        }).as('response')

        cy.get('@response').then(res => {
           expect(res.status).to.be.equal(201)
           expect(res.body).to.have.property('id') 
           expect(res.body).to.have.property('nome', 'Conta via REST')
        })
    })

    it('Alterar conta', () => {
        
        cy.getContaID('Conta para movimentacoes')
        .then(contaId => {
            cy.request({
                url: `/contas/${contaId}`,
                method: 'PUT',
                headers: {Authorization: `JWT ${token}`},
                body: {
                    nome: 'Alterado via REST'
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 200 )
        
    })

    it('Inserir Conta Repetida', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: {Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(400) 
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
         })

    })

    it('Adicionar Movimentacao', () => {
        
        cy.getContaID('Conta para movimentacoes')
        .then(contaId => {
            cy.request({
                url: '/transacoes',
                method: 'POST',
                headers: {Authorization: `JWT ${token}`},
                body: {
                    conta_id: `${contaId}`,
                    data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: "Adicionado via REST",
                    envolvido: "GL",
                    status: true,
                    tipo: "REC",
                    valor: "100"
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
  
    })

    //then(res => console.log(res))

    it('Verifica o saldo', () => {
        cy.request({
            url: '/saldo',
            headers: {Authorization: `JWT ${token}`},
            method: 'GET'
        }).then(res => {
            let saldoConta = null
            res.body.forEach(c => {
                if(c.conta === 'Conta para saldo') saldoConta = c.saldo
            })
            expect(saldoConta).to.be.equal('534.00')
        })

        cy.request({
            method: 'GET',
            url: '/transacoes',
            headers: {Authorization: `JWT ${token}`},
            qs: {
                descricao: 'Movimentacao 1, calculo saldo'
            }
        }).then(res => {
            cy.request({
                url: `/transacoes/${res.body[0].id}`,
                method: 'PUT',
                headers: {Authorization: `JWT ${token}`},
                body: {
                    status: true,
                    data_transacao: Cypress.moment(res.body[0].data_transacao).format('DD/MM/YYYY'),
                    data_pagamento: Cypress.moment(res.body[0].data_transacao).format('DD/MM/YYYY'),
                    descricao: res.body[0].descricao,
                    envolvido: res.body[0].envolvido,
                    valor: res.body[0].valor,
                    conta_id: res.body[0].conta_id
                }
            }).its('status').should('be.equal', 200)
        })

        
        cy.request({
            url: '/saldo',
            headers: {Authorization: `JWT ${token}`},
            method: 'GET'
        }).then(res => {
            let saldoConta = null
            res.body.forEach(c => {
                if(c.conta === 'Conta para saldo') saldoConta = c.saldo
            })
            expect(saldoConta).to.be.equal('4034.00')
        })

          
    })

    it('Elimina uma movimentação', () => {
        
        cy.request({
            url: '/transacoes',
            headers: {Authorization: `JWT ${token}`},
            method: 'GET',
            qs: { descricao: 'Movimentacao para exclusao' }
        }).then(res => {
            cy.request({
                url: `/transacoes/${res.body[0].id}`,
                method: 'DELETE',
                headers: {Authorization: `JWT ${token}`}
            }).its('status').should('be.equal', 204)
        })

    })


})