Template.papa.events({
    'click #thepapa': function (event, template) {
        event.preventDefault();
        Modules.client.users.papaClicked(1);
    }
});

Template.papa.onRendered(function(){
    $('#thepapa').draggable();
});