import DS from 'ember-data';

export default DS.Model.extend({
	fooditem: DS.hasMany('fooditem',{async:true}),
	date_created: DS.attr(),
	processed_status: DS.attr(),
	total_price: DS.attr(),
	table_number: DS.attr(),
	customer_id: DS.attr(),
	tray_number: DS.attr(),
	quantity: DS.attr()
});
