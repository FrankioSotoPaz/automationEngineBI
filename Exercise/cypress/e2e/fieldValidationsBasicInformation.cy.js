describe("Field validation basic information", () => {
  before(() => {
    cy.visit("https://app-qa.enginebi.net/subscription/0-plans");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Field validation basic information", () => {
    cy.fixture("fieldValidationsBasicInformations.json").then((data) => {
    cy.get(".ant-btn-lg").contains("START NOW").click();
    cy.get("#name").type(data.name);
    cy.get(".ant-form-item-explain-error").should("contain", "The input is not valid name or exceeds 50 characters");
    cy.get("#lastName").type(data.lastName);
    cy.get(".ant-form-item-explain-error").should("contain", "The input is not valid last name or exceeds 50 characters");
    cy.get("#email").type(data.email);
    cy.get(".ant-form-item-explain-error").should("contain", "This email is invalid.");
    cy.get("#phone").type(data.phone);
    cy.get(".ant-form-item-explain-error").should("contain", "Please input your phone number!");
    cy.get(".ant-btn-lg").contains("Next").click();

})

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
