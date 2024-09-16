describe("Fund Transfer", () => {
  beforeEach(() => {
    // Clearing cookies and visiting the website
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("Should allow the user to transfer 10$ between accounts", () => {
    // Logging in to the account
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Check that login was successful
    cy.get("#leftPanel").should("contain", "Accounts Overview");

    // Navigate to transfer funds page
    cy.xpath("//a[text()='Transfer Funds']").click();

    // Define variables for transfer
    const transferAmount = "10";
    const fromAccount = "13566";
    const toAccount = "13677";

    // Fill in the transfer form
    cy.get("#amount").type(transferAmount);
    cy.get("#fromAccountId").select(fromAccount);
    cy.get("#toAccountId").select(toAccount);

    // Submit the transfer
    cy.get('input.button[value="Transfer"]').click();

    // Validate that the transfer was successful
    cy.get("#rightPanel").should("contain", "Transfer Complete!");
    cy.get("#amountResult").should("contain", `${transferAmount}`);
    cy.get("#toAccountIdResult").should("contain", `${toAccount}`);

    cy.xpath("//a[text()='Log Out']").click();
  });
});
