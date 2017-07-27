import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.Object.create({identification:'', password:''});
  },
  setupControler(controller,model){
    controller.set('credentials',model)
  },

  actions:{
    authenticate(credentials){
      this.get('session').authenticate('simple-auth-authenticator.jwt',credentials)
    }

  }
});
