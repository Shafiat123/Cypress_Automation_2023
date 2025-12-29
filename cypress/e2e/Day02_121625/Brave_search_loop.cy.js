
describe("Brave search functionality with loop", () => {


    let keywords = {}
    keywords.push("JavaScript")
    keywords.push("TyoeScript")
    keywords.push("Cypress Automation Framework")
    

    it("Search url and verify the url contains", () => {
        cy.visit("https://search.brave.com/");
        cy.get('[id="searchbox"]').type("Cypress Automation{enter}");
        cy.url().should("contain", "Cypress+Automation");
    } )

})
