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

    // 컬러를 누르면 그 색에 맞는 이름값 출력
    $(document).on('change', "input[name='color']", function(){
        addOpt();
    })

    function addOpt(){
        // 컬러박스중 하나를 누르면 색명이 출력
        let optv1 = $('.color').find(':checked').val();
        $('.color').children('span').html("컬러 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + optv1);
    }
})