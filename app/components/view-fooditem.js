import Ember from 'ember';

export default Ember.Component.extend({
	orderBasket: Ember.inject.service(),

	actions: {
		addToCart(item) {
			this.get('orderBasket').add(item);
			var fooditem_id='#'+item.id;
			$(fooditem_id).hide();
		}
	}
});
