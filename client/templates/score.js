Template.score.onCreated(function () {
    // init the score with the last registered in the db
    this.currentScore = new ReactiveVar(Modules.client.users.getCurrentScore());
    this.currentRate = new ReactiveVar(0);

    this.autorun(() => {

        this.currentRate.set(Modules.both.utility.rate() / 5);
    });

    // every 200ms, update the score with the 0.2 rate per second
    Meteor.setInterval(() => {
        Modules.client.users.papaClicked(this.currentRate.get());
        this.currentScore.set(Modules.client.users.getCurrentScore());
    }, 200);
});

Template.score.helpers({
    currentScore () {
        return Template.instance().currentScore.get();
    },
    currentRate () {
        return Template.instance().currentRate.get();
    }
});
