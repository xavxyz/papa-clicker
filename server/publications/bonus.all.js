Meteor.publish('bonus.all', function() {
	return Bonus.find({});
});