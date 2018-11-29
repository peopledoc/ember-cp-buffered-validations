ember-cp-buffered-validations
==============================================================================

So far, using ember-cp-validations require to inject validations in the to-be-validated object.
This may be useful, but when working with DS.Model, it imposes a single validation abstraction.

This addon proposes to:
* decouple the validator from the "validatee"
* Applies changes to a proxy object that will carry the validation model
* Keep using ember-cp-validations

```js
export default DS.Model.extend(buildValidations(...), {
  // ...
})

//
// what we currently have
//
let model = this.store.findRecord('my-type', myId);
console.log(model.isValid)

// or

export default Component.extend({
  model: null // will be given at runtime
  isEverythingOk: reads('model.isValid')
})

//
// What we want
//

function doYourMagic() {
  this === ?
}

let ThingValidations = buildValidations(...)

export default Component.extend({
  model: null // will be given at runtime
  validatedModel2: computed('thingTobeValidated', function () {
    return doYourMagic(this, 'thingTobeValidated', ThingValidations) // <== a proxy with validations
  })
})

```

Installation
------------------------------------------------------------------------------

```
ember install ember-cp-buffered-validations
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cp-buffered-validations`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
