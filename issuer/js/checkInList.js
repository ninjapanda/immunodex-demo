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
            "ordering": false,
            'checkboxes': {
                'selectRow': true
            }
        }, {
            orderable: false,
            targets: -1
        }],
        'select': {
            'style': 'multi'
        },
        'order': [
            [1, 'asc']
        ]
    });
    var tableList = ['checkInList_all']
    var tableList2 = ['checkInList_pending']
    setAsDatatable(tableList);
    setAsDatatable2(tableList2);
});

function setAsDatatable(tableList) {
    var removeBtn = `<div class="btn remove"><img src="img/icon/bin.svg">Remove selected</button>`;

    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({
            initComplete: function(){
                $("#"+tableList[i]+"_filter").append();},
        });
    }
}

function setAsDatatable2(tableList) {
    var removeBtn = `<div class="btn remove"><img src="img/icon/bin.svg">Remove selected</button>`;
    var IssueBtn = `<div onclick="sendBatchCred()" class="btn issue mr-2">Send to selected</button>`;

    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({
            initComplete: function(){
                $("#"+tableList[i]+"_filter").append(IssueBtn);},
        });
    }
}

function sendBatchCred(){
    $.confirm({
        title: 'Notify User',
        columnClass: 'col-6',
        content: `
        <div class="row" id="notifyUser">
            <div class="col-4">
                <span class="font-weight-bold">Assessment ID</span>
            </div>
            <div class="col-4">
                <span class="font-weight-bold">Full Name</span>
            </div>
            <div class="col-4">
                <span class="font-weight-bold">Mobile No.</span>
            </div>

            <div class="col-4">
                <span>00122</span>
            </div>
            <div class="col-4">
                <span>Sherlock</span>
            </div>
            <div class="col-4">
                <span>0 208 224 3692</span>
            </div>

            <div class="col-4">
                <span>00132</span>
            </div>
            <div class="col-4">
                <span>Holmes</span>
            </div>
            <div class="col-4">
                <span>0 123 423 9123</span>
            </div>
            
        </div>
        `,
        type: 'blue',
        animation: 'top',
        closeAnimation: 'bottom',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text: 'Cancel',
                btnClass: 'btn btn-default col',
                action: close()
            },
            deny: {
                text: 'Confirm',
                btnClass: 'btn col',
                action: function () {}
            }
        }
    });
}