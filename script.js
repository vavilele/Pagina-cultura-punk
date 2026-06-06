$(document).ready(function () {

    $('.myicono').on('click', function () {
        $('.lista-sm').slideToggle();
    });


    var urlPath = window.location.pathname;

    var fileName = urlPath.split('/').pop() || 'index.html';

    $('.lista-sm a').each(function () {
        var href = $(this).attr('href');
        if (fileName === href) {
            $(this).addClass('active');
        }
    });
});