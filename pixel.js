/* Reinventing the wheel */

$(window).on('load', function() {

    setInterval(function () {
    $(".light").css("background-color","#FFFF00");
    }, 1200);
    
    setInterval(function () {
    $(".light").css("background-color","");
    }, 1500);
 
    setInterval(function () {
    $(".light").css("background-color","#FF1493");
    }, 2700);
    
    setInterval(function () {
    $(".light").css("background-color","#9932CC");
    }, 4100);
    
    setInterval(function () {
    $(".light").css("background-color","#FFA500");
    }, 5300);
            
    setInterval(function () {
    $(".light").css("background-color","#ADFF2F");
    }, 6500); 
    
    setInterval(function () {
    $(".light").css("background-color","#FF0000");
    }, 7700);
    
    setInterval(function () {
    $(".light").css("background-color","#99FFFF");
    }, 8900);
    
    setInterval(function () {
    $(".light").css("background-color","");
    }, 10100);
    
    setInterval(function () {
    $(".light").css("background-color","#0000FF");
    }, 11300);

});
