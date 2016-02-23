Modules.both.utility = {};

let calculateRate = () => {

  const belongings  = Belongings.find({});
  const bonusList   = Bonus.find({});

  let theRate       = {};

  console.log(belongings.count());
  console.log(bonusList.count());
  console.log("Calling the calculate rate function");
  /*
  belongings.map(function(){
    //Get belonging id
    console.log(this);
    //Get production

    //Multiply production by amount

    //Put it into a named array (bonus id as key)
  });
  */
};

Modules.both.utility.rate = calculateRate;
