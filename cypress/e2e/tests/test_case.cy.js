describe('US # : titulo de la user story',()=>{
    beforeEach('en este apartado se escriben las precondiciones de los casos de pruba',() =>
    {
        cy.visit('https://example.cypress.io')
        cy.get('[href="/commands/querying"]')
        .eq(2)
        .click()
    })
    it('US # | TC#1 : aqui va el nombre del otro caso de prueba', ()=>{
        cy.get('.query-btn')
        .click()
    })
    it('US # | TC#2 : aqui va el nombre del otro caso de prueba', ()=>{
        cy.get('.query-btn')
        .should('contain','Button')
    })
    it('US # | TC#2 : aqui va el nombre del otro caso de prueba', ()=>{
        cy.contains('Submit').click()
    })
})
