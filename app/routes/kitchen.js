import Ember from 'ember';

export default Ember.Route.extend({
  model (params){
    this.store.query("order",{
      orderBy:"processed_status",
      equalTo:false
    })
  },
  actions: {
    destroyOrder(order) {
      order.destroyOrder();
    }
   }
});
