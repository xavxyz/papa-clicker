Template.clickers.helpers({
  clickers: function(){
    /*
    * THE BELOW IS TOO COMPLICATED!
    * Why not store a record for each bonus added in stead of modifying the amount field? Is much easier to display..
    */
    let cursorBonusId   = Template.instance().cursorBonusId;
    let numberOfCursors = Belongings.find({userId: this.userId, belongingId: cursorBonusId}).amount;
    let returnArr       = [];
    for (let i = 0; i < numberOfCursors; i++) {
      returnArr.push({});
    };
    return returnArr;

  }
});

Template.clickers.onCreated(function(){
  //JJT | Do we really need this here?
  this.cursorBonusId = Bonus.findOne({name: 'Cursor'});
})
