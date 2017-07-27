import Ember from 'ember';

export function customChoice(params) {
  if(params=='coffee'){
  	return `coffee`;
  }else if(params=='ice-cream'){
  	return Ember.String.htmlSafe(`






  	`);
  }else{
  	return "404 error"
  }
}

export default Ember.Helper.helper(customChoice);
