Accounts.onCreateUser((options, user) => {
	// init score
	user.score = 0;

	let simpleClick = Bonus.findOne({name: 'simpleClick'});

	Belongings.insert({
		userId: user._id,
		belongingId: simpleClick._id,
		amount: 1
	});

	return user;
});