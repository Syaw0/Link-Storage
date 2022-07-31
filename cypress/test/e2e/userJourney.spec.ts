describe('user Journey ', () => {

    it("(User create , delete ,  get into store and modified the links" , ()=>{
        cy.visit('/');  


        //enter the storage
        cy.getByData("empty-create").should("exist").click()

        //creating new storage
        cy.getByData("create-head").should("exist")
        cy.getByData('create-input').type("SELinks");
        cy.getByData("create-create").click()

        ///is main render?
        cy.getByData("nav-storeName").should("exist").contains("SELinks")
        
        // change theme 
        cy.getByData("nav-setting").click()
        cy.getByData("main-setting-theme").click()
        cy.getByData('app').then($app =>{
            let cls = $app.attr("class")
            expect(cls).to.contain("dark-theme")
        });

        // get into folder and choose item
        cy.getByData("nav-storeName").click()
        cy.getByData("nav-folder").click()
        cy.getByData("nav-folder-items").click()
        cy.getByData("main-header").contains('File Ex')

        //add links
        cy.getByData("main-add-icon").click()
        cy.getByData("adding-head").should("exist").contains("Adding New Link")
        cy.getByData("adding-title-input").type("Cypress")
        cy.getByData("adding-url-input").type("Cypress.io")
        cy.getByData("adding-des-input").type("Cypress is best testing framework for web")
        cy.getByData("adding-add").click()
        cy.getByData("main-link").contains("Cypress")        

        //maybe user want to use right click to enter adding mod
        cy.getByData("main").rightclick()
        cy.getByData("context").find("p").eq(0).click()
        cy.getByData("adding-head").should("exist")
        cy.getByData("adding-title-input").type("Jest")
        cy.getByData("adding-url-input").type("jest.io")
        cy.getByData("adding-des-input").type("jest is best testing framework for  unit testing")
        cy.getByData("adding-add").click()
        cy.getByData("adding-head").should("not.exist")
        cy.getByData("main-link").should("have.length" , 2)


        //user change file and add another link
        cy.getByData("nav-file").click()
        cy.getByData("main-link").should("have.length" , 1) //first time we create a template for them...
        cy.getByData("main-add-icon").click()
        cy.getByData("adding-title-input").type("Github")
        cy.getByData("adding-url-input").type("github.co")
        cy.getByData("adding-des-input").type("github is hosting website that host your code and projects and its wonderful for cooperate...")
        cy.getByData("adding-add").click()
        cy.getByData("adding-head").should("not.exist")
        cy.getByData("main-link").should("have.length" , 2)


        //user navigate to the fav section and see nothing there
        cy.getByData("nav-fav").click()
        cy.getByData("main-header").contains("Favorite")
        cy.getByData("main-link").should("not.exist")

        //maybe user want edit links that its created
        cy.getByData("nav-file").click()
        cy.getByData("main-link").eq(1).rightclick()
        cy.getByData("context").find("p").eq(0).click()
        cy.getByData("editing-head").should("exist")
        cy.getByData("editing-url-input").type("m")
        cy.getByData("editing-edit").click()
        cy.getByData("main-link").eq(1).contains("github.com")

        //maybe user want edit another link in other file
        cy.getByData("nav-folder-items").click()
        cy.getByData("main-link").eq(1).rightclick()
        cy.getByData("context").find('p').eq(0).click()
        cy.getByData("editing-url-input").clear().type("jestjs.io")
        cy.getByData("editing-edit").click()
        cy.getByData("main-link").eq(1).contains("jestjs.io")

        //maybe user want delete some links
        cy.getByData("main-link").eq(0).rightclick()
        cy.getByData("context").find('p').eq(1).click()
        cy.getByData("main-link").should("have.length" , 1)


        //may be user want add another storage
        cy.getByData("nav-change-storage").click()
        cy.getByData('choose-storage').should("exist")
        cy.getByData("choose-create").click()
        cy.getByData("create-input").type("store2")
        cy.getByData("create-create").click()
        cy.getByData('nav-storeName').should('exist')

        //maybe user want delete storage

        cy.getByData("nav-setting").click()
        cy.getByData("body-setting-delete").click()
        cy.getByData("warn-head").should("exist")
        cy.getByData("warn-delete").click()
        cy.getByData("create-login").click()
        cy.getByData("choose-storage").should("exist")
        cy.getByData("choose-storage-holder").find("p").should("not.contain" , "store2")

        //user reload and check if exist its links
        cy.reload().wait(3000)
        cy.getByData("choose-storage-holder").contains("SELink").click()
        cy.getByData("nav-storeName").click()
        cy.getByData("nav-file").click()
        cy.getByData("main-link").contains("Github")


    })    

})
