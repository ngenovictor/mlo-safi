import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service(),
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
    },
    signIn(params){
      this.get('session').open('firebase',{
        provider:"password",
        email:params.email,
        password:params.password
      })
.catch(function(error){
  console.log("Error"+error)
  alert("Please enter the correct details!")

});
},
      signOut(){
        this.get('session').close();
      },

  }
});
