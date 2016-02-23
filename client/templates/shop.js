Template.shop.events({
	'click [rel=buy-bonus]' (event, template) {
		event.preventDefault();
		const buyAction = {
			bonusId: template.data._id,
			score: Meteor.user().score
		};
		Meteor.call('Bonus.buy', buyAction);
	}
});

Template.shop.helpers({
	belongingCount (bonusId) {
		return Meteor.user().getBonusCount(bonusId);
	}
});