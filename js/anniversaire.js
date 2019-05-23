let title = $('#title');
title.css("background-color", "blue");
title.hide(1500).show(1500);
title.queue(function() {
    title.css("background-color", "red");
});

let para1 = $('#para1');
let para2 = $('#para2');
let para3 = $('#para3');
let soundClick = new Audio('http://www.wou.edu/~tbafarat06/1001%20Sound%20Effects/Miscellaneous/Ping%20Pong%20Paddle%2004.wav');
let soundEnd = new Audio('http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/PING.WAV');

clickPara(para1, para2);
clickPara(para2, para3);

para3.on("click", function() {
    soundEnd.play();
    title.css("background-color", "green");
    title.text("FELICITATION")
    $('body').css("background-color", "red");
    $('#img').css("visibility", "visible");
    $("p").text("Joyeux Anniversaire !!!");
});


function clickPara(paraClick, paraHide) {
    paraClick.on("click", function() {
        paraHide.css("visibility", "visible")
        paraHide.fadeIn("slow");
        soundClick.play();
    });
};



