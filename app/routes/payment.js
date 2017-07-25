import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.query('order', {
        orderBy: 'processed_status',
        equalTo: 'pay',

  })
},
actions:{
  save(order){
    var params = {
      processed_status: "done",
      fooditem:this.get('fooditem'),
      date_created:this.get('fooditem'),
      total_price:this.get('fooditem'),
      table_number:this.get('fooditem'),
      customer_id:this.get('fooditem'),
      tray_number:this.get('fooditem'),
      quantity:this.get('fooditem'),
    };
      Object.keys(params).forEach(function (key) {
        if (params[key]!==undefined) {
          order.set(key,params[key]);
        }
      });
      order.save();


  },
}
});
