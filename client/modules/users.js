Modules.client.users = {};

let papaClicked = (papas) => {
	Meteor.call('updateScore', papas, function(err, result){
		if(! err){
			sAlert.success('Papa licked successfully');
		}else{
			sAlert.error('You failed to lick the papa');
			console.log(`Added ${papas} papas successfully!`);
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