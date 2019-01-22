
$(document).ready(function(){
   
 
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
 
 
 
 
    

 });
