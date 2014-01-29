Ember.Handlebars.helper('formatCurrency', function(value, options) {
  return numeral(value).format('0,0.00');
});
