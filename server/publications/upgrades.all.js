Meteor.publish('Upgrades.all', function() {
	return Upgrades.find({});
});