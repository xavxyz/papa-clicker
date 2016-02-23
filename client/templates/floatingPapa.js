Template.floatingPapa.events({
    'click #the_floating_papa': function (event, template) {
        event.preventDefault();
    }
});

Template.floatingPapa.onRendered(function(){
    $('#the_floating_papa').draggable();

    $('#mojo').droppable({
        drop: function (event, ui) {
            let left = Math.round(Math.random() * 1000);
            let top = Math.round(Math.random() * 1000);

            console.log(left);
            console.log(top);

            $('#the_floating_papa').css('left', left);
            $('#the_floating_papa').css('top', top);

            let score = Math.round(Math.random() * 1000);
            Modules.client.users.papaClicked(score);

            sAlert.success("Allright you've put the papa in the mojo! You've earned: " + score + "!");
        },
        activate: function (event, ui) {
            sAlert.warning("Good start, now drop it in the mojo!");
        }
    });
});