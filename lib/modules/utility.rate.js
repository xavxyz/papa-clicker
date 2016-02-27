Modules.both.utility = {};

const calculateRate = () => {
  if (!Meteor.user()) {
    throw new Meteor.Error(403, 'You need to be logged in');
  }

  let basicRates = [],
      ratesSum = 0;

  Belongings.find({userId: Meteor.userId()}, {fields: {belongingId: 1, amount: 1}}).forEach((belonging) => {
    // is the belonging a bonus ?
    // bonus query is done 6 times
    const bonus = Bonus.findOne({_id: belonging.belongingId});
    if (bonus !== undefined) {
      basicRates.push(_getRateByBonus(bonus, belonging.amount));
      ratesSum += _.last(basicRates).rate;
    }
  });

  return ratesSum;
};

const _getRateByBonus = (bonus, amount) => {
  return {
    bonusId: bonus._id,
    rate: bonus.production * amount
  }
};

Modules.both.utility.rate = calculateRate;
