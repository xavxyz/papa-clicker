Meteor.methods({
	updateScore(papas) {
		return Modules.both.users.updateScore(papas);
	}
});