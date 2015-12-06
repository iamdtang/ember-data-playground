import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id, { reload: true });
  },
  afterModel(model) {
    console.log(model.toJSON());
  }
});
