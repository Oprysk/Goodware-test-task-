$(document).ready(function() {
    $('.slide').css(
        {"position" : "absolute",
            "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(1000);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
        }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(500, rotator);
    }
    if(true){
        var $linkArrow = $('<a style="cursor:pointer" id="prewbutton"></a><a style="cursor:pointer" id="nextbutton"></a>')
            .prependTo('#slider');
        $('#nextbutton').click(function(){
            animSlide("next");

        })
        $('#prewbutton').click(function(){
            animSlide("prew");
        })
    }
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, 6000);}
    }
    $('#slider-wrap').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});