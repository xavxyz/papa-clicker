Template.stats.helpers({
    totalClicks: function() {
      return Modules.client.users.getCurrentScore()
    },
    bonuses: function() {
      let belongings = Belongings.find({userId: Meteor.userId()});

      return belongings.map(function(belonging) {
        let bonus = Bonus.findOne({_id: belonging.belongingId});
        return !bonus ? null : {
          bonus: bonus,
          belonging: belonging,
          bonusPerSec: belonging.amount * bonus.production
        }
      }).filter((r) => r != null);
    }
});
