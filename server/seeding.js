Meteor.startup(function () {
	let bonusCount = Bonus.find({}).count();

	// no bonus in the db, let's add the click
	if (bonusCount === 0) {
		Bonus.insert({
			name: 'simple_click',
			production: 1,
			price: 0
		});
		console.log('basic bonus simple_click added!');
	}
});