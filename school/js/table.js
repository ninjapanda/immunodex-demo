$(document).ready(function () {

    $.extend(true, $.fn.dataTable.defaults, {
        "lengthChange": false,
        dom: 'l<"toolbar">frtip',
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },
        'columnDefs': [{
            'targets': 0,
            "ordering": false
        }, {
            orderable: false,
            targets: -1
        }]
    });

    var tableList = ['test_all', 'test_immunity','studentAccountTable_activated', 'test_infected','missing_test']
    setAsDatatable(tableList);
});

function setAsDatatable(tableList) {
    // var removeBtn = `<div class="btn remove"><img src="img/icon/bin.svg">Remove selected</button>`;
    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({});
    }
}