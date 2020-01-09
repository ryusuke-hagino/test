objectFitImages();

$(function () {

  var headerHeight = $('.header-container').innerHeight();
  $('.main-visual').css('margin-top', headerHeight);

  $('.scrolltoform').click(function() {
    var formOffset = $('.contactform').offset().top-headerHeight;
        $('body,html').animate({
            scrollTop: formOffset
        }, 500);
        return false;
    });

  var $check = $('.panel-open');
  $check.on('click', function() {
    if ($(this).prop('checked')) {
      $check.prop('checked', false);
      $(this).prop('checked', true);
    }
  });

  var $backToTop = $('.backtotop');

  $backToTop.hide();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn(500);
    } else { $backToTop.fadeOut(500);
    }
  });

  $backToTop.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 'fast');
  });

});
