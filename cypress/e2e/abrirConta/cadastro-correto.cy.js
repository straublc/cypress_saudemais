describe('Vamos preencher corretamente os campos para abrir uma conta.', () => {
  it('Preencher corretamente os campos e avançar a tela', () => {
    cy.visit('https://saudemais.netlify.app/')
    cy.get('#abrir-conta').click();
    cy.abrirconta('Lucas Straub', '174.326.190-00', 'lucas@teste.com', '21976011895', '2002-04-05', 'RJ')
    cy.get('.btn-submit').click()
  })
})