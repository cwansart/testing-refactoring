/// <reference types="cypress" />

describe("todo-app", () => {
  it("should exist", () => {
    cy.visit("http://localhost:3000");
  });
  it("should have empty todo list by default", () => {
    cy.visit("http://localhost:3000");
    cy.get("#todo-list li").should("have.length", 0);
  });
});
