Template.papa.events({
    'click #thepapa': function (event, template) {
        Modules.client.papaClicked();
    }
});

Template.papa.helpers({
    currentScore () {
        return Modules.client.getCurrentScore();
    }
});