/// <reference types="cypress" />

describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("https://g1-lrnr-chat-ai.vercel.app");
  });

  it("should load the homepage successfully", () => {
    cy.contains("lrnr").should("be.visible"); // Check if the logo text is present
  });

  it("should display the hero section correctly", () => {
    cy.contains("Your guided path to programming enlightenment").should(
      "be.visible"
    );
    cy.get("button").contains("BEGIN JOURNEY").should("be.visible");
  });

  it("should navigate to quiz page when clicking BEGIN JOURNEY", () => {
    cy.get("button").contains("BEGIN JOURNEY").click();
    cy.url().should("include", "/quiz"); // Verify redirection
  });

  it("should display all three feature sections", () => {
    cy.contains("Personalized Quizzes").should("be.visible");
    cy.contains("Rewarding").should("be.visible");
    cy.contains("Personal SME").should("be.visible");
  });
});
