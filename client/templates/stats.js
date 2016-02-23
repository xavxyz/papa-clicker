Template.stats.helpers({
    totalClicks: function() {
      return Modules.client.users.getCurrentScore()
    },
    bonuses: function() {

      let belongings = Belongings.find({userId: Meteor.userId()});
      console.log("belongings", belongings);
      let bonusArray = [];

      belongings.forEach(function(item) {
        let bonus = Bonus.findOne({_id: item.belongingId});
        console.log("bonus", bonus);
        if(bonus) {
          let obj = {
            belongingsAmount: item.amount,
            bonusName: bonus.name,
            bonusProduction: bonus.production,
            bonusPrice: bonus.price
          }

          bonusArray.push(obj);
        } else {
          console.log("no any bonuses");
        }

      });
      console.log("bonusarray", bonusArray);
      return bonusArray;
    }
});