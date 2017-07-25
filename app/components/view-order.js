import Ember from 'ember';

export default Ember.Component.extend({
  orderBasket: Ember.inject.service(),
  totalPrice:Ember.computed('orderBasket.items.@each.price',function(){

    return this.get('orderBasket.items').reduce(function(sum,item){

      return sum+= parseInt(item.get('price'));

    },0);
  }),
  actions: {
    removeItem(item) {
      this.get('orderBasket').remove(item);
    },


    makeOrder(){

      var params = {
        fooditems: this.get('orderBasket.items'),
        date_created:"today",
        processed_status:false,
        total_price: this.get('totalPrice'),
        table_number:this.get('table'),
        customer_id:this.get('customer_id'),
        tray_number:0,
      };
      this.sendAction('confirmOrder',params);
    }
  }

});
