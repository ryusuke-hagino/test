$(function () {

  // header

  var $menuSp = $('.header-menu-sp');
  var $menuBtn = $('.header-menu-btn');
  var $modalBg = $('#modal-overlay');

  $menuBtn.on('click', function () {
    $('body').append('<div id="modal-overlay"></div>');
    $('#modal-overlay').show();
    $menuSp.fadeIn();
  });

  var $search = $('.header-search');
  var $searchBtn = $('.header-search-btn');

  $searchBtn.on('click', function () {
    $('body').append('<div id="modal-overlay"></div>');
    $('#modal-overlay').show();
    $search.fadeIn();
  });

  var $closeBtn = $('.close-btn');

  $closeBtn.on('click', function () {
    $('#modal-overlay').fadeOut().remove();
    $menuSp.fadeOut();
    $search.fadeOut();
  });

  $(document).on('click', '#modal-overlay', function () {
    $('#modal-overlay').fadeOut().remove();
    $menuSp.fadeOut();
    $search.fadeOut();
  });

  // アニメーションをtransformのy軸移動とscale(拡大縮小)で制御する

  // slider

  $('.slider').slick({
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    centerMode: true, //要素を中央寄せ
    centerPadding:'8%', //両サイドの見えている部分のサイズ
    cssEase: 'linear',
    responsive: [{
      breakpoint: 768, //ブレークポイントが768px
      settings: {
        slidesToShow: 3, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 480, //ブレークポイントが480px
      settings: {
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }]
  });

  // side category

  var $accordionBtn = $('.accordion-btn')
  var $sideCategory = $('.list-second-level');

  $sideCategory.hide();

  $accordionBtn.on('click', function() {
    $(this).toggleClass('active');
    $sideCategory.slideToggle(500);
  });

});
