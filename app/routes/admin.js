import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.query('fooditem',{
			limitToLast:5
		});
	},
	actions:{
		submitNewItem(params){
			var newFoodItem = this.store.createRecord('fooditem', params);
			newFoodItem.save();
			this.transitionTo('admin');
		}
	}
});
