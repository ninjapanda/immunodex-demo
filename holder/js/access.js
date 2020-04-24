function addClient() {
    $.confirm({
        title: '+ Add Client',
        columnClass: 'col-12',
        closeIcon: true,
        backgroundDismiss: true,
        content: `
        <form class="formName" id="addClient">
            <div class="form-item">
                <input type="text" class="form-textbox" id="clientName" required>
                <span class="form-label" for="clientName">Client Name</span>
            </div>
            <div class="form-item">
                <input type="tel" class="form-textbox" id="mobile"required>
                <span class="form-label" for="mobile">Mobile Number</span>
            </div>
        </form>
        `,
        animation: 'rotateX',
        closeAnimation: 'rotateX',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("col-12 pl-0 pr-0");
            $(".jconfirm-title").addClass("alertTitle");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            add: {
                text: '+ Add',
                btnClass: 'alertBtn',
                action: function () {}
            }
        }
    });
}