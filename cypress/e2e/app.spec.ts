import { before } from "mocha";

describe("auth0 login", () => {
  beforeEach(() => {
    cy.loginWithAuth0(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    );

    cy.wait(1000);
  });
  it("should login with auth0", () => {
    cy.visit("/about");
    cy.visit("/contact");

    cy.get("header").contains(Cypress.env("auth0_username"));
    cy.get("button.logout-button").contains("Log Out");
  });
  it("should logout from app", () => {
    cy.get("header").contains(Cypress.env("auth0_username"));
    cy.get("button.logout-button").click();

    cy.get("button.login-button").contains("Log in");
  });
});
