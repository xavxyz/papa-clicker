Template.upgradesShop.events({
	'click [rel=buy-upgrade]' (event, template) {
		event.preventDefault();
		const buyAction = {
			upgradeId: template.data._id,
			score: Meteor.user().score
		};

		Meteor.call('Upgrades.buy', buyAction, function(err, result){
			if(! err) {
				const upgrade = Upgrades.findOne({_id: result});
				if(upgrade){
					sAlert.success("Nice, you've just bought some " + upgrade.name);
				}else{
					sAlert.success("Nice, you've just bought something with id " + result);
				}
			}else{
				sAlert.error('You failed to buy, do you have papas');
			}
		});
	}
});