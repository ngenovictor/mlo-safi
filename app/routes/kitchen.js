import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return this.store.query("order",{
      orderBy:"processed_status",
      equalTo:"pending"
    })
  },
  actions: {
    pendingOrder(order) {
      order.pendingOrder();
    },
    update(order, params){
      Object.keys(params).forEach(function (key) {
        if (params[key]!==undefined) {
          order.set(key,params[key]);
        }
      });
      order.save();
    }
   }
});
