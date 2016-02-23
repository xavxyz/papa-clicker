Meteor.startup(function () {
	const bonusCount = Bonus.find({}).count();
	const upgradesCount = Upgrades.find({}).count();

	// no bonus in the db, let's add the click
	if (bonusCount === 0 && upgradesCount === 0) {
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
			},
			{
				name: 'Mojo Rojo',
				production: 1000,
				price: 500
			},
			{
				name: 'Mojo Verde',
				production: 3000,
				price: 1000
			},
			{
				name: 'Super Mojo Picòn',
				production: 10000,
				price: 7000
			}
		];

		const upgrade = {
			name: 'Papa Surfing 🏄',
			value: 10,
			price: 100
		};

		_.each(bonusList, (bonus) => {
			let bonusId = Bonus.insert(bonus);

			if (bonus.name === 'simpleClick') {

				upgrade.bonusId = bonusId;

				Upgrades.insert(upgrade);
			}
		});

	}

});
