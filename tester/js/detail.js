function issueCred() {
    $.confirm({
        title: 'Issuer Test Result',
        columnClass: 'col-6',
        content: `
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">24824E9</span>
        </div>
        <br>
        <div class="col-12">
            <span class="info-title">PCR</span>
            <span class="info-value">+ Positive</span>
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
            Send: {
                text: 'Send',
                btnClass: 'btn btn-blue col',
                action: function () {
                    $.dialog({
                        title: 'Credential Issued',
                        columnClass: 'col-6',
                        type: 'blue',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Credentail Issued, will redicect to Home page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="index.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}

function updateTest() {
    $.confirm({
        title: 'Test Result',
        columnClass: 'col-6',
        content: `
        <form id="testResult">
        <span>PCR</span>
            <div class="row">
                <div class="col-12 form-group">
                    <select class="form-textbox col-12" id="result" required>
                        <option value="na" selected>N/A</option>
                        <option value="positive">+ Positive</option>
                        <option value="negative">- Negative</option>
                    </select>
                </div>
            </div>
        </form>
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
            Confirm: {
                text: 'Confirm',
                btnClass: 'btn btn-blue col',
                action: function () {
                    $.dialog({
                        title: 'Test Updated',
                        columnClass: 'col-6',
                        type: 'blue',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  ` `,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                            }, 600);
                        },
                        
                    });
                    
                }
            }
        }
    });
}

function updateTest2() {
    $.confirm({
        title: 'Test Result',
        columnClass: 'col-6',
        content: `
        <form id="testResult">
        <span>IgG</span>
            <div class="row">
                <div class="col-12 form-group">
                    <select class="form-textbox col-12" id="result" required>
                        <option value="na" selected>N/A</option>
                        <option value="positive">+ Positive</option>
                        <option value="negative">- Negative</option>
                    </select>
                </div>
            </div>
            <span>Igm</span>
            <div class="row">
                <div class="col-12 form-group">
                    <select class="form-textbox col-12" id="result" required>
                        <option value="na" selected>N/A</option>
                        <option value="positive">+ Positive</option>
                        <option value="negative">- Negative</option>
                    </select>
                </div>
            </div>
        </form>
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
            Confirm: {
                text: 'Confirm',
                btnClass: 'btn btn-blue col',
                action: function () {
                    $.dialog({
                        title: 'Test Updated',
                        columnClass: 'col-6',
                        type: 'blue',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  ` `,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                            }, 600);
                        },
                        
                    });
                    
                }
            }
        }
    });
}