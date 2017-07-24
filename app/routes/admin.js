import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('fooditem');
	},
	actions:{
		submitNewItem(params){
			var newFoodItem = this.store.createRecord('fooditem', params);
			newFoodItem.save();
			this.transitionTo('admin');
		}
	}
});
