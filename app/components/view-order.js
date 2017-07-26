import Ember from 'ember';
import moment from 'moment'; 

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
    showmodal(){
       $('#myModal').modal('show');
    },
    makeOrder(){
      var today = moment().format('YYYY MM D H:mm:ss');

      var params = {
        fooditems: this.get('orderBasket.items'),
        date_created:today,
        processed_status:"pending",
        total_price: this.get('totalPrice'),
        table_number:this.get('table'),
        customer_id:this.get('customer_id'),
        tray_number:0,
      };
      if(confirm("Are you sure you want to place that order?")){
        this.sendAction('confirmOrder',params);
      }
    }
  }
});
