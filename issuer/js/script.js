
$(document).ready(()=>{
    loaderFadeOut();

    $('.tab').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })
})

function openTab(tab){
    $('.tabcontent').hide();
    $(tab).fadeIn('slow');
}

function openTab2(tab){
    $('.tabcontent2').hide();
    $(tab).fadeIn('slow');
}

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}