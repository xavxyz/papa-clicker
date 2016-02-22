Template.layout.onCreated(function () {
	this.autorun(() => {
		if (Meteor.user()) {
			this.subscribe('bonus.all');
		}
	});
});

Template.layout.helpers({
	bonusList () {
		return Bonus.find({}).fetch();
	}
});

