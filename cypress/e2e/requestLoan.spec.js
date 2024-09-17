// Import Faker
const { faker } = require("@faker-js/faker");

describe("Loan Application", () => {
  beforeEach(() => {
    // Clearing cookies
    cy.clearCookies();
    // Visit page
    cy.visit("http://localhost:8080/parabank/index.htm");
    // Login
    cy.get('#loginPanel input[name="username"]').type("john123");
    cy.get('#loginPanel input[name="password"]').type("zaq1@WSX");
    cy.get('#loginPanel input[type="submit"]').click();
  });

  it("Should allow user to apply for a loan with random data", () => {
    // Go to loan page
    cy.xpath("//a[text()='Request Loan']").click();

    // Generate random loanAmount and downPayment using Faker
    const loanAmount = faker.number.int({ min: 1000, max: 10000 });
    const downPayment = faker.number.int({ min: 100, max: 300 });
    const fromAcc = "13677";

    // Fill in the loan application form
    cy.get("#amount").type(loanAmount);
    cy.get("#downPayment").type(downPayment);

    // Select the 'fromAccountId' dropdown option by value
    cy.get("select#fromAccountId").select(fromAcc); // Use select() directly

    // Click 'Apply Now' buttton
    cy.get('input.button[value="Apply Now"]').click();

    // Verify that the loan request was processed with the random values
    cy.get("#rightPanel").should("contain", "Loan Request Processed");
    cy.get("#rightPanel").should(
      "contain",
      "Congratulations, your loan has been approved."
    );

    cy.xpath("//a[text()='Log Out']").click();
  });
});
