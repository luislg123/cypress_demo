describe('this is a User Story',()=>{
    beforeEach('precondicion de ir a la pagina y llenar al formulario',()=>
    {
        cy.visit('https://demo.testim.io/')
        cy.contains('Log in').click()
        cy.url().should("contain","login")
    })

    it('US # | TC#1 : validar inicio exitoso de formulario', ()=>
    {
        cy.get('[tabindex="1"]')//seleccion de username
          .type("John")

        cy.get("[tabindex='2']")//seleccion de password
          .type("Admin123.")
          
        cy.get("[tabindex='3']")//seleccion del boton submit 
          .click()

        cy.contains("Hello, John").should("be.visible")  
    }) 

})
