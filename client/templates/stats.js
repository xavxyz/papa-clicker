Template.stats.helpers({
    totalClicks: function() {
      return Modules.client.users.getCurrentScore()
    }
});
