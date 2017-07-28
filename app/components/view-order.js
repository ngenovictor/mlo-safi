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
       ('#myModal').modal('show');


      var item_id = "#"+item.id;
      $(item_id).show();
    },
    makeOrder(){
      var today = moment().format('YYYY MM D H:mm:ss');

      var params = {
        fooditems: this.get('orderBasket.items'),
        date_created:today,
        processed_status:"pending",
        total_price: this.get('totalPrice'),
        table_number:this.get('table'),
        customer_id:this.get('customer_id') ? this.get('customer_id') : "",
        tray_number:0,
      };
      if(params.table_number===undefined){
        console.log(params.table_number)
        var table_no = parseInt(prompt("You need to enter a table number"));
        params.table_number = table_no;
        if(confirm("Are you sure you want to place that order?")){
          this.sendAction('confirmOrder',params);
        }

      }else{
        if(confirm("Are you sure you want to place that order?")){
          this.sendAction('confirmOrder',params);
        }
      }
      for(var k =0; k<this.get('orderBasket').length;k++){
        var item_id = "#"+item.id;
        $(item_id).show();
      }
      this.get('orderBasket').empty();
    },
    review(){
       $('#myModal').modal('show');
    },
    callAssistance(){
      $('#assistancemodal').modal('show');
    },
    submitReview(){
      var params = {
        author:this.get('author'),
        title:this.get('title'),
        description:this.get('description')
      }
      this.sendAction('submitReview', params);
    },
    callAssistanceSubmit(){
      var params = {
        table:this.get('assistancetable'),
        name:this.get('assistancename')
      }
      var message = 'Assistance needed at table '+params.table+' by '+params.name+'Mlo SAfi.';
      var smsurl = 'https://rest.nexmo.com/sms/json?api_key=de9c4c39&api_secret=8d31b1e81a2d9d80&to=254721717141&from="NEXMO"&text="'+message+'"';
      $.ajax({
        url:smsurl
      })

    }
  }
});
