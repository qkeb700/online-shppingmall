$(function(){
    // 작은 네개의 이미지 상자중에 하나를 클릭하면 큰 이미지박스에서 보여진다.
    $('.smallImgs img').click(function(){
        let img = $(this).attr('src');
        console.log(img);
        $('.smallImgs').find('img').removeClass('borderActive');
        $(this).addClass('borderActive');
        $('.bigImgBox').find('img').attr('src', img);
    })
})