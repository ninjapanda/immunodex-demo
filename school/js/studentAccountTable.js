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
    var tableList = ['studentAccountTable_all','studentAccountTable_activat','studentAccountTable_inactive']
    setAsDatatable(tableList);
});

function setAsDatatable(tableList){
    var resetBtn = `<div class="btn yellow" onclick="reset()"><img src="img/icon/edit-tools.svg">Reset selected Password</button>`;
    var removeBtn = `<div class="btn remove" onclick="delSelected()"><img src="img/icon/interface.svg">Delete selected</button>`;
    var resendBtn = `<div class="btn light-blue" onclick="resend()"><img src="img/icon/resend.svg">Resend notification to  selected</button>`;
    for (i = 0; i < tableList.length; i++) {
        $("#"+tableList[i]).DataTable({
            initComplete: function(){
                $("#"+tableList[i]+"_filter").append(removeBtn,resetBtn,resendBtn);},
        });
    }
}

function delSelected() {
    $.confirm({
        title: 'Delete Selected Account',
        columnClass: 'col-6',
        type: 'red',
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
            delete: {
                text: 'Delete',
                btnClass: 'btn red col',
                action: function () {}
            }
        }
    });
}


function resend() {
    $.confirm({
        title: 'Sent notification to selected Student',
        columnClass: 'col-6',
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
            delete: {
                text: 'Send',
                btnClass: 'btn light-blue col',
                action: function () {}
            }
        }
    });
}

function reset() {
    $.confirm({
        title: 'Reset selected Student Account Password',
        columnClass: 'col-6',
        type: 'orange',
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
            delete: {
                text: 'Reset',
                btnClass: 'btn yellow col',
                action: function () {}
            }
        }
    });
}