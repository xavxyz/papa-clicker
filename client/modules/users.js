Modules.client.users = {};

let papaClicked = () => {
	Meteor.call('updateScore', function(err, result){
		if(! err){
			console.log("Method result:" + result);
			console.log("Papa clicked successfully!");
		}
	});
};

let getCurrentScore = () => {
	console.log("getCurrentScore called");

	let user = Meteor.user();
	console.log(user);
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