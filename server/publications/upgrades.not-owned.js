Meteor.publish('Upgrades.notOwned', function() {
	return Upgrades.find({});
});