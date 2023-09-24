describe('this is a Fixture test case',()=>{
    beforeEach('precondicion de ir a la pagina y llegar al formulario',()=>
    {
        cy.visit('https://demo.testim.io/')
       // cy.contains('Log in').click()

       cy.fixture("login_fixture").then((the)=>{
           cy.contains(the.loginButton.On).click()
           cy.url().should("contain","login")
       })
    })  

    it('US # | TC#1 : validar inicio exitoso de formulario', ()=>
    {

        cy.fixture("login_fixture").then((the)=>{
              cy.get(the.username.input)
              .type(the.username.data.valid)
              cy.get(the.password.input) 
              .type(the.password.data.valid)
              cy.get(the.Submitbutton).click()
              cy.contains(the.loginButton.Off).should("be.visible")
              
        })

    })

    it('US # | TC#2 : tratar de validar BR de characters especiales', ()=>
    {

        cy.fixture("login_fixture").then((the)=>{
              cy.get(the.username.input)
              .type(the.username.data.valid)
              cy.get(the.password.input) 
              .type(the.password.data.invalid)
              cy.get(the.Submitbutton).click()
              cy.contains(the.loginButton.Off).should("not.to.be.visible")
              
        })

    })

})