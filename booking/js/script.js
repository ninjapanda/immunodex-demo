$(document).ready(() => {
    loaderFadeOut();
    
})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function cancelBooking() {
    $.confirm({
        title: 'Cancel Booking',
        content: '',
        type: 'red',
        typeAnimated: true,
        backgroundDismiss: true,
        autoClose: 'Back|8000',
        buttons: {
            cancelBooking: {
                text: 'Cancel Booking',
                btnClass: 'btn-red',
                action: function () {}
            },
            Back: function () {}
        }
    });
}