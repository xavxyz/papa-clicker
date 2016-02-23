Template.clickers.helpers({
  clickers: function(){
    let cursorBonusId   = Template.instance().cursorBonusId;
    if (cursorBonusId !== undefined) {
      let ownedCursor     = Belongings.findOne({userId: Meteor.userId(), belongingId: cursorBonusId});
      if(ownedCursor !== "undefined"){
        let userCursors = ownedCursor.amount;
        let returnArr       = [];
        for (let i = 0; i < userCursors; i++) {
          returnArr.push({});
        };
        return returnArr;
      }
    }
  }
});

Template.clickers.onCreated(function() {
  //JJT | Do we really need this here?
  const cursor = Bonus.findOne({name: 'Cursor'});

  if (cursor !== undefined) {
    this.cursorBonusId = cursor._id;
  }
});

Template.clickers.onRendered(function () {
  let firstClicker = this.$('.clicker').first();
  setInterval(function(){
    var currentClicker = this.$('.clicker.current');
    currentClicker.removeClass("current");
    let nextClicker = currentClicker.next();
    if(nextClicker.length == 0){
      nextClicker = firstClicker;
    }
    nextClicker.addClass("current").animate({"height":"20px"},100).animate({"height":"12px"});
  },1000);
});
