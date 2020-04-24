$(document).ready(() => {

    $('.sidebarBtn').on('click', () => {
        $('.wrapper').addClass('zoom');
        $('.trigger').css('z-index', '999');
        $('.userLabel, .sidebar').fadeIn();
        // $('.bk-wrapper').show();
    })

    $('.trigger').on('click', () => {
        $('.trigger').css('z-index','-99');
        if ($('.wrapper').hasClass('zoom')) {
            $('.userLabel, .sidebar').fadeOut();
            $('.wrapper').removeClass('zoom')
        }
    })
});