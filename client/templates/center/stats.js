Template.stats.helpers({
    totalClicks: function() {
      return Modules.client.users.getCurrentScore()
    },
    bonuses: function() {

      let belongings = Belongings.find({userId: Meteor.userId()});
      let bonusArray = [];

      belongings.forEach(function(item) {
        let bonus = Bonus.findOne({_id: item.belongingId});
        if(bonus) {
          let obj = {
            belongingsAmount: item.amount,
            bonusName: bonus.name,
            bonusProduction: bonus.production,
            bonusPrice: bonus.price,
            bonusPerSec: item.amount * bonus.production
          }

          bonusArray.push(obj);
        } else {
          console.log("no any bonuses");
        }

      });
      return bonusArray;
    }
});
