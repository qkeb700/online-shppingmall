$(function(){
    // 작은 네개의 이미지 상자중에 하나를 클릭하면 큰 이미지박스에서 보여진다.
    $('.smallImgs img').click(function(){
        let img = $(this).attr('src');
        console.log(img);
        $('.smallImgs').find('img').removeClass('borderActive');
        $(this).addClass('borderActive');
        $('.bigImgBox').find('img').attr('src', img);
    });

    // json에서 컬러박스 색 가져오기
    $.ajax({
        url: "json/option.json",
        dataType: "json",

        success: function(data){
            let colorOptions = data.color;
            let radioInput = '';
            let check = "";
            let i = 0;    
            for(const key in colorOptions){
                if(i == 0){
                    check = "checked";
                }
                radioInput += '<input type="radio" name="color" class="color"'+
                              'id="' + key+'" data-opt1="'+colorOptions[key]+'" value="'+key+'" '+check+'>'+
                              '<label for="'+key+'"></label>';
                i++;
            }
            $('.colorbox').html(radioInput);
        }
    })
})