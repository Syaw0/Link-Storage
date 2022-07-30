describe('starter Page', () => {


    context("user Has Storage " , ()=>{

        beforeEach(()=>{
            localStorage.setItem("Hello" , "")
            cy.visit('/').wait(1000);
        })

        it("user have storage on its localStorage" , ()=>{
            localStorage.setItem("Hello" , "")
            cy.reload(true)
            cy.getByData("choose-storage").should("exist").contains("Choose Your Storage")
            cy.getByData("choose-item").contains("Hello").should("exist")
    
        })
    
        it('if you have storage button get into other storage in create section displayed', () => {
            localStorage.setItem("Hello" , "")
            cy.getByData("choose-create").click()
            cy.getByData("create-head").contains("What is Your Store Name?")
    
        });
    
        it("you in create section and click on the get into exist storage" , ()=>{
            localStorage.setItem("Hello" , "")
            cy.getByData("choose-create").click()
            cy.getByData("create-login").click()
            cy.getByData("choose-item").contains("Hello").should("exist")
        })
        
        it('user create a storage with existing name ', () => {
            localStorage.setItem("Hello" , "Hello")
            cy.getByData("choose-create").click()
            cy.getByData("create-input").type("Hello")
            cy.getByData("create-create").click()
            cy.getByData("create-error").should("exist").contains("Storage Name Exist Try Another Name !")
        });

    })



    context('user haven`t any storage', () => {

        beforeEach(()=>{
            cy.clearLocalStorage()
            cy.visit('/');
        })



        it("user haven`t any storage in localStorage empty sec render and when click on the create ,create sec render", ()=>{
            cy.clearLocalStorage()
            cy.getByData("empty-warn").contains("You do not have storage space!").should("exist")
            cy.getByData("empty-create").click()
            cy.getByData("create-head").contains("What is Your Store Name?")
        })
    
    
        it("users create a new storage successfully" , ()=>{
            cy.getByData("empty-create").click()
            cy.getByData("create-input").type("Hello")
            cy.getByData("create-create").click()
            cy.getByData("nav-storeName").should("exist").contains("Hello")
        })
    
    
        it('user create a storage with empty string', () => {
            cy.getByData("empty-create").click()
            cy.getByData("create-create").click()
            cy.getByData("create-error").should("exist").contains("Storage Name must Have Name!")
        });
        
    });



})