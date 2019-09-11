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
    $(".tesoro").click(function(){
        $(".sharapova").css('display','block');
        $(".sharapova").css('margin-left','auto');
        $(".sharapova").css('margin-right','auto');
        $(".subheading").css('font-family','Bangers');
        $(".spoil").css('font-family','Bangers');
        $(".spoil").css('display','flex');
        $(".spoil").css('justify-content','center');
        $("body").css('background-color','red');
        $(".heading").hide();
    });