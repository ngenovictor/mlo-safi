import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyOrderl(order) {
      order.destroyOrder();
      this.transitionTo('index');
    }
  }
  });
