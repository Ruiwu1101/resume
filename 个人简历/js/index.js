/**
 * Created by WrLt on 2017/4/14.
 */
$(function(){
    //设置简历首页的高度为屏幕高度
    $("#abstract").height($(window).height());

    //首页图片文字效果
    $('.icon_text').animate({
        top:($(window).height() - $('.icon_text').height())/ 2
    },500);
    //平滑滚动
    $('#logo').click(function(){
        $('html,body').animate({
            scrollTop:'0px'
        },800)
    });

    $('#down').click(function(){
        $('html,body').animate({
            scrollTop:$('#intro').offset().top
        },800);
    });
    $('#nav_intro').click(function(){
        $('html,body').animate({
            scrollTop:$('#intro').offset().top
        },800);
    });
    $('#nav_skill').click(function(){
        $('html,body').animate({
            scrollTop:$('#skill').offset().top
        },800);
    });
    $('#nav_exerctation').click(function(){
        $('html,body').animate({
            scrollTop:$('#work-EXP').offset().top
        },800);
    });
    $('#nav_jobs').click(function(){
        $('html,body').animate({
            scrollTop:$('#jobs').offset().top
        },800);
    });
    $('#nav_into').click(function(){
        $('html,body').animate({
            scrollTop:$('#into').offset().top
        },800);
    });

//    设置与我联系的高度
    $('#into').css("height",$(window).height()-52 + "px");
    $('#into>p').css("top", ($("#into").outerHeight(true) - $('#into>p').outerHeight())/2 + "px");
});

