import Ember from 'ember';

export default Ember.Component.extend({
	isCreateItemForm:false,
	category:null,
	actions:{
		showForm(){
			this.set('isCreateItemForm', true);
		},
		cancel(){
			this.set('isCreateItemForm', false);
		},
		selectCategory(value){
			this.set('category', value);
		},
		submit(){
			var params = {
				name: this.get('name'),
				description: this.get('description'),
				price: parseInt(this.get('price')),
				category: this.get('category'),
				preparation_time: this.get('preparation_time'),
				image: this.get('image'),

			};
			console.log(params);
			this.sendAction('submitNewItem', params);
			this.set('isCreateItemForm', false);
		}
	}
});
