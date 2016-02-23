Upgrades = new Mongo.Collection('upgrades');

Schema.Upgrades = new SimpleSchema({
	name: {
		type: String
	},
	bonusId: {
		type: String
	},
	value: {
		type: Number
	},
	price: {
		type: Number
	}
});

Upgrades.attachSchema(Schema.Upgrades);