Meteor.startup(function () {
	const bonusCount = Bonus.find({}).count();

	// no bonus in the db, let's add the click
	if (bonusCount === 0) {
		const bonusList = [
			{
				name: 'simpleClick',
				production: 1,
				price: 0
			},
			{
				name: 'Cursor',
				production: 10,
				price: 10
			}
		];

		_.each(bonusList, bonus => Bonus.insert(bonus));
		console.log('bonus seeded!');
	}
});