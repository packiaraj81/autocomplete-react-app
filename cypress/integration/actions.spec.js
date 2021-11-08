import MainApp from "../page/App";

context("Autocomplete actions", () => {
  beforeEach(() => {
    cy.server();
  });

  it("navigates to proper pages with navbar links", () => {
    cy.visit("/");
    cy.get(MainApp.wrapper);

    //on page load, I see the input element is focussed
    cy.get(MainApp.input).should("have.focus");

    //When i type "ba", I see there are 4 items suggested as expected
    cy.get(MainApp.input).type("ba");
    cy.get("li").should("have.length", 4);

    //When i type "z", I see there are 2 items suggested as expected
    cy.get(MainApp.input).clear().type("z");
    cy.get("li").should("have.length", 2);

    //When i type "d", I see there are 4 items suggested and pressed Enter key
    cy.get(MainApp.input).clear().type("d{enter}");

    //Then I see 'Denmark' is selected from the suggestion as expeted.
    cy.get(MainApp.input).should("have.value", "Denmark");

    //When i type "d", I see there are 4 items and pressed down arrow / upArrow to select the 2rd suggestion and pressed enter
    cy.get(MainApp.input)
      .clear()
      .type("d{downArrow}{downArrow}{upArrow}{enter}");

    //Then I see 'Djibouti' was selected from the suggestion as expected
    cy.get(MainApp.input).should("have.value", "Djibouti");

    //When I entered 'asd', no suggestion message was displayed
    cy.get(MainApp.input).clear().type("asd");
    cy.get(".no-suggestions").should("have.text", "Country not available.");
  });
});
