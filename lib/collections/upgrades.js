Upgrades = new Mongo.Collection('upgrades');

Schema.Upgrades = new SimpleSchema({
	name: {
		type: String
	},
	bonusId: {
		type: String
	},
	operation: {
		type: String
	},
	value: {
		type: Number
	}
});

Upgrades.attachSchema(Schema.Upgrades);