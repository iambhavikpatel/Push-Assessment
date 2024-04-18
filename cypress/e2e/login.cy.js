describe('Login Test', () => {
    let testData

    before(() => {
        cy.fixture("LoginData").then((data) => {
            testData = data;
        })
    })

    it('Test 1: Login Test (Positive Test)', () => {

        cy.visit("auth/login")
        cy.viewport(1440, 900)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testData.userName1)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testData.password1)
        cy.get('.oxd-button').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    })

    it('Test 2: Login Test (Negative Test)', () => {

        cy.visit("auth/login")
        cy.viewport(1440, 900)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testData.userName2)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testData.password2)
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert').contains(testData.expectedText2)

    })
})