$(document).ready(function(){
    $('.addtimeSlotBtn').click(function(){
        var last_id = $(".timeSlot-wrapper:last").last().attr('id');
        var split_id = last_id.split('-');
        var index = Number(split_id[1])+1;

        var newel = $(".timeSlot-wrapper:last").clone(true);
        $(newel).attr('id',"timeSlot-"+index);
        
        $(newel).insertBefore($(this));
    });

    $(".del-btn").click(function(){
        $(this ).parent().parent().remove();
    })
})