Schema.User = new SimpleSchema({
	username: {
		type: String,
		optional: true
	},
	emails: {
		type: Array
	},
	"emails.$": {
		type: Object
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean,
		optional: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	score: {
		type: Number
	}
});

Meteor.users.attachSchema(Schema.User);