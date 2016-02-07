import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize(snapshot) {
    return {
      cats: [
        { name: snapshot.attr('name') }
      ]
    };
  },
  serializeIntoHash(data, type, record, options) {
    delete data.cat;
    Ember.merge(data, this.serialize(record, options));
  }
});
