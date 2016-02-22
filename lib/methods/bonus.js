Bonus.buy = new ValidatedMethod({
	name: 'Bonus.buy',
	validate: new SimpleSchema({
		bonusId: {type: String},
		score: {type: Number}
	}).validator(),
	run({bonusId, score}) {
		const bonus = Bonus.findOne({_id: bonusId});
		debugger
		// you don't have enough dude
		if (score <= bonus.price) {
			throw new Meteor.Error(403, 'Click more to buy that shit bro');
		}
		if (this.isSimulation) {
			// optimistic ui
			console.log('do something with the UI \\o/');
		} else {
			// server side
			const belonging = Belongings.findOne({userId: this.userId, belongingId: bonus._id});

			if (belonging !== undefined) {
				Belongings.update(
					{
						userId: this.userId,
						belongingId: bonus._id,
					},
					{
						$inc: {amount: 1}
					}
				);
			} else {
				Belongings.insert({
					userId: this.userId,
					belongingId: bonus._id,
					amount: 1
				});
			}
		}
	}
});