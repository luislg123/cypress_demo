describe('US # : chequeo de boton',()=>{
    beforeEach('en este apartado se escriben las precondiciones de los casos de pruba',() =>
    {
        cy.visit('https://example.cypress.io')
        cy.get('[href="/commands/querying"]')
        .eq(2)
        .click()
    })

    it('caso de prueba numero 1',() =>
    {
        cy.get('#query-btn')
        .click()
    })

    it('caso de prueba numero 2',() =>
    {
        cy.get('.query-btn')
        .click()
        .should('contain','Button')
    })

    it('caso de prueba numero 3',() =>
    {
        cy.contains('Submit').click()
    })

})
