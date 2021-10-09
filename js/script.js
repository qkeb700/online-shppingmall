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
});

function fadeout(){
  $('.slider div:eq(0)').removeClass('z-index-2 z-index-1').clone().appendTo('.slider');
  $('.slider div:eq(0)').remove();
}