Stuffs = new Mongo.Collection('stuffs');

Schema.Stuffs = new SimpleSchema({
	userId: {
		type: String
	},
	// Bonus or Upgrades
	collection: {
		type: String
	},
	stuffId: {
		type: String
	},
	amount: {
		type: Number
	}
});

Stuffs.attachSchema(Schema.Stuffs);