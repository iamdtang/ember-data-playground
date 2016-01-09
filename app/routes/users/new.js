import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {});
  },

  actions: {
    save(user) {
      user.save().then(() => {
        this.refresh();
      }).catch((u) => { // u is an instance of DS.AdapterError
        console.log('error!!!');
        console.log('DS.AdapterError', u);
        console.log('user', user);
        console.log('isValid', user.get('isValid'));
        console.log('user.errors', user.get('errors'));
        console.log('toArray', user.get('errors').toArray());
        // console.log('user', user, user.toJSON());
      });

    }
  }
});
