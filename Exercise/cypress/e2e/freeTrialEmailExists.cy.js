describe("Free trial with email exists", () => {
  before(() => {
    cy.visit("https://app-qa.enginebi.net/subscription/0-plans");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Free trial with email exists", () => {
    cy.fixture("freeTrial.json").then((data) => {
    cy.get(".ant-btn-lg").contains("START NOW").click();
    cy.get("#name").type(data.name);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get(".ant-form-item-explain-error").should("contain", "This email is already taken.");

})

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
