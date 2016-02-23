Meteor.publish('Bonus.all', function() {
	// don't show the simple click bonus and only show me what I can buy
	return Bonus.find({name: {$ne: 'simpleClick'}});
});