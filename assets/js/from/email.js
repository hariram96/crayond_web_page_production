$(document).ready(function () {
  jQuery('#em-user-det').validate({
    ignore: [],
    rules: {
      email_address: {
        required: true,
        email: true
      },
    },
    // invalidHandler: function (event, validator) {
    //   if($(window).width() < 428) {

    //   $('#errorInvalid').css('top', '38%');
    //   }
    //   else{
    //   $('#errorInvalid').css('top', '50%');       
    //   }
    // },
    // success: function(label) {
    //   console.log("sdsdsdsd")
    // },
    submitHandler: function (form) {
      
      App.formSubmit($("#e_mail").val());
    }

  });
})