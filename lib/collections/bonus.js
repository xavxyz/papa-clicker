Bonus = new Mongo.Collection('bonus');

Schema.Bonus = new SimpleSchema({
	name: {
		type: String
	},
	production: {
		type: Number
	},
	price: {
		type: Number
	}
});

Bonus.attachSchema(Schema.Bonus);