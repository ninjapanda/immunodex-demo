$(document).ready(() => {
    loaderFadeOut();

    $(".sidebarBtn").click(function () {
        $("#sidebar").toggleClass('active');
        $(".shadow-wrapper").toggleClass('active');
        $(".container-fluid").toggleClass('position-fixed');
    });

    $(".shadow-wrapper").click(function () {
        $("#sidebar").toggleClass('active');
        $(".shadow-wrapper").toggleClass('active');
        setTimeout(function () {
            $(".container-fluid").removeClass('position-fixed');
        }, 400);

    })
});

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function copyLink() {
    var copyText = document.getElementById("requestLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
}