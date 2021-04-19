function validateEmail(t) {
  var a = !0,
    e = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return "" == $.trim(t) ? (a = !1) : e.test(t) || (a = !1), a;
}

// function validatePhone(t) {
//   var a = !0,
//     e = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
//   return "" == $.trim(t) ? (a = !1) : e.test(t) || (a = !1), a;
// }

function validateName(t) {
  var a = !0,
      e = /^[A-Za-z][A-Za-z\ \.]{0,30}$/;
  return "Name*" == t && (a = !1), "" == $.trim(t) && (a = !1), "" == isNaN(t) && (a = !1), e.test(t) || (a = !1), a
}

function validateQuoteName(t) {
  var a = !0,
    e = /^[A-Za-z ]{3,30}$/;
  return (
    "Your Name" == t && (a = !1),
    "" == $.trim(t) && (a = !1),
    "" == isNaN(t) && (a = !1),
    e.test(t) || (a = !1),
    a
  );
}

function validateMessage(t) {
  var a = !0,
    e = /\w/g;
  return (
    "" == $.trim(t) && (a = !1),
    "" == isNaN(t) && (a = !1),
    e.test(t) || (a = !1),
    a
  );
}

function validateQuoteMessage(t) {
  var a = !0,
    e = /^[ A-Za-z0-9_!@#$%^&*(),.?":{}[]|<>]*$/g;
  return (
    "" == $.trim(t) && (a = !1),
    "" == isNaN(t) && (a = !1),
    e.test(t) || (a = !1),
    a
  );
  
}

function addErrorClass(t) {
  0 == $(t).hasClass("text-cont-error") && $(t).addClass("text-cont-error");
}

var CaptchaCallback = function() {
  $("#recaptcha-up").length > 0 &&
    grecaptcha.render("recaptcha-up", {
      sitekey: "6LcAIJIUAAAAAMo3ePt-zjEtwZo8HC0ejQtR9OYE"
    }),
    $("#recaptcha-down").length > 0 &&
      grecaptcha.render("recaptcha-down", {
        sitekey: "6LcAIJIUAAAAAMo3ePt-zjEtwZo8HC0ejQtR9OYE"
      });
};
function testValidate() {
  $("#txtname").focus(function() {
    $("#div-name").removeClass("text-cont-error");
  }),
    $("#txtlname").focus(function() {
      $("#div-lname").removeClass("text-cont-error");
    }),
    $("#txtemail").focus(function() {
      $("#div-email").removeClass("text-cont-error");
    }),
    $("#txtphone").focus(function() {

      $("#div-phone").removeClass("text-cont-error");
    }),
    // $("#txtcompany").focus(function() {
    //   $("#div-comps").removeClass("text-cont-error");
    // }),
    $("#message").focus(function() {
      $("#div-message").removeClass("text-cont-error");
    }),
    $("#txtname").blur(function() {
      '' == $("#txtname").val() &&
        ((error = !0), addErrorClass("#div-name"));
    }),
    // $("#txtlname").blur(function() {
    //   '' == $("#txtlname").val() &&
    //     ((error = !0), addErrorClass("#div-lname"));
    // // }),
    //  $("#txtphone").blur(function() {
    //   '' == $("#txtphone").val() &&
    //     ((error = !0), addErrorClass("#div-phone"));
    // }),
    $("#solution").blur(function() {
       if($('#solution').val() == 0) {
          document.getElementById("div-solution").className += " select-validate"
       }
    }),
    // $("#txtcompany").blur(function() {
    //   0 == validateName($("#txtcompany").val()) &&
    //     ((error = !0), addErrorClass("#div-comp"));
    // }),
    $("#txtemail").blur(function() {
      0 == validateEmail($("#txtemail").val()) &&
        ((error = !0), addErrorClass("#div-email"));
    }),
    $("#message").blur(function() {
      0 == validateQuoteMessage($("#message").val()) &&
        ((error = !0), addErrorClass("#div-message"));
    });

    // $("#sltsolution").change(function () {
       
    //     $("#txtsolution").val(this.value);
    // });
}

$(document).ready(testValidate);

$(document).ready(function() {
  // $("#mirrorfly-form").ajaxForm({
  //   beforeSubmit: function() {
  //     var error = true;
  //     if (validateName($("#txtname").val()) == false) {
  //       0 == validateName($("#txtname").val()) &&
  //         ((error = !0), addErrorClass("#div-name"));
  //       error = false;
  //     }
  //     // if (validateQuoteMessage($("#txtcompany").val()) == false) {
  //     //   0 == validateQuoteMessage($("#txtcompany").val()) &&
  //     //     ((error = !0), addErrorClass("#div-comp"));
  //     //   error = false;
  //     // }
  //     if (validateName($("#txtlname").val()) == false) {
  //       0 == validateName($("#txtlname").val()) &&
  //         ((error = !0), addErrorClass("#div-lname"));
  //       error = false;
  //     }
  //     if (validateEmail($("#txtemail").val()) == false) {
  //       0 == validateEmail($("#txtemail").val()) &&
  //         ((error = !0), addErrorClass("#div-email"));
  //       error = false;
  //     }

  //     if ($("#txtphone").val() == '') {
       
  //       '' == $("#txtphone").val() &&
  //         ((error = !0), addErrorClass("#div-phone"));
  //       error = false;
  //     }
  //     if (validateQuoteMessage($("#message").val()) == false) {
  //       0 == validateQuoteMessage($("#message").val()) &&
  //         ((error = !0), addErrorClass("#div-message"));
  //       error = false;
  //     }
  //     if ($("#solution").val() == 0) {
  //       $("#solution").addClass("text-cont-error-select");
  //       $("#div-solution").addClass("select-validate");
  //       error = false;
  //     }
      
  //     // if (
  //     //   validateQuoteMessage($("#message").val()) != false &&
  //     //   validateEmail($("#txtemail").val()) != false &&
  //     //   validateQuoteMessage($("#message").val()) != false
  //     // ) {
  //     //   $("#ajx-loader").css("display", "inline-block");
  //     // }
  //     // if(error){

  //     // }

  //     return error;
  //   },
  //   success: function(message) {

  //     $("#contact-submit-btn").prop("disabled", true);
  //     var error = 0;
  //     if (message == 1) {
  //       statictimeout();
  //      // window.location.replace("acknowledgement.php");
  //     } else if (message == 2) {
  //       $("#contact_error").css("display", "block");
  //       $("#contact_error").text("An Error Occured. Please Try Again.");
  //       $("#ajx-loader").css("display", "none");
  //       error = 1;
  //     } else if (message == 5) {
  //       $("#contact_error").css("display", "block");
  //       $("#contact-submit-btn").removeAttr("disabled");
  //       $("#ajx-loader").css("display", "none");
  //       $("#contact_error").fadeOut(7000);
  //       error = 1;
  //     }
  //     if (error == 1) {
  //       $("#contact-submit-btn").removeAttr("disabled");
  //     }
  //     return false;
  //   }
  // });
});

    function handleValidation() {
      // validateCheck("changeButton");
    }

   function formSubmit() {
    validateCheck();
    //  let reCaptchaResponse = grecaptcha.getResponse();
      // if(reCaptchaResponse == '') {
      //     $("#contact_error").css("display", "block");
      //   }else{
      //     $("#contact_error").css("display", "none");        
          
      //   }
    
    }

     function recaptcha_callback() {
       
        // let reCaptchaResponse = grecaptcha.getResponse();
      //  if(reCaptchaResponse != '') {
      //       $("#contact_error").css("display", "none");
      //  }
     }

     function validateNumber(ev) {
          if (ev.type === "paste" || ev.type === "drop") {
            var textContent = (ev.type === "paste" ? ev.clipboardData : ev.dataTransfer).getData('text');
            return !isNaN(textContent) && textContent.indexOf(".") === -1;
        } else if (ev.type === "keydown") {
            if (ev.ctrlKey || ev.metaKey) {
                return true
            };
            var keysToAllow = [187, 8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
            return keysToAllow.indexOf(ev.keyCode) > -1;
        } else {
            return true
        }
     }


     function validateCheck(){
        // let reCaptchaResponse = grecaptcha.getResponse();
        // if(
        //  !validateName($('#txtname').val()) ||
        //  !validateName($('#txtlname').val()) ||
        //  !validateEmail($('#txtemail').val()) || 
        //  $('#txtphone').val() == '' ||
        //  $('#solution').val() == 0 ||
        //  $('#message').val() == ''
        //   ) {
        if(
          !validateName($('#txtname').val()) ||
          !validateEmail($('#txtemail').val()) || 
          $('#message').val() == ''
            ) {

            

                jQuery('html, body').animate({scrollTop: jQuery('#form-top').position().top-0}, 'slow');
                testValidate();
                
                
            
             let submitButton = document.getElementById("submit-button");
             submitButton.setAttribute('type', 'button');

            $("#txtname").blur()
            $("#txtlname").blur()
            $("#txtemail").blur()
            $("#txtphone").blur()
            $("#solution").blur()
            $("#message").blur()
              // $('#mirrorfly-form').trigger('submit');
        }

        // if(
        //  validateName($('#txtname').val()) && 
        //  validateName($('#txtlname').val()) && 
        //  validateEmail($('#txtemail').val()) && 
        //  $('#txtphone').val() != '' &&
        //  $('#country').val() != '' &&
        //  $('#solution').val() != 0 &&
        //  $('#message').val() != ''
         
        //  ) {
        if(
          validateName($('#txtname').val()) && 
          validateEmail($('#txtemail').val()) && 
          $('#message').val() != ''
          ) {
          


          $(".popup-name").val($('#txtname').val());
          $(".popup-email").val($('#txtemail').val());
          $("#txtname-discover").val($('#txtname').val());
          $("#txtlname-discover").val($('#txtlname').val());
          $("#txtphone-discover").val($('#txtphone').val());
          $("#txtemail-discover").val($('#txtemail').val());
          $("#country-discover").val($('#country').val());
          $("#geocountry-discover").val($('#geocountry').val());
          $("#txtcompany-discover").val($('#txtcompany').val());
          $("#solution-discover").val($('#solution').val());
          $("#message-discover").val($('#message').val());
          $('#popup-title').text("Thank You "+$('#txtname').val());
          



            let submitButton = document.getElementById("submit-button");         
            document.getElementById('div-country').style.display = 'inline-block';
            document.getElementById('div-geocountry').style.display = 'none';
            $("#country").val($("#geocountry option:selected").text());
            let buttonSubmit = document.getElementById('button-submit');
            buttonSubmit.className += " validate-button";
            document.getElementById("submit-button").innerHTML = "Contacting...";


            console.log('name:', $('#txtname').val());
            return
            submitButton.setAttribute('type', 'submit');
            $('#mirrorfly-form').trigger('submit');
          }
       

     }

    $('#solution').on('change', function() {
      let checkSolution = document.getElementById("div-solution");
        if($('#solution').val() == 0) {
            checkSolution.className += " select-validate";
        } else {
            checkSolution.classList.remove("select-validate");
        } 
    });

    $('#txtname,#txtlname').keypress(function(e){
       var key_codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];
       if (!($.inArray(e.which, key_codes) <= 0)) {
         e.preventDefault();
       }
    });

    function ispositive(val) {
      return val;
  }

    function discoverFormSubmit() {
      var feature = $('input[name="featurestype"]:checked').length > 0;
      var integration = $('input[name="integrationtype"]:checked').length > 0;
      var appcategory = $('input[name="appcategory"]:checked').length > 0;
      var appstatus = $('input[name="appstatus"]:checked').length > 0;
      var mirrorflyteam = $('input[name="mirrorflyteam"]:checked').length > 0;
      var userscount = $('input[name="userscount"]:checked').length > 0;
      var hostingpartner = $('input[name="hostingpartner"]:checked').length > 0;
      var launchduration = $('input[name="launchduration"]:checked').length > 0;
      var challenges = $('input[name="challenges"]:checked').length > 0;
      var formfields = [feature, integration, appcategory, appstatus, mirrorflyteam, userscount, hostingpartner, launchduration, challenges].every(ispositive);
      if (formfields == true) {
          let submitButton = document.getElementById("discover-submit-button");
          document.getElementById("discover-submit-button").innerHTML = "Submitting...";
          $('#discover-load').addClass("validate-button");
          window.onbeforeunload = false;
          submitButton.setAttribute('type', 'submit');
      } else {
        feature ? $("#featurestype").removeClass("discover-message") : $("#featurestype").addClass("discover-message");
        integration ? $("#integrationtype").removeClass("discover-message") : $("#integrationtype").addClass("discover-message");
        appcategory ? $("#appcategory").removeClass("discover-message") : $("#appcategory").addClass("discover-message");
        appstatus ? $("#appstatus").removeClass("discover-message") : $("#appstatus").addClass("discover-message");
        mirrorflyteam ? $("#mirrorflyteam").removeClass("discover-message") : $("#mirrorflyteam").addClass("discover-message");
        userscount ? $("#userscount").removeClass("discover-message") : $("#userscount").addClass("discover-message");
        hostingpartner ? $("#hostingpartner").removeClass("discover-message") : $("#hostingpartner").addClass("discover-message");
        launchduration ? $("#launchduration").removeClass("discover-message") : $("#launchduration").addClass("discover-message");
        challenges ? $("#challenges").removeClass("discover-message") : $("#challenges").addClass("discover-message");
          jQuery('.discovery-popup').animate({
              scrollTop: jQuery('#discovery-top').position().top - 0
          }, 'slow');
      }
  
  }
  
  function exitForm() {
       let buttonSubmit = document.getElementById('button-submit');
       buttonSubmit.className += "validate-button";
       $('#mirrorfly-form').attr('action', "/includes/discover_mail_us.php?mail_type=discover_us").submit();
      //  window.location.href = "https://www.mirrorfly.com/acknowledgement.php";  
  }
  
  function removemessage(id) {
      for (var i = 0; i < 100000; i++) clearTimeout(i);
      $('#' + id).removeClass("discover-message");
  }
  function statictimeout() {
   setTimeout(function(){ 
     $(".mirrorfly-menu").addClass("discovery-form-open");
   }, 2000);
  }
  

