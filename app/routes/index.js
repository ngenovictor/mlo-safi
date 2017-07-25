import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      mainmeal:this.store.query('fooditem', {
        orderBy: 'category',
        equalTo: 'mainmeal',
      }),
      alcohol:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'alcohol'
      }),
      hotdrinks:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'hotdrinks'
      }),
      colddrinks:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'colddrinks'
      }),
      vegan:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'vegan'
      }),
      dessert:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'dessert'
      }),
      breakfast:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'breakfast'
      }),
      snacks:this.store.query('fooditem',{
        orderBy:'category',
        equalTo:'snacks'
      }),
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