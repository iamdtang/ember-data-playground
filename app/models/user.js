import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  pets: DS.hasMany('pet', { async: false }),
  company: DS.belongsTo('company', { async: false }),

  name: Ember.computed('first', 'last', function() {
    return this.get('first') + ' ' + this.get('last');
  })
});
