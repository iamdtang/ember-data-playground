/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  age: 20,                              // numbers
  tall: true,                           // booleans

  email: function(i) {                  // and functions
    return 'person' + i + '@test.com';
  },

  first: faker.name.firstName,       // using faker
  last: faker.name.firstName,
  zipCode: faker.address.zipCode,
  pets: function(i) {
    return [1, 3, 4];
  },
  company: faker.random.number
});
