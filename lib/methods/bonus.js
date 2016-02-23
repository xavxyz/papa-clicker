Bonus.buy = new ValidatedMethod({
	name: 'Bonus.buy',
	validate: new SimpleSchema({
		bonusId: {type: String},
		amount: {type: Number},
		score: {type: Number}
	}).validator(),
	run({bonusId, amount, score}) {
		if (amount === 0) {
			amount = 1;
		}

		const bonus = Bonus.findOne({_id: bonusId});

		if (bonus === undefined) {
			throw new Meteor.Error(404, 'This bonus does not exist');
		}

		// you don't have enough dude
		if (score < bonus.price * amount) {
			throw new Meteor.Error(403, 'Click more to buy that shit bro');
		}

		// server side
		const belonging = Belongings.findOne({userId: this.userId, belongingId: bonus._id});

		let price = bonus.price;

		// insert or update belonging counter for this bonus
		if (belonging !== undefined) {
			Belongings.update(
				{
					userId: this.userId,
					belongingId: bonus._id
				},
				{
					$inc: {amount: 1}
				}
			);

			price = price * (belonging.amount + 1);
		} else {
			Belongings.insert({
				userId: this.userId,
				belongingId: bonus._id,
				amount: 1
			});
		}

		// decrease user's score
		Meteor.users.update({_id: this.userId}, {$inc: {score: -price}});

		return bonusId;
	}
});