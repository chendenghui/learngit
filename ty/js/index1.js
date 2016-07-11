$(function(){
    $(".share").mouseover(function(){
      $(this).animate({"top":-2}, 100);
     }).mouseout(function(){
      $(this).animate({"top":0}, 100);
     });
     $(".share3").mouseover(function(){
          $('.wxerweimayy').css({"display":"block"})
      }).mouseout(function(){
          $('.wxerweimayy').css({"display":"none"})
      });
//首页banner大图


    //首页新闻窗口部分
    var timer1 =null;

    $('.title_news').bind('mouseover',function (){
        _this = $(this);
        var count = 0;
        if(timer1) {
            clearInterval(timer1);
        }
        timer1 = setInterval(function() {
            count++;
            if (count>3) {
                count =0;
                _this.next().slideDown(200).parent().siblings().children(".container_news").slideUp(200)
            };
        },200)
    })
    $('.title_news').bind('mouseout',function (){
        clearInterval(timer1);

    })
    //主体部分的tab切换按钮
    var index=0;
//右按钮
    $('.tab_button_right').bind('click',function(){
        index++;
        // console.log(index);
        if (index<=3) {
            $('.tab_ul').css('left',index*164*(-1)+'px');
        }else {
            index=3;
        }

    }).bind('mouseover',function(){
        $('.tab_button_right').css({"background":"url(img/next-horizontal.png) -31px 0 no-repeat"})
    }).bind('mouseout',function(){
        $('.tab_button_right').css({"background":"url(img/next-horizontal.png) 0 0 no-repeat"})
    })
//左按钮
    $('.tab_button_left').bind('click',function(){
        index--;
        if (index>=0) {
            $('.tab_ul').css('left',index*164*(-1)+'px');
        }else {
            index=0;
        }
    }).bind('mouseover',function(){
        $('.tab_button_left').css({"background":"url(img/prev-horizontal.png) -31px 0 no-repeat"})
    }).bind('mouseout',function(){
        $('.tab_button_left').css({"background":"url(img/prev-horizontal.png) -97px 0 no-repeat"})
    })
    //添加banner中视频控件

    $('.video').delegate('.button','click',function(){
        $(this).hide();
        var video = $('<embed src="http://accessbright.cn/images/Flvplayer.swf"allowfullscreen="true" flashvars="vcastr_file=/flv/lbxxlxj.flv &amp;IsAutoPlay=1" quality="high" type="application/x-shockwave-flash" width="472" height="308">')
        $('.video').append(video);
        $('.video-close').show();
    })
    $('.video-close').on("click",function () {
        $('embed').remove();
        $('.video-close').hide();
        $('.button').show();
    })
});
