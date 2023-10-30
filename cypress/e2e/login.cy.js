describe("login test", () => {
  it("login user", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.signIn("user888@gmail.com", "1234567890");

    cy.get("#open-navigation-menu-mobile").click();

    cy.contains("Log out").click();

    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });

  it("login qa", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.signIn("testowyqa@qa.team", "QA!automation-1");

    cy.get("#open-navigation-menu-mobile").click();

    cy.contains("Log out").click();

    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});
