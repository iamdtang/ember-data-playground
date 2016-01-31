import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  pets: DS.hasMany('pet', { async: true }),
  company: DS.belongsTo('company', { async: true }),

  name: Ember.computed('first', 'last', function() {
    return this.get('first') + ' ' + this.get('last');
  }),
  address: DS.attr(),
  history: DS.attr(),
  skills: DS.hasMany('skill')
});
