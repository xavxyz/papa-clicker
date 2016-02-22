Template.layout.onCreated(function () {
	this.autorun(() => {
		if (Meteor.user()) {
			this.subscribe('bonus.all');
		}
	});

	//Init the reactie var for the options state
	this.OptionsVisible = new ReactiveVar(false);
});

Template.layout.helpers({
	optionsVisible: function(){
		return Template.instance().OptionsVisible.get();
	}
});

Template.layout.events({
  "click #toggleOptions": function(e, template){
    e.preventDefault();
    template.OptionsVisible.set(!template.OptionsVisible.get());
  }
});
