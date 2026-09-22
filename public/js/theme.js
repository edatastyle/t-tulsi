// js Document

    // Project:        Ttulsi - Health Supplement and Landing Page HTML.
    // Version:        1.0
    // Last change:    18/04/2019.


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-main-header'),
          scroll = $(window).scrollTop();
          if (scroll >= 80) sticky.addClass('sticky');
          else sticky.removeClass('sticky');

        });

        // ------------------------- Mobile Dropdown Submenu
        if($(".navbar").length) {
          $('.navbar li.dropdown-holder').append(function () {
            return '<i class="icon fa fa-angle-down"></i>';
          });
          $('.navbar li.dropdown-holder .icon').on('click', function () {
            $(this).parent('li').children('ul').slideToggle();
          });
        }


        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        


        // -------------------- From Bottom to Top Button
        //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });


        //---------------------- Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });


        // ------------------------ Aside Menu
        if($("#theme-menu-list").length) {
          $('#theme-menu-list a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 0)
                }, 1000, "easeOutCubic");
                return false;
              }
            }
          });
        }

        // Closes responsive menu when a scroll trigger link is clicked
        $('.navbar-nav .nav-link').on('click', function(){
          $('.navbar-collapse').collapse('hide');
        });


        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: 'body',
          offset: 20
        });
          



        // ------------------------------- Team Slider
        var masterslider = new MasterSlider();
          masterslider.control('slideinfo'  ,{ autohide:false, overVideo:true, dir:'h', align:'bottom',inset:false , margin:10   });
          // slider setup
          masterslider.setup("team-slider", {
            width           : 569,
            height          : 479,
            minHeight       : 0,
            space           : 0,
            start           : 1,
            grabCursor      : true,
            swipe           : true,
            mouse           : true,
            keyboard        : true,
            layout          : "partialview",
            wheel           : false,
            autoplay        : true,
            instantStartLayers:false,
            loop            : true,
            shuffle         : false,
            preload         : 4,
            heightLimit     : true,
            autoHeight      : false,
            smoothHeight    : true,
            endPause        : false,
            overPause       : true,
            fillMode        : "fill",
            centerControls  : true,
            startOnAppear   : false,
            layersMode      : "center",
            autofillTarget  : "",
            hideLayers      : false,
            fullscreenMargin: 0,
            speed           : 20,
            dir             : "h",
            parallaxMode    : 'swipe',
            view            : "wave"
          });



          // ------------------------------ Client Slider 
          var cliSlider = $ (".client-slider");
            if(cliSlider.length) {
                cliSlider.owlCarousel({
                  loop:true,
                  nav:false,
                  dots:true,
                  autoplay:true,
                  margin:5,
                  autoplayTimeout:4000,
                  autoplaySpeed:1000,
                  lazyLoad:true,
                  singleItem:true,
                  responsive:{
                      0:{
                          items:1
                      },
                      575:{
                          items:2
                      },
                      992:{
                          items:3
                      }
                  }
              });
            }



            // ------------------------------ Client Slider 
            var blgSlider = $ (".blog-slider");
              if(blgSlider.length) {
                  blgSlider.owlCarousel({
                    loop:true,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    margin:30,
                    autoplayTimeout:4000,
                    autoplaySpeed:1000,
                    lazyLoad:true,
                    singleItem:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        575:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    }
                });
            }



            // ------------------------------ Client Slider 
            var pkgSlider = $ (".packeg-slider");
              if(pkgSlider.length) {
                  pkgSlider.owlCarousel({
                    loop:true,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    margin:5,
                    autoplayTimeout:4000,
                    autoplaySpeed:1000,
                    lazyLoad:true,
                    singleItem:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        575:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    }
                });
              }




        // --------------------------------- Contact Form
        // init the validator
        // validator files are included in the download package
        // otherwise download from http://1000hz.github.io/bootstrap-validator
        if($("#contact-form").length) {
          $('#contact-form').validator();
          // when the form is submitted
          $('#contact-form').on('submit', function (e) {
              // if the validator does not prevent form submit
              if (!e.isDefaultPrevented()) {
                  var url = "inc/contact.php";
                  // POST values in the background the the script URL
                  $.ajax({
                      type: "POST",
                      url: url,
                      data: $(this).serialize(),
                      success: function (data)
                      {
                          // data = JSON object that contact.php returns
                          // we recieve the type of the message: success x danger and apply it to the
                          var messageAlert = 'alert-' + data.type;
                          var messageText = data.message;
                          // let's compose Bootstrap alert box HTML
                          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                          // If we have messageAlert and messageText
                          if (messageAlert && messageText) {
                              // inject the alert to .messages div in our form
                              $('#contact-form').find('.messages').html(alertBox);
                              // empty the form
                              $('#contact-form')[0].reset();
                          }
                      }
                  });
                  return false;
              }
          });
        }

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


          // ------------------------------- AOS Animation 
          AOS.init({
            duration: 1000,
            mirror: true
          });


    });
    
})(jQuery);