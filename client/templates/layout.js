Template.layout.onCreated(function () {
	this.autorun(() => {
		if (Meteor.user()) {
			this.subscribe('Bonus.all');
			this.subscribe('Upgrades.notOwned');
			this.subscribe('Belongings.owned');
		}
	});

	//Init the reactie var for the options state
	this.OptionsVisible = new ReactiveVar(false);
	//Init the reactie var for the stats state
	this.StatsVisible = new ReactiveVar(false);
});

Template.layout.helpers({
	optionsVisible: function(){
		return Template.instance().OptionsVisible.get();
	},
	statsVisible: function(){
		return Template.instance().StatsVisible.get();
	},
	bonusList () {
		return Bonus.find({}).fetch();
	},
	upgradesList () {
		return Upgrades.find({}).fetch();
	},
	topScorers() {
		return Meteor.users.find();
	}
});

Template.layout.events({
  "click #toggleOptions": function(e, template){
    e.preventDefault();
    template.OptionsVisible.set(!template.OptionsVisible.get());
  },
	"click #toggleStats": function(e, template){
    e.preventDefault();
    template.StatsVisible.set(!template.StatsVisible.get());
  }
});
