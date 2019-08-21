$(document).ready(function(){
    $('.portifolio-grid figure').mouseover(function (e){
        TweenMax.to($(this).find('img'), .2, {scaleX:1.3, scaleY:1.3, opacity: 1.0});
        TweenMax.to($(this).find('figcaption'), .2, {color:"#2E2E2E"});
    })

    $('.portifolio-grid figure').mouseout(function (e){
        TweenMax.to($(this).find('img'), .2, {scaleX:1.0, scaleY:1.0, opacity: 0.7});
        TweenMax.to($(this).find('figcaption'), .2, {color:"#ffffff"});
    })
})