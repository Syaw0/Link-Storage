describe('Main Page', () => {

    beforeEach(()=>{
        cy.visit('/');
        cy.getByData("empty-create").click()
        cy.getByData("create-input").type("HELLO")
        cy.getByData("create-create").click()
    })

    context("NavBar" , ()=>{
        
        it("click on the setting then setting sec render" , ()=>{
            cy.getByData("nav-setting").click()
            cy.getByData("body-setting-delete").should("exist").contains("Delete All Storage")
        })

        it("click on the change storage and user direct to the starter page" ,()=>{
            cy.getByData("nav-change-storage").click()
            cy.getByData("choose-storage").should("exist").contains("Choose Your Storage")
        })

        it("user click on the fav and render fav section " , ()=>{
            cy.getByData("nav-setting").click()
            cy.getByData("nav-fav").click()
            cy.getByData("main-header").should("exist").contains("Favorite")
        })


        it('user click on the store name in nav and nav bar open (if closed)', () => {
            cy.getByData('nav-folder').as("folder").should("not.be.visible")
            cy.getByData("nav-storeName").click()
            cy.get("@folder").should("be.visible")
        });

        it('user click on the store name in nav and nav bar close (if open)', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-storeName").click()
            cy.get("[data-test='nav-folder']").as("folder").should("not.be.visible")
        });

        it('when user click on the folders they open ', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-folder").as("folder").click()
            cy.getByData("nav-folder-items").should("be.visible")
        });

        it('when user click on the folders they close (if open) ', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-folder").as("folder").click()
            cy.getByData("nav-folder").as("folder").click()
            cy.getByData("nav-folder-items").should("not.be.visible")
        });

        it('when user click on the files they open in the main', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-folder").as("folder").click()
            cy.getByData("nav-folder-items").click()
            cy.getByData("main-header").contains("File Ex")
        });


        it('when user right click on the middle nav toolbar showed', () => {
            cy.getByData("nav-middle").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).contains("Add Folder")
        });

    it('when user right click on the folders toolbar showed', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-folder").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).contains("Add Link File")
        });

        it('when user right click on the files toolbar showed', () => {
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-folder").click()
            cy.getByData("nav-folder-items").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).contains("Edit File Name")
        });


    })


    context('Main Section', () => {
        
        beforeEach(()=>{
            cy.getByData("nav-storeName").click()
            cy.getByData("nav-file").click()
        })

        it('when user click on the add link icon add section showed' , ()=>{
            cy.getByData("main-add-icon").click()
            cy.getByData("adding-head").should("be.visible").contains("Adding New Link")
        })

        it('when user right click on the links tooltip showed' , ()=>{
            cy.getByData("main-link").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).contains("Edit Link")
        })

        it('context on the link when user click on the edit link Editing section with those data render' , ()=>{
            cy.getByData("main-link").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).click()
            cy.getByData("editing-head").should("be.visible")
            cy.getByData("editing-title-input").invoke("val").should("eq" , "w3Code")
            
        })


        it('context on the link when user click on the delete Link and link will deleted' , ()=>{
            cy.getByData("main-link").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(1).click()
            cy.getByData("mian-link").should("not.exist")         
        })

        it("when user right click on the main body and tooltip will showed" , ()=>{
            cy.getByData("main").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).contains("Add Link")
        })

        it("click on the add link (main tooltip) and adding link showed" , ()=>{
            cy.getByData("main").rightclick()
            cy.getByData("context").should("be.visible").find("p").eq(0).click()
            cy.getByData("adding-head").should("be.visible")
        })

        it('setting section and when user click on the delete storage warn section displayed', () => {
            cy.getByData("nav-setting").click()
            cy.getByData("body-setting-delete").click()
            cy.getByData("warn-head").should("be.visible").contains("ARE YOU SURE??")
        });

    });



})