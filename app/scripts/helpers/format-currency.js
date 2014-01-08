Ember.Handlebars.helper('formatCurrency', function(value, options) {
  if (!value) return '0.00';
  var result = value.toString().slice(0,4);
  if (result.length > 4) return result;
  
  var wholeNumber = result.match(/^(\d+)$/);
  if (wholeNumber) {
    result = result + '.00'
  }
  var singleDigitPastTheDecimal = result.match(/^(\d+)\.\d$/);
  if (singleDigitPastTheDecimal) {
    result = result + '0'
  }
  return result;
});