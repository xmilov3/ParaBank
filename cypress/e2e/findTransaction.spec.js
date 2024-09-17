import { da } from "@faker-js/faker";

describe("Transaction Search", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("Should search for a transaction based on account number and amount", () => {
    // Login
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Select 'Find transactions' in menu
    cy.xpath("//a[text()='Find Transactions']").click();

    // Add account number and transaction amount as a constant
    const accNumber = "13566";
    const transactionAmount = "10";

    // Fill 'Find transaction' form
    cy.get('input[id="amount"]').type(transactionAmount);
    cy.get("#accountId").select(accNumber);

    cy.get("#findByAmount").click();
  });

  it("should search for a transaction based on account number and date", () => {
    // Login
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Select 'Find transactions' in menu
    cy.xpath("//a[text()='Find Transactions']").click();

    // Add account number as a constant
    const accNumber = "13566";

    // Date format from YYYY-MM-DD to MM-DD-YYYY
    const today = new Date();
    const formattedDate =
      ("0" + (today.getMonth() + 1)).slice(-2) + // Month (add 1 bcoz getMonth() return months starting at 0)
      "-" +
      ("0" + today.getDate()).slice(-2) + // Day
      "-" +
      today.getFullYear(); // Year

    // Fill 'Find transaction' form
    cy.get('input[id="transactionDate"]').type(formattedDate);
    cy.get("#accountId").select(accNumber);
    cy.get("#findByDate").click();
    //cy.xpath("//a[text()='Bill Payment to Jonatan']").click();

    cy.xpath("//a[text()='Log Out']").click();
  });

  it("should search for a transaction based on account number and date range", () => {
    //Login
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Select 'Find transactions' in menu
    cy.xpath("//a[text()='Find Transactions']").click();

    const accNumber = "13566";
    // Date format from YYYY-MM-DD to MM-DD-YYYY
    const today = new Date();
    const formattedDate =
      ("0" + (today.getMonth() + 1)).slice(-2) + // Month (add 1 bcoz getMonth() return months starting at 0)
      "-" +
      ("0" + today.getDate()).slice(-2) + // Day
      "-" +
      today.getFullYear(); // Year

    // Date week ago
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);
    const formattedOneWeekAgo =
      ("0" + (oneWeekAgo.getMonth() + 1)).slice(-2) + // Month 14698
      "-" +
      ("0" + oneWeekAgo.getDate()).slice(-2) + // Dzay
      "-" +
      oneWeekAgo.getFullYear(); // Year

    // Fill 'Find transaction' form
    cy.get('input[id="fromDate"]').type(formattedOneWeekAgo);
    cy.get('input[id="toDate"]').type(formattedDate);
    cy.get("#accountId").select(accNumber);
    cy.get("#findByDateRange").click();

    // Logout
    cy.xpath("//a[text()='Log Out']").click();
  });
});
