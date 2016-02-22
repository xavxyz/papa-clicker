Template.layout.onCreated(function () {
	this.autorun(() => {
		if (Meteor.user()) {
			this.subscribe('bonus.all');
		}
	});
});

