import Ember from 'ember';

export default Ember.Component.extend({
	firebase:Ember.inject.service(),
	orderBasket: Ember.inject.service(),
	actions: {
		addToCart(item) {
			this.get('orderBasket').add(item);
			var fooditem_id='#'+item.id;
			this.$(fooditem_id).hide();
		}
	}
});
