// describe('Vamos preencher incorretamente os campos para abrir uma conta.', () => {
//   it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
//     cy.visit('https://saudemais.netlify.app/')
//     cy.get('#abrir-conta').click();
//     cy.get('#nome').focus().blur();
//     cy.get('#cpf').focus().blur();
//     cy.get('#email').focus().blur();
//     cy.get('#data').focus().blur();
//     cy.get('#estado').focus().blur();

//     cy.get('.btn-submit').click()

//     cy.contains('O campo de nome não pode estar vazio.').should('be.visible');
//     cy.contains('O CPF digitado não existe.').should('be.visible');
//     cy.contains('O campo de e-mail não pode estar vazio.').should('be.visible'); 
//     cy.contains('O celular deve ter 11 dígitos.').should('be.visible');
//     cy.contains('O campo de data de nascimento não pode estar vazio.').should('be.visible');
//     cy.contains('Selecione um estado.').should('be.visible');
    
//     cy.reload()
//     cy.visit('https://saudemais.netlify.app/')
//     cy.get('#abrir-conta').click();
//     cy.get('#nome').clear().type('12345');              
//     cy.get('#email').clear().type('email_invalido');     
//     cy.get('#celular').clear().type('123');              
//     cy.get('#data').clear().type('2010-01-01');          
//     cy.get('#estado').focus().blur();  
//     cy.get('#data').clear().type('2010-01-01'); 
//     cy.get('.btn-submit').click();

//     cy.contains('O campo de nome não pode estar vazio.').should('be.visible');
//     cy.contains('O CPF digitado não existe.').should('be.visible');
//     cy.contains('Por favor, preencha um email válido.').should('be.visible'); 
//     cy.contains('O celular deve ter 11 dígitos.').should('be.visible');
//     cy.contains('Você deve ser maior que 18 anos para se cadastrar.').should('be.visible');
//     cy.contains('Selecione um estado.').should('be.visible');
// })
// })

describe('Vamos preencher incorretamente os campos para abrir uma conta.', () => {
  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.visit('https://saudemais.netlify.app/');
    cy.get('#abrir-conta').click();

    // Focar e tirar o foco dos campos para disparar validações
    ['#nome', '#cpf', '#email', '#data', '#estado'].forEach(field => {
      cy.clicaSai(field);
    });

    cy.get('.btn-submit').click();

    cy.mensagemErro([
      'O campo de nome não pode estar vazio.',
      'O CPF digitado não existe.',
      'O campo de e-mail não pode estar vazio.',
      'O celular deve ter 11 dígitos.',
      'O campo de data de nascimento não pode estar vazio.',
      'Selecione um estado.'
    ]);

    cy.reload();
    cy.visit('https://saudemais.netlify.app/');
    cy.get('#abrir-conta').click();

    cy.get('#nome').clear().type('12345');              
    cy.get('#email').clear().type('email_invalido');     
    cy.get('#celular').clear().type('123');              
    cy.get('#data').clear().type('2010-01-01');          
    cy.clicaSai('#estado');

    cy.get('.btn-submit').click();

    cy.mensagemErro([
      'O campo de nome não pode estar vazio.',
      'O CPF digitado não existe.',
      'Por favor, preencha um email válido.',
      'O celular deve ter 11 dígitos.',
      'Você deve ser maior que 18 anos para se cadastrar.',
      'Selecione um estado.'
    ]);
  });
});
