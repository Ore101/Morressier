

export class NavigationPage{



       submissionPage(){
        cy.contains('Submissions').click()
        
        
    }

        addFilter(){
           cy.contains('Add filter').click()
           cy.get('#keywordsbh-content').click({force:true})
           cy.get('[type="checkbox"]').eq(0).click({force:true})
        }

        peoplePage(){
            cy.contains('People').click({force:true})
            cy.contains('Speakers').click({force:true})
        }

        peoplePage(){
            cy.contains('People').click({force:true})
            cy.contains('Authors').click({force:true})
        }

        peoplePage(){
            cy.contains('People').click({force:true})
            cy.contains('Delegates').click({force:true})
        }

}

export const navigateTo = new NavigationPage()