import { da } from "@faker-js/faker";

describe("Transaction Search", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("should search for a transaction based on account number and amount", () => {
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("John123");
    cy.get("input.button").contains("Log In").click();

    cy.get("#leftPanel").should("contain", "Accounts Overview");

    cy.xpath("//a[text()='Find Transactions']").click();

    const accNumber = "13566";
    const transactionAmount = "1";

    cy.get('input[id="amount"]').type(transactionAmount);
    cy.get("#accountId").select(accNumber);

    cy.get("#findByAmount").click();
  });
});
