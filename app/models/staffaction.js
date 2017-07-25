import DS from 'ember-data';

export default DS.Model.extend({
	action:DS.attr(),
	user: DS.belongsTo('user', {async:true}),
	order: DS.belongsTo('order')
	date_made:DS.attr()
});
