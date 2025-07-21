
Cypress.Commands.add('abrirconta', (nome, cpf, email, celular, data, estado) => { 
    cy.get('#nome').type(nome);
    cy.get('#cpf').type(cpf);
    cy.get('#email').type(email);
    cy.get('#celular').type(celular);
    cy.get('#data').type(data);
    cy.get('#estado').select(estado);
})

Cypress.Commands.add('clicaSai', (selector) => {
  cy.get(selector).focus().blur();
});

Cypress.Commands.add('mensagemErro', (messages) => {
  messages.forEach(msg => {
    cy.contains(msg).should('be.visible');
  });
});

Cypress.Commands.add('empresarial', (razao, cnpj, endereco, qtd, tipo, nome, email, telefone) => { 
    cy.get('#razaoSocial').type(razao);
    cy.get('#cnpj').type(cnpj);
    cy.get('#endereco').type(endereco);
    cy.get('#numFuncionarios').type(qtd);
    cy.get('#tipoPlano').select(tipo);
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#telefone').type(telefone);
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })