Template.score.helpers({
    currentScore () {
        return Modules.client.users.getCurrentScore();
    }
});
