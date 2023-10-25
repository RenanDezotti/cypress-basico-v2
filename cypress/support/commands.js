
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Renan')
        cy.get('#lastName').type('Dezotti')
        cy.get('#email').type('renandezotti10@gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
})
