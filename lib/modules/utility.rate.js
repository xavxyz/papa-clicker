Modules.both.utility = {};

const calculateRate = () => {
  if (!Meteor.user()) {
    throw new Meteor.Error(403, 'You need to be logged in');
  }

  return Belongings.find({userId: Meteor.userId()}, {fields: {belongingId: 1, amount: 1}}).map((belonging) => {
    const bonus = Bonus.findOne({_id: belonging.belongingId});
    return !bonus ? 0 : bonus.production * belonging.amount;
  }).reduce((a, b) => a + b);
};

Modules.both.utility.rate = calculateRate;
