$(document).ready(function () {

    $("#testRecord_1").DataTable();

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
    var tableList = ['testPendingIssue']
    setAsDatatable(tableList);
});

function IssueCred() {
    $.confirm({
        title: 'Issue Credentail',
        columnClass: 'col-6',
        content: `
        <span class="info-title">Assessment ID</span>
        <span class="info-value">00131</span>
        
        <span class="info-title">Full Name</span>
        <span class="info-value">Sherlock Holmes</span>
        <span class="info-title">Mobile No.</span>
        <span class="info-value">0 207 224 3688</span>
        `,
        type: 'blue',
        animation: 'top',
        closeAnimation: 'bottom',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text: 'Cancel',
                btnClass: 'btn btn-default col',
                action: close()
            },
            deny: {
                text: 'Confirm',
                btnClass: 'btn col',
                action: function () {
                    location.href="testRecord.html"
                }
            }
        }
    });

}

function setAsDatatable(tableList) {
    var IssueBtn = `<div onclick="IssueBatchCred()" class="btn issue mr-2">Issue to selected</button>`;

    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({
            initComplete: function(){
                $("#"+tableList[i]+"_filter").append(IssueBtn);},
        });
    }
}

function IssueBatchCred(){
    $.confirm({
        title: 'Issue Credential',
        columnClass: 'col-6',
        content: `
        <div class="row" id="issueCred">
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
