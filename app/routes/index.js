import Ember from 'ember';

export default Ember.Route.extend({
  // model(){
  //   return this.store.findAll('fooditem')
  // },
  model() {
    return Ember.RSVP.hash({
      mainmeal:this.store.query('fooditem', {
        orderBy: 'category',
        equalTo: 'mainmeal',

      }),
      alcohol:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'alcohol'
      })

    })

  },
  actions:{
    confirmOrder(params){
      var newOrder = this.store.createRecord('order', params);
      newOrder.save();
      this.transitionTo('index');
    }
  }
});
