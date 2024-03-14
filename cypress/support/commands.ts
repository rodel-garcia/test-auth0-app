/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("loginWithAuth0", (username: string, password: string) => {
  cy.visit("/");
  cy.get("button.login-button").click();

  cy.origin(
    "https://dev-xqdys2lqvawhc6p5.us.auth0.com",
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button[data-action-button-primary="true"]').click();
    }
  );
});

declare global {
  namespace Cypress {
    interface Chainable {
      loginWithAuth0: (username?: string, password?: string) => string;
    }
  }
}
