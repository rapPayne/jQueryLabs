$(function () {
  $('#name').focus();
  $('[name="payment"]').change(function () {
    if ($(this).val() === "paypal") {
      $('#creditCard').slideUp('fast');
    } else {
      $('#creditCard').slideDown('fast');
    }
  });
  $('#sameAsBilling').change(function () {
    if ($(this).prop('checked')) {
      $('#shipName').val($('#name').val());
      $('#shipAddress').val($('#address').val());
      $('#shipCity').val($('#city').val());
      $('#shipState').val($('#state').val());
      $('#shipZip').val($('#zip').val());
      $('[name="shipCountry"]').val($('[name="country"]').val());
    }
  });
});