import { get } from '@ember/object'
import BufferedProxy from 'ember-buffered-proxy/proxy';


export default function validationFactory(target, rootProperty, validationsMixin) {
  // we assume `this` is correct, as it has been called as a method
  if (arguments.length === 2) {
    return validationFactory(this, target, rootProperty)
  }

  // Assume now that we have 3 arguments

  let { owner } = target
  let content = get(target, rootProperty)

  return BufferedProxy.extend(
    owner.ownerInjection(),
    validationsMixin
  ).create({
    content
  })
}
