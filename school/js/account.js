function delAc(accountName, id) {
    $.confirm({
        title: 'Delete Account',
        columnClass: 'col-6',
        content: `
        <div class="col-12">
            <span class="info-title">UserName</span>
            <span class="info-value">${accountName}</span>
        </div>
        `,
        type: 'red',
        animation: 'rotateX',
        closeAnimation: 'rotateX',
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
            delete: {
                text: 'Delete',
                btnClass: 'btn red col',
                action: function () {}
            }
        }
    });
}