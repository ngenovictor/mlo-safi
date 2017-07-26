import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
	price: DS.attr(),
	category: DS.attr(),
	image: DS.attr(),
	preparation_time: DS.attr(),
	orderitem: DS.belongsTo('orderitem'),
	quantity: DS.attr()
});
