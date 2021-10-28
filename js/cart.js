$(function(){

    $.get("json/cart.json", function(result){
        let rs = result.cart;
        console.log(rs)
        let cartlist = '';
        let totalmoney = 0;
        let alltotalmoney = 0;
        let point;

        for(let i = 0; i < rs.length; i++) {
            totalmoney = rs[i].dcmoney*rs[i].quantity;
            point = rs[i].point*rs[i].quantity;
            cartlist += '<tr>'+ 
                        '<td class="text-center">'+
                        '<input type="checkbox" name="pnum" value="'+rs[i].prd+'" checked>'+
                        '</td>'+
                        '<td class="d-flex">'+
                        '<div class="imgbox">' +
                        '<img src="'+rs[i].img+'" alt="'+rs[i].title+'">' +
                        '</div>' +
                        '<div class="prdbox">' +
                        '<h1>'+rs[i].title+'</h1>' +
                        '<p>색상: '+rs[i].color+', 사이즈: '+rs[i].size+', 수량: '+rs[i].quantity+', '+rs[i].description+'</p>' +
                        '<button type="button" class="btn btn-dark btnFix">옵션수정</button>' +
                        '</div>' +
                        '</td>' +
                        '<td class="text-center">' +
                        '<del>'+rs[i].ormoney+'</del><br>' +
                        ''+rs[i].dcmoney+'' +
                        '</td>' +
                        '<td>' +
                        '<div class="btn-group">' +
                        '<a href="#" class="minus">-</a>' +
                        '<span class="qt">'+rs[i].quantity+'</span>' +
                        '<a href="#" class="plus">+</a>' +
                        '<input type="hidden" name="qt" id="qt" value="'+rs[i].quantity+'"><br>' +
                        '</div>' +
                        '</td>' +
                        '<td>' +
                        totalmoney+
                        '</td>' +
                        '<td>' +
                        point+
                        '</td>' +
                        '<td>' +
                        '4,000원' +
                        '</td>' +
                        '<td>' +
                        '<button type="button" class="btn btn-outline-danger">삭제</button>' +
                        '</td>' +
                        '</tr> \n\n';
        }
        // let totalMoney = alltotalmoney + "원 + 배송료 : 4000 = " + alltotalmoney+4000;
        // $('.total-money').html(totalMoney);
        $('#cart-body').html(cartlist);
    })

})