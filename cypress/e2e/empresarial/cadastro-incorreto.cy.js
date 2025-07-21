describe('Vamos preencher incorretamente os campos para abrir uma conta.', () => {
  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.visit('https://saudemais.netlify.app/');
    cy.get('#abrir-conta').click();
    cy.get('#empresarial').click();

    // Focar e tirar o foco dos campos para disparar validações
    ['#razaoSocial', '#cnpj', '#endereco', '#numFuncionarios', '#tipoPlano', '#nome', '#email', '#telefone'].forEach(field => {
      cy.clicaSai(field);
    });

    cy.get('.btn-submit').click();

    cy.mensagemErro([
      'O campo Razão Social não pode estar vazio.',
      'O CNPJ digitado não é válido.',
      'O campo Endereço não pode estar vazio.',
      'Informe o número de funcionários.',
      'Selecione o tipo de plano.',
      'O campo de nome não pode estar vazio.',
      'O campo de e-mail não pode estar vazio.',
      'O telefone deve ter 10 dígitos.'
    ]);

    cy.reload();
    cy.visit('https://saudemais.netlify.app/');
    cy.get('#abrir-conta').click();
    cy.get('#empresarial').click();
         
    cy.get('#cnpj').clear().type('00.000.000/0000-00');     
    cy.get('#numFuncionarios').clear().type('0');              

    cy.get('.btn-submit').click();

    cy.mensagemErro([
      'O CNPJ digitado não é válido.',
      'Deve ter pelo menos 1 funcionário.'
    ]);
  });
});