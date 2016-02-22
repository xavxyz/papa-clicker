Template.shop.events({
	'click [rel=buy-bonus]' (event, template) {
		event.preventDefault();
		Meteor.call('Bonus.buy', template.data._id);
	}
});