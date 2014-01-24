ExchangeRates.NumberField = Ember.TextField.extend({
  type: 'number',
  attributeBindings: ['min', 'max', 'step'],
  numericValue: function (key, v) {
    if (arguments.length === 1)
      return parseFloat(this.get('value'));
    else
      this.set('value', v !== undefined ? v+'' : '');
  }.property('value')
});