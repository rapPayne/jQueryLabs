$(function () {
  $('#signup').validate({
    rules: {
      // Put all rules here
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 8
      },
      confirm_password: {
        equalTo: "#password"
      },
      hobby: {
        required: true
      },
      spam: {
        required: true
      },
      pickle: {
        required: true
      }
    },
    messages: {
      // Put all error messages here
      email: {
        required: "We really need your email",
        email: "That doesn't look like an email."
      }
    }
  });
});