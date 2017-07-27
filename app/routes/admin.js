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
		submitNewItem(params){
			var newFoodItem = this.store.createRecord('fooditem', params);
			newFoodItem.save();
			this.transitionTo('admin');
		},
		editItem(params,fooditem){
			Object.keys(params).forEach(function (key) {
        if (params[key]!==undefined) {
          fooditem.set(key,params[key]);
        }
      });
      fooditem.save();
		},
		delete(fooditem){
			fooditem.destroyRecord();
      this.transitionTo('admin');
		}
	}
});
