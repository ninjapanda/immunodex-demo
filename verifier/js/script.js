
$(document).ready(()=>{
    loaderFadeOut();

    $('.tab').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })
})


function loaderFadeOut() {
    $(".loader-wrapper").hide();
}