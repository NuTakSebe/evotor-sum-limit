$(function () {
    $('.form').submit(function (e) {
        e.preventDefault();
        context.navigation.pushNext()
        // FIXME: переход на экран формирования чека 
    });
});
