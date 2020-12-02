$(document).ready(function () {


$(".termo-example__item").mouseover(function () {
    $(this).animate({bottom:30,left:5},20);

});
    $(".termo-example__item").mouseout(function () {
        $(this).animate({bottom:0,left:0},20);

    });
});