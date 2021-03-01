describe("foodmandu", () => {
	it("Login With valid Username and password", () => {
		//Visiting website
		cy.visit("https://www.foodmandu.com");
		//Verifying Title and protocol
		cy.title().should(
			"eq",
			"Foodmandu: Food Delivery Service in Kathmandu and Pokhara"
		);
		cy.location("protocol").should("eq", "https:");

		cy.get(".btn").contains("Login").click();
		//Entering Valid Email and password and Login
		cy.get('input[type="email"]').type("koiralaanish47@gmail.com");
		cy.get('input[type="password"]').type("anish420");
		cy.get(":nth-child(3) > label").click();
		cy.get(".btn").contains("Login").click();
		// verifying the after login page
		cy.contains("Order food from the widest range of restaurants.").should(
			"be.visible"
		);
		cy.get(".col-md-9 > .search").type("momo");
		cy.get(".btn > span").click();
		cy.get(".btn").contains("Find Restaurant").click();
		cy.contains("Bota Simply Mo:Mo - Bhaktapur", {
			timeout: 10000,
		}).click();
		cy.contains("Chicken Steam Mo:Mo", { timeout: 10000 }).click();
		cy.get('textarea[placeholder="Add Notes"]').type(
			"Please Make it extra delicious and bring it on time"
		);
		cy.contains("Add to Bag").click();
		cy.get('[title="My Profile"] > .icomoon').click({ force: true });
		cy.get(".green").contains("Logout").click();
	});
});
