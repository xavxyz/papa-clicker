Meteor.publish('bonus.all', function() {
	// don't show the simple click bonus
	return Bonus.find({name: {$ne: 'simpleClick'}});
});