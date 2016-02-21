import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload.users.map((user) => {
      user.links = {
        pets: `/api/v1/users/${user.id}/pets`,
        company: `/api/v1/users/${user.id}/company`
      };
    });

    console.log(payload);

    return this._super(...arguments);
  }
});
