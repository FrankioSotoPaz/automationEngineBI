describe("Free trial costumer name exists", () => {
  before(() => {
    cy.visit("https://app-qa.enginebi.net/subscription/0-plans");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Free trial costumer name exists", () => {
    cy.fixture("freeTrial.json").then((data) => {
    cy.get(".ant-btn-lg").contains("START NOW").click();
    cy.get("#name").type(data.name);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get("#phone").type(data.phone);
    cy.get(".ant-btn-lg").contains("Next").click();
    cy.get(".statusName").should("contain", "Company Information");
    cy.get("#customerName").type(data.customerName);
    cy.get(".ant-form-item-explain-error").should("contain", "This company name isn't availabe. ");

})

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
