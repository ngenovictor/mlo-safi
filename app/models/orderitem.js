import DS from 'ember-data';

export default DS.Model.extend({
	fooditem: DS.belongsTo('fooditem'),
	quantity: DS.attr(),
	totalprice: DS.attr(),
	date_created: DS.attr(),
	created_by: DS.belongsTo('user', {async:true}),
	order:DS.belongsTo('order', {async:true})
});
