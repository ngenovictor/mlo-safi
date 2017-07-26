import DS from 'ember-data';

export default DS.Model.extend({
    fooditems: DS.hasMany('orderitem', {async:true}),
    date_created: DS.attr(),
    processed_status: DS.attr(),
    total_price: DS.attr(),
    table_number: DS.attr(),
    customer: DS.belongsTo('user'),
    tray_number: DS.attr(),
    // staffactions: DS.hasMany('staffaction', {async:true})
});
