import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('fooditem',{path:'admin/fooditem/:fooditem'});
  this.route('kitchen');
  this.route('checkout');
  this.route('serveorder');
});

export default Router;
