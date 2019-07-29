$("button").click(function(){
    $(".hover").show();
});
$(".hover").hover(function(){
    $(".serena").show();
    $(".hover").text("Now double-click Serena's racquet!");
});
$(".serena").dblclick(function(){
    $(".hover").text("Now click the header!");
    $(".hover").fadeIn();
});
$("h1").click(function(){
     $(".treasure").show();
});
$(".tesoro").click(function(){
    $(".serena").hide();
    $(".hover").hide();
    $(".tesoro").hide();
    $(".clickheader").hide();
    $(".buttonone").hide();
    $(".treasure").hide();
    $(".sharapova").show();
    $(".spoil").show();
    $(".subheading").text("FAT CHANCE!");
});
    