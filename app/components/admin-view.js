
  import Ember from 'ember';

  export default Ember.Component.extend({
    showEditForm: false,
    actions:{
      editForm(){
        this.set('showEditForm',true)
      },
      selectCategory(value){
  			this.set('category', value);
  		},
      cancel(){
  			this.set('showEditForm', false);
  		},
      submit(fooditem){
  			var params = {
  				name: this.get('name'),
  				description: this.get('description'),
  				price: this.get('price'),
  				category: this.get('category'),
  				preparation_time: this.get('preparation_time'),
  				image: this.get('image')
  			};
      
  			this.sendAction('editItem', params,fooditem);
  			this.set('showEditForm', false);
  		}
    }

  });
