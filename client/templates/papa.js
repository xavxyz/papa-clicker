Template.papa.events({
    'click #thepapa': function (event, template) {
        event.preventDefault();
        Modules.client.users.papaClicked(1);
    }
});