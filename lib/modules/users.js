Modules.both.users = {};

let papaClickMethod = (papas) => {
	check(papas, Number);

	console.log("Papa click method");

	if(! Meteor.userId()){
		throw Meteor.Error(403, "You need to be a user");
	}

	Meteor.users.update({_id: Meteor.userId()}, {$inc: {"score" : papas}});
};

Modules.both.users.updateScore = papaClickMethod;