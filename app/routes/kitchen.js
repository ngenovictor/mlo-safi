import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      pending:this.store.query('order', {
        orderBy: 'processed_status',
        equalTo: 'pending',

      }),
      cooking:this.store.query('order', {
        orderBy: 'processed_status',
        equalTo: 'cooking',

      }),

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
    },
    serve(order, params){
      Object.keys(params).forEach(function (key) {
        if (params[key]!==undefined) {
          order.set(key,params[key]);
        }
      });
      order.save();
    }
   }
});
