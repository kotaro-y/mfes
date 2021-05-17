'use strict';

// jQuery
$(function(){
  // スクロールボタンの表示
  const headerHeight = $('.header').outerHeight();
  $(window).on('scroll touchmove',function(){
    if($('body,html').scrollTop() >= headerHeight){
      $('#scroll-top').addClass('shown');
    }else{
      $('#scroll-top').removeClass('shown');
    }
  });

  // スクロールトップボタンの動作
  $('#scroll-top').click(function(){
    $('html,body').animate({
      scrollTop : 0,
    },600);
  });

  // スムーススクロール
  $('.smooth-scroll').click(function(){
    const target = $(this).attr('href');
    const targetPos = $(target).offset().top;
    $('body, html').animate({
      scrollTop : targetPos - 100,
    },600);
    return false;
  });

});