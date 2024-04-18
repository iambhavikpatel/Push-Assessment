
## Push-Assessment OrangeHRM End-to-End Automation Testing

The suite primarily evaluates fundamental aspects of the application such as:

- Positive and negative login test
- Adding a candidate
- Validation of added candidate
- verification of project time reports

### Initial Setup
To set up the framework:
1. Download the repository using: `git clone https://github.com/iambhavikpatel//Push-Assessment.git`
2. Ensure your are in the correct repository directory if not: `cd push-automation`
3. Install necessary packages with: `npm i`

### Running Tests
Execute the tests via:
- Launching the Cypress test runner with: `npx cypress open`
- Using the headless mode for tests: `npx cypress run`
- You can specify specs using: `npx cypress run --spec "cypress/e2e/my-spec.cy.js"`

### Overview of Project Structure

#### Cypress Directory Organization
The setup adheres to the recommended structure by Cypress, ensuring efficient management of tests and configurations:
- Main directory: `cypress`
- Tests directory: `cypress/e2e`
- Test data presets: `cypress/fixtures`
