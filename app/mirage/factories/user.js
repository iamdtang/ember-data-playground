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
  company: faker.random.number,
  address: function() {
    return {
      street: '1334 main street',
      zip: 90003
    };
  },
  history: function() {
    return [
      { url: 'http://google.com', time: '2015-10-01T20:12:53Z' },
      { url: 'http://apple.com',  time: '2014-10-01T20:12:53Z' },
      { url: 'http://yahoo.com',  time: '2013-10-01T20:12:53Z' }
    ];
  },
  skills: function() {
    return [
      { id: 1, name: 'JavaScript' },
      { id: 3, name: 'PHP' },
      { id: 9, name: 'Teaching' }
    ]
  }
});
