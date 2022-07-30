describe('Floating section (editing , adding)', () => {

    beforeEach(()=>{
        cy.visit('/');
        cy.getByData("empty-create").click()
        cy.getByData("create-input").type("HELLO")
        cy.getByData("create-create").click()
        cy.getByData("nav-storeName").click()
        cy.getByData("nav-file").click()
        
    })

    context("Adding" , ()=>{

        beforeEach(()=>{
            cy.getByData("main-add-icon").click()
        })

        it('adding links successfully', () => {
            cy.getByData("adding-title-input").type("cypress")
            cy.getByData("adding-url-input").type("https://www.cypress.io")
            cy.getByData("adding-des-input").type("cypress is e2e testing framework for web")
            cy.getByData("adding-add").click()
            cy.getByData("main").contains("cypress")
        });

        it("in the adding section when click on the cancel adding mode closed" , ()=>{
            cy.getByData("adding-cancel").click()
            cy.getByData("adding-head").should("not.exist")
        })

        it("user submit a empty string" , ()=>{
            cy.getByData("adding-add").click()
            cy.getByData("adding-error").should("be.visible").contains("inputs must have a value!")
        })


    })


    context('Editing', () => {

        beforeEach(()=>{
            cy.getByData("main-link").rightclick().getByData("context").find("p").eq(0).click()
        })

        it('edit link successfully', () => {
            cy.getByData('editing-title-input').clear().type("HELLO DEAR");
            cy.getByData('editing-url-input').clear().type("Changed Url");
            cy.getByData("editing-edit").click()
            cy.getByData('main-link').contains("HELLO DEAR")
        });

        it('user click on the cancel button', () => {
            cy.getByData('editing-title-input').clear().type("HELLO DEAR");
            cy.getByData("editing-cancel").click()
            cy.getByData('main-link').contains("w3Code")
            cy.getByData("editing-head").should("not.exist")
        });

        it('user submit a invalid inputs (empty)', () => {
            cy.getByData('editing-title-input').clear()
            cy.getByData('editing-url-input').clear()
            cy.getByData("editing-edit").click()
            cy.getByData("editing-error").should("exist").contains("inputs must have a value!")
        });

    });


    context('Warn Zone', () => {
        
        beforeEach(()=>{
            cy.getByData("nav-setting").click()
            cy.getByData("body-setting-delete").click()
        })

        it("canceling a deletion and warn zone dissipare" , ()=>{
            cy.getByData("warn-cancel").click()
            cy.getByData("warn-head").should('not.exist')
        })

        it("Deleting a whole storage by clicking on the delete" , ()=>{
            cy.getByData("warn-delete").click()
            cy.getByData("warn-head").should('not.exist')
            cy.getByData("create-head").should("exist").wait(400)
            cy.wait(30).should(()=>{
                
                expect(localStorage).have.length(0)
            })
        })


    });



})