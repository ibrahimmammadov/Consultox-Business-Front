
document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        preloader.style.display="none";
    }
}
$(document).ready(function(){
 
    $(".searchIcon").click(function(){
        $(".searchDiv").toggle()
    })

   $(".showP").click(function(){
       $(this).removeClass("d-inline")
       $(this).addClass("d-none");
       $(this).next().removeClass("d-none")
       $(this).next().addClass("d-inline")
       $('.tabText').removeClass("d-block");

       $('.tabText').addClass("d-none");
       
       $(this).parent().next().removeClass("d-none")
       $(this).parent().next().addClass("d-block")



   })
   $(".hideP").click(function(){
    $(this).removeClass("d-inline")
    $(this).addClass("d-none");
    $(this).prev().removeClass("d-none")
    $(this).prev().addClass("d-inline")
    $(this).parent().next().addClass("d-none")
    $(this).parent().next().removeClass("d-block")
})




$(".menuBar").click(function(){
    $(".firstUl").toggle()
})

$(".openUl").click(function(){
    $(this).parent().next().toggle()
    $(".secondResInnerNav").css({
        "display":"none"
    })
})
$(".openSecondUl").click(function(){
    $(".secondResInnerNav").toggle()
})

$('#SliderDiv .owl-carousel').owlCarousel({
    loop:true,
    animateIn:'slideInRight',
    margin:20,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})



   $('#CasesCarousel .owl-carousel').owlCarousel({
   loop:true,
    margin:0,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1 ,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})


$('#news .owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1 ,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})


});


