import Ember from 'ember';

export default Ember.Component.extend({
  firebase: Ember.inject.service(),
  actions:{
    signIn(){
      var params = {
        email:this.get('email'),
        password:this.get('password')
      };
    
      this.sendAction('signIn', params);
    }
  }
});
