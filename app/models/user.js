import DS from 'ember-data';

export default DS.Model.extend({
	username:DS.attr(),
	password:DS.attr(),
	email:DS.attr(),
	type:DS.attr()
	orders:DS.hasMany('order',{async:true}),
	actions:DS.hasMany('staffaction', {async:true})
});
