Template.score.onCreated(function () {
    // every 200ms, update the score with the 0.2 rate per second
    if (Meteor.user()) {
        Meteor.setInterval(() => {
            Meteor.call('updateScore', Modules.both.utility.rate() / 5, function (err, result) {
                if (!err) {
                    //                console.log("is this shown");
                } else {
                    console.log("failed to papas to your account");
                }
            });
        }, 200);
    }
});

Template.score.helpers({
    currentScore () {
        return Modules.client.users.getCurrentScore();
    },
    currentRate () {
        return Modules.both.utility.rate();
    }
});
