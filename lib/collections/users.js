Schema.User = new SimpleSchema({
	username: {
		type: String
		// For accounts-password, either emails or username is required, but not lib. It is OK to make this
		// optional here because the accounts-password package does its own validation.
		// Third-party login packages may not require either. Adjust this schema as necessary for your usage.
		//optional: false
	},
	emails: {
		type: Array,
		// For accounts-password, either emails or username is required, but not lib. It is OK to make this
		// optional here because the accounts-password package does its own validation.
		// Third-party login packages may not require either. Adjust this schema as necessary for your usage.
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
	score: {
		type: Number
	}
});

Meteor.users.attachSchema(Schema.User);