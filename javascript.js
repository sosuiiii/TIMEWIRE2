$(function() {
    // 1.5秒かけてゆっくりフェードインさせる
    $('.title__sentence01').fadeIn(1500);
　   setTimeout(function(){
         $('.title__sentence02').fadeIn(1500);
　   },1000);
　   setTimeout(function(){
　        $('.title__sentence03').fadeIn(1500);
　   },2000);
　   setTimeout(function(){
         $('.title__sentence04').fadeIn(1500);
　   },3000);
    setTimeout(function(){
         $('.title__sentence05').fadeIn(1500);
　   },4000);

    // $('.content02__sentence').css('opacity','0');
    $(window).scroll(function(){
        $('.content02').each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > imgPos - windowHeight + windowHeight/3.5){
            $('.content02__sentence', this).fadeIn(3000);
        }else{
            $('.content02__sentence', this).fadeOut(1500);
        }
        });
    });
    $(window).scroll(function(){
        $('.content04').each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > imgPos - windowHeight + windowHeight/3){
            $('.content04__sentence, .content04__sentence02', this).fadeIn(3000);
        }else{
            $('.content04__sentence, .content04__sentence02', this).fadeOut(1500);
        }
        });
    });


});
