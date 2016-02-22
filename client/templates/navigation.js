Template.navigation.helpers({
  optionsVisible: function(){
    return Template.instance().OptionsVisible.get();
  }
});

Template.navigation.events({
  "click #toggleOptions": function(e, template){
    e.preventDefault();
    template.OptionsVisible.set(!template.OptionsVisible.get());
  }
})


Template.navigation.onCreated(function (){
     this.OptionsVisible = new ReactiveVar(false);
});
