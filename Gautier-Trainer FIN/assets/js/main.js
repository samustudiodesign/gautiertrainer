 function resizeWindow() {
      let widthsidebar = $(window).width();
      
      if (widthsidebar >= 768) {
        $('.sidebar__navbar').addClass('active');
      }else{
        $('.sidebar__navbar').removeClass('active');
      }
    }

    $(window).resize(function () {
      resizeWindow();
    });

    $('.button-movil-dropdownMenu-notifi').click(function () {
      $('html').toggleClass('overflow-hidden');
    });

    $('.navabar__menu').click(function () {
      $('.sidebar__navbar').toggleClass('active');
    });

    $('.sidebar__navbar.active span').click(function () {
      $('.sidebar__navbar').toggleClass('active');
    });


    $(".navbar-toggler").on("click", function () {
     $('.navbar').toggleClass('expan');
    });


    $(".close-alertbar").on("click", function () {
     $('.alertbar-orange').addClass('d-none');
    });
    $(".close-alertbar2").on("click", function () {
      $('.alertbar-yellow').addClass('d-none');
     });

     $(".MenuIcon").on("click", function () {
      $('.lista-canvas').addClass('open'),
      $('html').addClass('overflow-hidden'),
      $(".notifi-sidebar__top").css("z-index", "1");
     });

     $(".MenuIcon-close").on("click", function () {
      $('.lista-canvas').removeClass('open'),
      $('html').removeClass('overflow-hidden'),
      $(".notifi-sidebar__top").css("z-index", "100");
     });


    $(".alert-dashboard").each(function() {
      $(this).closest(".tab-pane").css("overflow-y", "initial");
    });



    $(".view-more__description").on("click", function () {
      $('.consejos-videos__content').toggleClass('consejos-videos__contentAdd');
      $(".view-more__description").toggleClass('view-more-open');
     });

     $(".gt-day").on("click", function () {
      $('.gt-day').removeClass('selected'),
      $(this).toggleClass('selected');
     });



     
