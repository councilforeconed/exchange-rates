ExchangeRates.NumberField = Ember.TextField.extend({
  type: 'number',
  attributeBindings: ['min', 'max', 'step'],
  classNames: ['form-control']
});