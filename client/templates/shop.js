Template.shop.events({
	'click [rel=buy-bonus]' (event, template) {
		event.preventDefault();
		debugger
		const buyAction = {
			bonusId: template.data._id,
			score: Meteor.user().score
		};
		Meteor.call('Bonus.buy', buyAction);
	}
});