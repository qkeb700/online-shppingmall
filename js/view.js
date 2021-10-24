$(function(){

    let opt1v;
    let opt2v;
    let opt1 = 0;
    let opt2 = 0;
    let price = $('#price').val();
    let totalPrice = parseInt(price);

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
            let sizeJson = data.size;
            let selectOption = '<option selected value="">사이즈를 선택하세요</option>';
            for(const key in sizeJson){
                selectOption += '<option value="'+ key + '"'+ 'data-opt2="'+sizeJson[key]+'">'+ key.toUpperCase() + '</option>';
            }

            $('.colorbox').html(radioInput);
            $('#sizeselection').html(selectOption);
        }
    })

    // 컬러를 누르면 그 색에 맞는 이름값 출력
    $(document).on('change', "input[name='color']", function(){
        addOpt();
    })
    $(document).on('change', "#sizeselection", function(){
        addOpt();
    })

    function addOpt(){
        // 컬러박스중 하나를 누르면 색명이 출력
        opt1v = $('.color').find(':checked').val();
        $('.color').children('span').html("컬러 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + opt1v);
        
        opt2v = $('#sizeselection').val();
        $('.result-color').html("컬러 : " + opt1v);
        $('.result-size').html("사이즈 : " + opt2v);

        opt1 = parseInt($('.color').find(':checked').data('opt1'));
        if(opt2v){
            opt2 = parseInt($('#sizeselection').find(':checked').data('opt2'));
        }
        qty = parseInt($('input[name="quantity"]').val());
        totalPrice = (opt1 + opt2 + parseInt(price)) * qty;
        $('.total').html(comma(totalPrice) + "원");
    }

    // 수량 점검
    $('a.qty').click(function(e){
        e.preventDefault();
        let qty = $('input[name="quantity"]').val();
        let newqty = $(this).data('q');
        qty = Number(qty) + Number(newqty);
        if(qty < 1){
            alert("수량 최소단위는 1입니다.");
            return false;
        }
        totalPrice = Number(qty)*Number(price);
        $('input[name="quantity"]').val(qty);
        addOpt();
    })

    function comma(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
})