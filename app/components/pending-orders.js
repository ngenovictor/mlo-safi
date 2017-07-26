import Ember from 'ember';

export default Ember.Component.extend({
	isCreatependingOrderForm:false,
	processedstatus:false,
	actions:{
		showForm(){
			this.set('isCreatependingOrderForm', true);
		},
    cancel(){
			this.set('isCreatependingOrderForm', false);
		},
    selectOrder(order){
      var params = {
        processed_status: "cooking",
        fooditem:this.get('fooditem'),
      	date_created:this.get('fooditem'),
      	total_price:this.get('fooditem'),
      	table_number:this.get('fooditem'),
      	customer_id:this.get('fooditem'),
      	tray_number:this.get('fooditem'),
      	quantity:this.get('fooditem'),
      };
      if(confirm("Are you sure")){
        this.sendAction('update', order, params);
      };

    },
		serveOrder(order){
      var params = {
        processed_status: "serve",
        fooditem:this.get('fooditem'),
      	date_created:this.get('fooditem'),
      	total_price:this.get('fooditem'),
      	table_number:this.get('fooditem'),
      	customer_id:this.get('fooditem'),
      	tray_number:this.get('fooditem'),
      	quantity:this.get('fooditem'),
      };
      if(confirm("Are you sure")){
        this.sendAction('serve', order, params);
      };

    }

	}
});


	// name: DS.attr(),
	// description: DS.attr(),
	// price: DS.attr(),
	// category: DS.attr(),
	// preparation_time: DS.attr()
	// image
