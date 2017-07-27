import DS from 'ember-data';

export default DS.Model.extend({
	author:DS.attr(),
	title:DS.attr(),
	description:DS.attr()

});
