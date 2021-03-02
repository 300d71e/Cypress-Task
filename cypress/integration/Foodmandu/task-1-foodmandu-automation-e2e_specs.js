describe("Foodmandu-Automation_login-search-add-logout", () => {
	beforeEach(() => {
		cy.visit("https://foodmandu.com/");
		cy.login("koiralaanish47@gmail.com", "anish420");
	});
	it("Should login with valid email and password", () => {
		cy.title().should(
			"eq",
			"Foodmandu: Food Delivery Service in Kathmandu and Pokhara"
		);
		cy.location("protocol").should("eq", "https:");

		cy.contains("Order food from the widest range of restaurants.").should(
			"be.visible"
		);
	});
	it("Search for any particular food item", () => {
		cy.searchFood("momo"); //Search Food
		cy.contains("Restaurants and stores").should("be.visible");
		cy.url().should("include", "Index?q");

		cy.searchRestautant("Bota Simply Mo:Mo - Bhaktapur"); //Select Restaurant
		cy.url().should("include", "Restaurant/Details");
	});
	it("Add Food and Food Description in bag", () => {
		cy.searchFood("momo");
		cy.searchRestautant("Bota Simply Mo:Mo - Bhaktapur"); //Select Restaurant
		cy.get("#Category17641 > :nth-child(1)")
			.contains("Bota Regular")
			.should("be.visible")
			.wait(1000);
		cy.get("ul.nav li").should("have.length", 112);

		cy.addFood("Chicken Steam Mo:Mo"); //Select Specific Food
		cy.get(".col-md-12 > .small-title")
			.contains("SPECIAL INSTRUCTIONS")
			.should("be.visible");

		cy.addDesc(
			"Please Make it Extra Delicious and bring it on time. Thank you"
		); //Add Description
		cy.contains("Add to Bag").click({ force: true });
	});
	it("Should Logout from the system", () => {
		cy.searchFood("momo");
		cy.searchRestautant("Bota Simply Mo:Mo - Bhaktapur");
		cy.get('[title="My Profile"] > .icomoon').click({ force: true });
		cy.get(
			".profile > .sidebar-wrapper--outer > .sidebar-wrapper > .side-general > .small-title"
		)
			.contains("My Profile")
			.should("be.visible");
		cy.get(".green").contains("Logout").click();
		cy.get(".btn").should("be.visible", "Login");
		cy.title().should(
			"eq",
			"Foodmandu: Food Delivery Service in Kathmandu and Pokhara"
		);
	});
});
