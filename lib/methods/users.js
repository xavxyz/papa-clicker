Meteor.methods({
	updateScore() {
		Modules.both.users.updateScore();
	}
});