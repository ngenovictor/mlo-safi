import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit(){
      var credentials = {
        identification:this.get('identification'),
        password:this.get('password')
      };
      this.sendAction('action', credentials);
    }
  }
});
