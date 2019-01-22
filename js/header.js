document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        preloader.style.display="none";
    }
}

$(document).ready(function(){
    $(".searchIcon").click(function(){
        $(".searchDiv").toggle()
    })
 
    $("#selectLanguage").click(function(){
        $("#languageUl").toggle()
        
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



    $(window).scroll(function(){
        let pageScroll=window.scrollY;

        if(pageScroll>190){
            $("nav").addClass("fixed");
        }
        else if(pageScroll<50){
            $("nav").removeClass("fixed");
        }
    })
 
 });
 


