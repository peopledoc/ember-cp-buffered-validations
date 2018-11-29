import ValidationBuilder from 'ember-cp-buffered-validations'
import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'
import { validator, buildValidations } from 'ember-cp-validations'

const Validations = buildValidations({
  firstName: [
    validator('presence', true),
  ]
})

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks)

  test('it is valid by default with valid data', function(assert) {
    this.myProp = { firstName: 'Mathieu' }
    let subject = ValidationBuilder(this, 'myProp', Validations)
    assert.ok(subject.validations.isValid)
  })

  test('it is invalid if data does not match validations', function(assert) {
    this.myProp = { }
    let subject = ValidationBuilder(this, 'myProp', Validations)
    assert.notOk(subject.validations.isValid)
  })

  test('data is not changed on the original model', function(assert) {
    this.myProp = { firstName: 'Mathieu' }
    let subject = ValidationBuilder(this, 'myProp', Validations)
    assert.ok(subject.validations.isValid, 'the state is initially valid')
    subject.set('firstName', '')
    assert.notOk(subject.validations.isValid, 'the current state is invalid')
    assert.notEqual(subject.get('firstName'), this.get('myProp.firstName'), 'the buffer should hold the values')
  })

})

