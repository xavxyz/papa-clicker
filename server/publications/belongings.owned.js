Meteor.publish('Belongings.owned', function() {
	if (!this.userId) {
		return [];
	}
	return Belongings.find({userId: this.userId});
});