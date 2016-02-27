Modules.client.users = {};

let papaClicked = (papas) => {
	Meteor.call('updateScore', papas, function(err, result){
		if(! err){
			console.log("is this shown");
			sAlert.success(`Added ${result} papas successfully!`);
		}else{
			sAlert.error('You failed to lick the papa');
		}
	});
};

let getCurrentScore = () => {
	let user = Meteor.user();
	if(user){
		return user.score;
	}else{
		console.log("No user found");
		return 0;
	}
};

Modules.client.users.papaClicked = papaClicked;
Modules.client.users.getCurrentScore = getCurrentScore;
