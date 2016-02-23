Meteor.methods({
	updateScore(papas) {
		Modules.both.users.updateScore(papas);
	}
});