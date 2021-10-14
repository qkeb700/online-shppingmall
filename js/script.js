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

  // 이미지에 커서올릴 때 가격 정보 보이게하기
  $('.list-8').find('a').on({
    mouseenter: function(){
      let text = $(this).data('text');
      let textArr = new Array();
      if(text){
        textArr = text.split('||');
      } else {
        textArr[0] = "제목미정";
        textArr[1] = "가격준비중";
      }
      let str = '<div class="over">' +
                '<h4 class="text-center">' + textArr[0] + '</h4>' +
                '<p class="text-center">'  + textArr[1] + '</p>' +
                '</div>';
      $(this).append(str);                
    },
    mouseleave: function(){
      $(this).find('.over').remove();
    }
  });

  // 첫번째 테이블을 클릭하여 상품목록 나열
  $('.table-list').click(function(){
    $('.product-list').children().removeClass().addClass("col-12 my-3 card-list");
  })

  // grid-4를 클릭하여 상품목록을 나열할 때
  $('.grid-4').click(function(){
    $('.product-list').children().removeClass().addClass("col-3 my-3");
  })
  // grid-5를 클릭하여 상품목록 나열
  $('.grid-5').click(function(){
    // $('.product-list').css('flex-direction', 'row');
    $('.product-list').children().removeClass().addClass("col-20 my-3 px-3");
  })
});

function fadeout(){
  $('.slider div:eq(0)').removeClass('z-index-2 z-index-1').clone().appendTo('.slider');
  $('.slider div:eq(0)').remove();
}


