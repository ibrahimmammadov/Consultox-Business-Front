document.onreadystatechange=function(){
    if(document.readyState=="complete"){
        $("#preloader").fadeOut("slow");
    }
}

var countDownDate = new Date("December 31, 2019 23:59:59").getTime();

var interval = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML=hours;
    document.getElementById("minute").innerHTML=minutes;
    document.getElementById("second").innerHTML=seconds;
    
    if (distance < 0) {
        clearInterval(interval);
    }
}, 1000);