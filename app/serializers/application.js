import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForRelationship(key, relationship) {
    console.log(key, relationship);
    if (relationship === 'belongsTo') {
      return `${key}_id`;
    }
  }
});
