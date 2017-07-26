import Ember from 'ember';

export default Ember.Component.extend({
  mainmealview:true,
  hotdrinksview:false,
  colddrinksview:false,
  veganview:false,
  dessertview:false,
  snacksview:false,
  alcoholview:false,
  breakfastview:false,
  actions:{
    mainmeal(){

      this.setProperties({'mainmealview':true,'hotdrinksview':false,'colddrinksview':false,
      'veganview':false,'dessertview':false,'snacksview':false,'alcoholview':false,'breakfastview':false,})
    },
    hotdrinks(){

      this.setProperties({'mainmealview':false,'hotdrinksview':true,'colddrinksview':false,
      'veganview':false,'dessertview':false,'snacksview':false,'alcoholview':false,'breakfastview':false,})
    },
    alcohol(){
      this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':false,
      'veganview':false,'dessertview':false,'snacksview':false,'alcoholview':true,'breakfastview':false,})

  },
    colddrinks(){
      this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':true,
      'veganview':false,'dessertview':false,'snacksview':false,'alcoholview':false,'breakfastview':false,})

  },
  breakfast(){
    this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':false,
    'veganview':false,'dessertview':false,'snacksview':false,'alcoholview':false,'breakfastview':true,})

  },
  vegan(){
    this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':false,
    'veganview':true,'dessertview':false,'snacksview':false,'alcoholview':false,'breakfastview':false,})

  },
  snacks(){
    this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':false,
    'veganview':false,'dessertview':false,'snacksview':true,'alcoholview':false,'breakfastview':false,})

  },
  dessert(){
    this.setProperties({'mainmealview':false,'hotdrinksview':false,'colddrinksview':false,
    'veganview':false,'dessertview':true,'snacksview':false,'alcoholview':false,'breakfastview':false,})

  },
    }

});
