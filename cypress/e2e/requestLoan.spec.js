// Import Faker
const { faker } = require("@faker-js/faker");

describe("Loan Application", () => {
  beforeEach(() => {
    // Clearing cookies
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("Should allow user to apply for a loan with random data", () => {
    // Logging in before test
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Check that login was successful
    cy.get("#leftPanel").should("contain", "Accounts Overview");

    // Go to loan form
    cy.xpath("//a[text()='Request Loan']").click();

    // Generate random loanAmount and downPayment using Faker
    const loanAmount = faker.number.int({ min: 1000, max: 10000 });
    const downPayment = faker.number.int({ min: 100, max: 300 });
    const fromAcc = "13677";

    // Fill in the loan application form
    cy.get("#amount").type(loanAmount);
    cy.get("#downPayment").type(downPayment);

    // Open and select the option in the 'fromAccountId' dropdown
    cy.get("select#fromAccountId").click(); // Open dropdown
    cy.get("select#fromAccountId option")
      .contains(fromAcc)
      .then((option) => {
        cy.get("select#fromAccountId").select(option.val()); // Select option by value
      });

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
