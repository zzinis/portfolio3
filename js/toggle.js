const $frame = $("#wrap");
const $btns = $frame.find("dt");
const $boxs = $frame.find("dd");
let speed = 500;

$btns.on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");

    $btns.removeClass("on");
    $boxs.slideUp(speed);
})