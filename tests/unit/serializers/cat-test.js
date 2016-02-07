import { moduleForModel, test } from 'ember-qunit';
import Pretender from 'pretender';

moduleForModel('cat', 'Unit | Serializer | cat', {
  // Specify the other units that are required for this test.
  needs: ['serializer:cat'],
  beforeEach() {
    this.server = new Pretender(function() {
      this.post('/cats', function() {
        let response = {
          cat: { id: 1, name: 'frisky' }
        };

        return [ 200, {}, JSON.stringify(response) ];
      });
    });
  },
  afterEach() {
    this.server.shutdown();
  }
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});


test('save() sends the data formatted correctly', function(assert) {
  assert.expect(1);
  let store = this.store();

  Ember.run(() => {
    let cat = store.createRecord('cat', {
      name: 'frisky'
    });

    cat.save().then(() => {
      let [ request ] = this.server.handledRequests;
      let requestPayload = JSON.parse(request.requestBody);
      assert.deepEqual(requestPayload, {
        cats: [
          { name: 'frisky' }
        ]
      });
    });
  });
});
