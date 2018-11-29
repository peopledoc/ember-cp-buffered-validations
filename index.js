'use strict';

module.exports = {
  name: require('./package').name
};

/*
UserValidation = buildValidations({ // <== comes from ember-cp-v
  'username': validator()
})

UserComponent = Component.extend(MagicValidation, {
  model: null,
  validatedModel: computed('model', function() {
    return this.validatedObjectFactory('model', UserValidation)
  })
})

{{user-component
  model=myUser
}}
*/
