$(document).ready(function () {

    $.extend( true, $.fn.dataTable.defaults, {
        "lengthChange": false,
        dom: 'l<"toolbar">frtip',
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },
        'columnDefs': [{
            'targets': [0],
            "ordering": false,
            'checkboxes': {
                'selectRow': true
            }
        }],
        'select': {
            'style': 'multi'
        },
        'order': [
            [1, 'asc']
        ]
    } );
    var tableList = ['checkInTable']
    setAsDatatable(tableList);
});

function setAsDatatable(tableList) {
    var removeBtn = `<div class="btn remove"><img src="img/icon/interface.svg">Remove selected</button>`;
    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({
            initComplete: function(){
                $("#"+tableList[i]+"_filter").append(removeBtn);},
        });
    }
}