Template.shop.events({
	'click [rel=buy-bonus]' (event, template) {
		event.preventDefault();
		const buyAction = {
			bonusId: template.data._id,
			score: Meteor.user().score
		};

		Meteor.call('Bonus.buy', buyAction, function(err, result){
			if(! err){
				sAlert.success("Nice, you've just bought something with id " + result);
			}else{
				sAlert.error('You failed to buy, do you have papas');
			}
		});
	}
});

Template.shop.helpers({
	belongingCount (bonusId) {
		return Meteor.user().getBonusCount(bonusId);
	}
});