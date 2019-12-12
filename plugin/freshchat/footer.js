    window.fcWidget.init({
        token: "9252e806-e958-4627-945f-57407a9a7a1a",
        host: "https://wchat.freshchat.com"
      });

      $( "#flash_opport" ).mouseover(function()
      {
          $(this).addClass("flash1");
          $(this).removeClass("flash");
      });

   $( "#flash_opport" ).mouseout(function()
      {
          $(this).removeClass("flash1");
          $(this).addClass("flash");
      });

  // Make sure fcWidget.init is included before setting these values

  // To set unique user id in your system when it is available
  window.fcWidget.setExternalId("john.doe1987");

  // To set user name
  window.fcWidget.user.setFirstName("John");

  // To set user email
  window.fcWidget.user.setEmail("john.doe@gmail.com");

  // To set user properties
  window.fcWidget.user.setProperties({
    plan: "Estate",                 // meta property 1
    status: "Active"                // meta property 2
  });