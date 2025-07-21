describe('Vamos preencher corretamente os campos para abrir uma conta empresarial.', () => {
  it('Preencher corretamente os campos e avançar a tela', () => {
    cy.visit('https://saudemais.netlify.app/')
    cy.get('#abrir-conta').click();
    cy.get('#empresarial').click();
    cy.empresarial('Teste', '45.534.331/0001-40', 'Rua teste, 75', '1000', 'empresarial', 'Lucas Straub', 'teste@empresa.com', '2135354040')
    cy.get('.btn-submit').click()
  })
})