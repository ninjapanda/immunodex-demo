$(document).ready(() => {
    loaderFadeOut();

    $('.tab').click(function () {
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

function shareRecord(){
    $.confirm({
        title: 'Share Record',
        columnClass: 'col-12',
        closeIcon: true,
        backgroundDismiss: true,
        animation: 'top',
        closeAnimation: 'bottom',
        content: `
        <span class="info-value">
                    Click Confirm to share <b>All record</b> to trusted party
                </span>
        `,
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("col-12 pl-0 pr-0");
            $(".jconfirm-title").addClass("alertTitle");
        },
        buttons: {
            Confirm: {
                text: 'Confirm',
                btnClass: 'alertBtn',
                animation: 'top',
                closeAnimation: 'bottom',
                action: function () {
                    location.href='index.html'
                }
            }
        }
    });
}
