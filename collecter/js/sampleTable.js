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
    var tableList = ['sampleList_all','sampleList_pending','sampleList_sent','sampleList_issued'];
    var issueList = ['sampleList_pending_issue'];
    setAsDatatable(tableList);
    setAsDatatable2(issueList);
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

function setAsDatatable2(issueList) {
    var removeBtn = `<div class="btn remove"><img src="img/icon/interface.svg">Remove selected</button>`;
    var issueBtn = `<div class="btn btn-green mr-2" onclick="issueCredBatch()"><img src="img/icon/edit.svg">Issue Credential</button>`
    for (i = 0; i < issueList.length; i++) {
        $("#"+issueList[i]).DataTable({
            initComplete: function(){
                $("#"+issueList[i]+"_filter").append(issueBtn ,removeBtn);
            },
        });
    }
}