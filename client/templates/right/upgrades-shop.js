Template.upgradesShop.events({
	'click [rel=buy-bonus]' (event, template) {
		event.preventDefault();
		const buyAction = {
			bonusId: template.data._id,
			amount: Meteor.user().getBonusCount(template.data._id),
			score: Meteor.user().score
		};

		Meteor.call('Bonus.buy', buyAction, function(err, result){
			if(! err){
				const bonus = Bonus.findOne({_id: result});
				if(bonus){
					sAlert.success("Nice, you've just bought some " + bonus.name);
				}else{
					sAlert.success("Nice, you've just bought something with id " + result);
				}
			}else{
				sAlert.error('You failed to buy, do you have papas');
			}
		});
	}
});