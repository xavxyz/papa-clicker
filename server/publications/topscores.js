Meteor.publish('Topscores', function() {
    return Meteor.users.find({}, {"fields": {"score": 1, "username": 1}});
});