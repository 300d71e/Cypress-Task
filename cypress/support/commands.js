Cypress.Commands.add("login", (email, password) => {
	cy.contains("Login").click();
	cy.get('input[type="email"]').type(email);
	cy.get('input[type="password"]').type(password);
	cy.get(".btn").contains("Login").click();
});
Cypress.Commands.add("searchFood", (foodName) => {
	cy.get(".col-md-9 > .search").type(foodName);
	cy.get(".btn > span").click();
});
Cypress.Commands.add("searchRestautant", (resName) => {
	cy.contains(resName, {
		timeout: 10000,
	}).click({ force: true });
});
Cypress.Commands.add("addFood", (add_Food) => {
	cy.contains(add_Food, { timeout: 10000 }).click({ force: true });
});
Cypress.Commands.add("addDesc", (add_Desc) => {
	cy.get('textarea[placeholder="Add Notes"]').type(add_Desc);
});

/* 
Cypress.Commands.add("searchFood", () => {
	cy.get(".col-md-9 > .search").type("momo");
	cy.get(".btn > span").click();
	cy.url().should("include", "Index?q=momo");
	cy.contains("Bota Simply Mo:Mo - Bhaktapur", {
		timeout: 10000,
	}).click();
	cy.contains("Chicken Steam Mo:Mo", { timeout: 10000 }).click();
	cy.contains("Chicken Steam Mo:Mo").should("be.visible");
});
Cypress.Commands.add("addFood", () => {
	cy.get('div[ng-hide="showEmpty()"]').contains("Your bag is empty");
	cy.contains("Chicken Steam Mo:Mo", { timeout: 10000 }).click();
	cy.get('textarea[placeholder="Add Notes"]').type(
		"Please Make it extra delicious and bring it on time"
	);
	cy.contains("Add to Bag").click({ force: true });
});
*/
