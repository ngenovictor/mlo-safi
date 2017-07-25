import Ember from 'ember';

export default Ember.Component.extend({
  orderBasket: Ember.inject.service(),
  orderBasket2:Ember.computed('orderBasket.items.@each',function(){

    this.get('orderBasket.items').reduce(function(mylist, item){
      if(mylist.includes(item)){
        item['quantity']+=1;

      }else{
        item['quantity']=1;

      }
      mylist.push(item);
      return mylist;



    },[]);


  }),
  totalPrice:Ember.computed('orderBasket.items.@each.price',function(){

    return this.get('orderBasket.items').reduce(function(sum,item){

      return sum+= parseInt(item.get('price'));

    },0);
  }),
  // actions: {
  //   removeItem(item) {
  //     this.get('orderBasket').removeObject(item);
  //   }
  //
  //   }

});
