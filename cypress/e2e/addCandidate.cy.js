function deleteCandidate() {
    cy.get('div:nth-of-type(7) > div > button:nth-of-type(2)').click()
    cy.get('.orangehrm-button-margin.oxd-button.oxd-button--label-danger.oxd-button--medium').click()

}




describe('Add Candidate Test', () => {
    let testData

    before(() => {
        cy.fixture("CandidateData").then((data) => {
            testData = data;
        })
    })

    after(() => {

        deleteCandidate()
    })

    beforeEach(() => {
        cy.Login(Cypress.env('userName'), Cypress.env('password'))
    })

    it('Test 1: Navigate to Recruitment and add a New Candidate', () => {
        cy.visit('recruitment/viewCandidates')
        cy.get('.orangehrm-header-container .oxd-button--secondary').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(testData.firstName)
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(testData.lastName)
        cy.get('[placeholder="yyyy-dd-mm"]').clear()
        cy.get('[placeholder="yyyy-dd-mm"]').type('2024-01-01')
        cy.get('div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-3 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input').type(testData.emailId)
        cy.get('.oxd-file-button').click()
        cy.get('.oxd-file-input').selectFile('cypress/fixtures/Bhavikkumar_Patel_QA.pdf', {force: true})
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-layout-context > .orangehrm-card-container > .oxd-form').contains('Application Stage')

    })


    it('Test 2: Verify candidate details', () => {
        const candidateName = testData.candidateName
        const splitCandidateName = candidateName.split(' ')[0]

        cy.visit('recruitment/viewCandidates')
        cy.get('.oxd-autocomplete-text-input > input').type(splitCandidateName)
        cy.get('[role=option]').contains(candidateName).click();
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true })
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('include.text', 'Bhavik  Patel')


    })


})