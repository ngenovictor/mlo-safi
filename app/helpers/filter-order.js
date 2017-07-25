import Ember from 'ember';

export function filterOrder(params) {
	var mylist = [];
  for(var i=0;i<params.length;i++){
  	mylist.pushObject(params[i])
  };
  for(var i=0;i<mylist.length;i++){
  	return mylist[i].name
  } 
}

export default Ember.Helper.helper(filterOrder);
