describe("Filed validations company informatios", () => {
  before(() => {
    cy.visit("https://app-qa.enginebi.net/subscription/0-plans");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Filed validations company informatios", () => {
    cy.fixture("fieldValidationsCompanyInformations.json").then((data) => {
    cy.get(".ant-btn-lg").contains("START NOW").click();
    cy.get("#name").type(data.name);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get("#phone").type(data.phone);
    cy.get(".ant-btn-lg").contains("Next").click();
    cy.get(".statusName").should("contain", "Company Information");
    cy.get("#customerName").type(data.customerName);
    cy.get(".ant-form-item-explain-error").should("contain", "The imput is not a valid company name.");
    cy.get("#fiscalMonth > .ant-select-selector > .ant-select-selection-item").click();
    cy.get('[title="April"] > .ant-select-item-option-content').click();
    cy.get('#accountingSoftware > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('[title="Oracle Netsuite"] > .ant-select-item-option-content').click();
    cy.get("#countryId").type(data.country).type("{enter}");
    cy.get("#stateId").click({force:true});
    cy.get("#stateId").type(data.stateId).type("{enter}");
    cy.get("#city").click({force:true});
    cy.get("#city").type(data.city);
    cy.get(".ant-form-item-explain-error").should("contain", "The input is not a valid city or exceeds 50 characters");
    cy.get(".ant-checkbox-input").click();
    cy.get(".btn-next").click();
})

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
