Meteor.publish('Belongings.possessed', function() {
	if (!this.userId) {
		return [];
	}
	return Belongings.find({userId: this.userId});
});