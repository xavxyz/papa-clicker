Template.floatingPapa.events({
    'click #the_floating_papa': function (event, template) {
        event.preventDefault();
        //Modules.client.users.papaClicked(1);
    }
});

Template.floatingPapa.onRendered(function(){
    $('#the_floating_papa').draggable();

    $('#mojo').droppable({
        activate: function (event, ui) {
            sAlert.success("Allright you've put the papa in the mojo!");
        }
    });
});