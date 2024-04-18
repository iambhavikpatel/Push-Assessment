describe('Time Report Test', () => {
    let testData

    before(() => {
        cy.fixture("TimeReportData").then((data) => {
            testData = data;
        })
    })

    beforeEach(() => {
        cy.Login(Cypress.env('userName'), Cypress.env('password'))
    })

    it('View and Verify Project Time Report', () => {
        const projectName = testData.projectName;
        const splitProjectName = projectName.split(' ')[0];

        cy.visit('/time/viewEmployeeTimesheet')


        cy.get('li:nth-of-type(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.contains('Project Reports').click()


        cy.get('.oxd-autocomplete-text-input > input').type(splitProjectName);
        cy.get('[role=option]').contains(projectName).click();

        cy.get('div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group > div:nth-of-type(2) > .oxd-date-wrapper > .oxd-date-input').type(testData.fromDate)
        cy.get('[placeholder="To"]').type(testData.toDate)

        //After typing click on view button
        cy.get('.oxd-button--secondary').click()
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(1)').should('include.text', testData.bugFixesTxt)
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(2)').should('include.text', testData.featureDevelopmentTxt)
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(3)').should('include.text', testData.implementationTxt)
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(4)').should('include.text', testData.QATestingTxt)
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(5)').should('include.text', testData.reqGatheringTxt)
        cy.get('revogr-data[type="rgRow"] > div:nth-of-type(6)').should('include.text', testData.supportMainTxt)


    })


})