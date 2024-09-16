if (process.env.RUN_SETUP_TESTS === "true") {
  describe("Register new bank account", () => {
    it("Should allow the user to create new account", () => {
      cy.visit("http://localhost:8080/parabank/index.htm");
      cy.get('#loginPanel input[name="username"]').type("john123");
      cy.get('#loginPanel input[name="password"]').type("zaq1@WSX");
      cy.get('#loginPanel input[type="submit"]').click();
      // Define type of Account I would like to open
      const savingsAccount = "SAVINGS";

      cy.xpath("//a[text()='Open New Account']").click();
      cy.get("#type").select(savingsAccount);
      cy.get('input[type="button"]').click();

      cy.xpath("//a[text()='Log Out']").click();
    });
  });
}
