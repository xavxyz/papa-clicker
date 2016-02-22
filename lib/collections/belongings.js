Belongings = new Mongo.Collection('belongings');

Schema.Belongings = new SimpleSchema({
	userId: {
		type: String
	},
	belongingId: {
		type: String
	},
	amount: {
		type: Number,
		defaultValue: 0
	}
});

Belongings.attachSchema(Schema.Belongings);