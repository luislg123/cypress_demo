describe('this is a test case',()=>{
    beforeEach('precondicion de ir a la pagina y llegar al formulario',()=>
    {
        cy.visit('https://demo.testim.io/')
        cy.contains('Log in').click()
        cy.url().should("contain","login")
    })

    it('US # | TC#1 : validar inicio exitoso de formulario', ()=>
    {
        cy.get("[type='text']").eq(4)
          .type("John")
        cy.get("[type='password']")
          .type("Admin123.")
        cy.get("button[type='submit']")  
          .click()

        cy.contains("Hello, John").should("be.visible")  
    })
    it('US # | TC#1 : validar inicio exitoso de formulario', ()=>
    {
        cy.get("[type='text']").eq(4)
          .type("LUIS123456789")
        cy.get("[type='password']")
          .type("Admin")
        cy.get("button[type='submit']")  
          .click()

        cy.contains("Hello, John").should("not.to.be.visible") 
    })

})
