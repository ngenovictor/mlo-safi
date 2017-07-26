import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
	quantity: DS.attr(),
	price: DS.attr(),
	category: DS.attr(),
	created_by: DS.belongsTo('user', {async:true}),
	order:DS.belongsTo('order', {async:true})
});
