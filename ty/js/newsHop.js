$(function(){

    $(".left").delegate('.left_li','click',function(){
        _this = $(this);
        _this.css({"background-color":"rgb(244,244,244)"}).siblings().css({"background-color":"#e8e8e8"}).show();
        $(".right_ul").eq(_this.index()).show().siblings().hide();
        $(".item").hide();
        $(".right1").siblings().show();
    })
    $(".right1").click(function(){
        qthis=$(this);
        qthis.siblings().hide();
        $('.left_li').eq(qthis.index()).siblings().hide();
        $('.item').show();
    })
})
