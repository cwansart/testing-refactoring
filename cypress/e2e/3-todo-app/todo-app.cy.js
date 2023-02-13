/// <reference types="cypress" />

describe("todo-app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have empty todo list by default", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });
  it("should create new todos", () => {
    cy.get("#inputTodo").type("Learn CSS");
    cy.get("#submit").click();
    cy.get("#todo-items li").should("have.length", 1);
  });
});
