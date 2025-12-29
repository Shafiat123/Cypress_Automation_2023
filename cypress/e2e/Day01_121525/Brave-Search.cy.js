import { result } from "lodash";


//initialize the varriable to call on test 2
let currenturl;
//describe suit represents what module/test suite we are creating
describe("Brave Search Test Suite", () => {

    it("Search for a keyword & verify the url", () => {
        // Visit Brave Search homepage
        cy.visit("https://search.brave.com/");

        //write a keyword in the search input field
        cy.get('[id="searchbox"]').type("Cypress Automation{enter}");

        //capture the current url and verify it contains the Cypress Automation keyword
        cy.url().should("contain", "Cypress+Automation");

        //store the current url in a variable to use in test 2
        cy.url().then((url) => {
            currenturl = url;
            cy.log("Current URL is: " + currenturl);
                });
        })// End of test 1

    it("click more contents and  verify additional contents are visible", () => {
        cy.visit(currenturl);
        cy.get('[id="llm-show-more-button"]').click();
        //verify if the content has "Cypress is a frontend test automation tool and open-source framework designed" text
        cy.get('[id="results"]').invoke('text').then((result) => {
            expect(result).to.contain("Cypress is a frontend test automation tool and open-source framework designed");
        });

    })// End of test 2

    })// End of describe Suite
