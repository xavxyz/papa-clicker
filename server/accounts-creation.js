Accounts.onCreateUser((options, user) => {
	// init score
	user.score = 0;

	let simpleClick = Bonus.findOne({name: 'simpleClick'});

	Stuffs.insert({
		userId: user._id,
		type: 'Bonus',
		stuffId: simpleClick._id,
		amount: 1
	});

	return user;
});