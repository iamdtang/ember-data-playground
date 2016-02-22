import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  urlForFindHasMany (id, modelName) {
    if (modelName === 'pets') {
      return `/api/v1/users/${id}/pets`;
    }
  }
  // normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
  //   payload.users.map((user) => {
  //     user.links = {
  //       pets: `/api/v1/users/${user.id}/petsfff`,
  //       company: `/api/v1/users/${user.id}/companyffff`
  //     };
  //   });
  //
  //   console.log(payload);
  //
  //   return this._super(...arguments);
  // }
});
