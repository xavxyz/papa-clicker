Template.score.onCreated(function () {
    this.currentScore = new ReactiveVar(Modules.client.users.getCurrentScore());

    this.autorun(() => {
        let ratePerSecond = Modules.both.utility.rate();

        Meteor.setInterval(() => {
            this.currentScore.set(this.currentScore.get() + ratePerSecond);
        }, 1000);
    });
});

Template.score.helpers({
    currentScore () {
        return Template.instance().currentScore.get();
    }
});
