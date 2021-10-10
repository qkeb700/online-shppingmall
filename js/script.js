$(function(){
  //검색창출력
  $('.search').click(function(e){
    //a링크의 권환 상실 링크가 되지않음.
    e.preventDefault();
    $(this).next('.searchbox').fadeToggle();
  });

  //서브페이지 출력
  $('.gnb>li').hover(function(){
    $(this).find('.lnb').fadeToggle();
  });

  //메인이미지 변환
  setInterval('fadeout()', 3000);

  // weekly best에서 클릭했을 때 해당 리스트로 이동
  $('.wb-list a').click(function(e){
    e.preventDefault();
    let link = $(this).data('link');
    let lft;
    switch(link){
      case 'best':
        lft = '0px';
      break;
      case 'top':
        lft = '-1110px';
      break;
      case 'outer':
        lft = '-2220px';
      break;
      case 'bottom':
        lft = '-3330px';
      break;
      case 'dress':
        lft = '-4440px';
      break;
    }
    $('.wb-list a').removeClass('active');
    $(this).addClass('active');
    $('.container-in').animate({
      left: lft
    }, 500);
  });
});

function fadeout(){
  $('.slider div:eq(0)').removeClass('z-index-2 z-index-1').clone().appendTo('.slider');
  $('.slider div:eq(0)').remove();
}


