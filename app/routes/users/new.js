import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {});
  },

  actions: {
    save(user) {
      user.save().then(() => {
        this.refresh();
      }).catch((adapterError) => {
        console.log(adapterError);
        console.log(user.get('errors'));
        console.log(user.get('errors').toArray());
        console.log(user.get('errors.first'));
      });

    }
  }
});
