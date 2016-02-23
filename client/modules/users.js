Modules.client.users = {};

let papaClicked = (papas) => {
	Meteor.call('updateScore', papas, function(err, result){
		if(! err){
			console.log("Method result:" + result);
			console.log(`Added ${papas} papas successfully!`);
		}
	});
};

let getCurrentScore = () => {
	console.log("getCurrentScore called");

	let user = Meteor.user();
	if(user){
		console.log("User score: " +  user.score);
		return user.score;
	}else{
		console.log("No user found");
		return 0;
	}
};

Modules.client.users.papaClicked = papaClicked;
Modules.client.users.getCurrentScore = getCurrentScore;