import { navigateTo } from "../support/page_objects/navigationPage"

describe('Morressier Page Object',() =>{

    beforeEach('open application',()=>{
        cy.visit('/')
    })

    it('Page Navigattion',()=>{
        navigateTo.submissionPage()
        navigateTo.addFilter()
        navigateTo.peoplePage()
        
    })
})