Upgrades.buy = new ValidatedMethod({
	name: 'Upgrades.buy',
	validate: new SimpleSchema({
		upgradeId: {type: String},
		score: {type: Number}
	}).validator(),
	run({upgradeId, score}) {
		const upgrade = Upgrades.findOne({_id: upgradeId});

		if (upgrade === undefined) {
			throw new Meteor.Error(404, 'This upgrade does not exist');
		}

		// you don't have enough dude
		if (score < upgrade.price) {
			throw new Meteor.Error(403, 'Click more to buy that shit bro');
		}

		// server side
		const belonging = Belongings.findOne({userId: this.userId, belongingId: upgrade._id});

		// insert or update belonging counter for this bonus
		if (belonging === undefined) {
			Belongings.insert({
				userId: this.userId,
				belongingId: upgrade._id,
				amount: 1
			});
		} else {
			throw new Meteor.Error(403, 'You already have this upgrade!');
		}

		// decrease user's score
		Meteor.users.update({_id: this.userId}, {$inc: {score: -price}});

		return upgradeId;
	}
});