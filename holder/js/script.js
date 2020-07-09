$(document).ready(() => {
    loaderFadeOut();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    $('.tab, .tab2').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })

})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function openTab(tab) {
    $('.tabcontent').hide();
    $(tab).fadeIn('slow');
}

function showExp(id) {
    $('#' + id).fadeIn('slow');

}

function hideExp(id) {
    $('#' + id).fadeOut();
}

var now = 180;

function expandExp() {
    $(".expand").toggle('slow');

    now += 180;

    $('#arrow').toggleClass('flip');
}
