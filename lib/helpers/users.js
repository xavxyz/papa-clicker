Meteor.users.helpers({
	getBonusCount (bonusId) {
		const bonus = Belongings.findOne({userId: this._id, belongingId: bonusId});
		return bonus !== undefined ? bonus.amount : 0;
	}
});