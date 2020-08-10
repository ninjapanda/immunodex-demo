$(function(){
    $(".declHistoryBtn").click (function(){
        
        $(this).parent().next('.declHistoryExp').toggleClass("active");
        $(this).text($(this).text() == 'More' ? 'Less' : 'More');
        // $(this).parent().next('.declHistoryRow').css( "background", "yellow" );
    });
})

// function showExp(id){
//     $("#"+id).toggleClass("active");
//     var $this = $(this);
//     $this.addClass('Less');

// }

var now = 180;

function expandExp() {
    $(".attendHistory").toggle('slow');

    now += 180;

    $('#arrow').toggleClass('flip');
}