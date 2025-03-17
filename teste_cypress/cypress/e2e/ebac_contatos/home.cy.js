/// <reference types="cypress" />

describe('Componentes da Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve carregar todos os componentes', () => {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve inserir um novo contato', () => {
        cy.get('[type="text"]').type('Paulo Silva')
        cy.get('[type="email"]').type('pauloSilva@gmail.com')
        cy.get('[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
        expect(cy.get('.contato').should('have.length', 4))
    })

    it('Deve editar o nome do novo contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Diogo Nogueira')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('diogoonogueira@hotmail.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('11 87654321')
        cy.get('.alterar').click()
    })

    
    it('Deve apagar o novo contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        expect(cy.get('.contato').should('have.length', 3))
    })
})