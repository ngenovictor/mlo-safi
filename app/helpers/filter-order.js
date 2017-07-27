import Ember from 'ember';

export function filterOrder(params) {
	var mylist = [];
	for(var i=0;i<params.length;i++){
		mylist.pushObject(params[i])
	}
	for(var j=0;j<mylist.length;j++){
		return mylist[j].name
	} 
}

export default Ember.Helper.helper(filterOrder);
