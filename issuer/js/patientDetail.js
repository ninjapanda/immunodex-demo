function userFormDisplay() {
    $("#userData").hide();
    $("#userDetailForm").fadeIn();
    $("#userEditBtn").hide();
    $("#userSaveBtn").fadeIn();
}

function userDataDisplay() {

    $("#userDetailForm").hide();
    $("#userData").fadeIn();

    $("#userSaveBtn").hide();
    $("#userEditBtn").fadeIn();
}

function testFormDisplay() {
    $("#testData").hide();
    $("#testDetailForm").fadeIn();
    $("#testEditBtn").hide();
    $("#testSaveBtn").fadeIn();
}

function testDataDisplay() {

    $("#testDetailForm").hide();
    $("#testData").fadeIn();

    $("#testSaveBtn").hide();
    $("#testEditBtn").fadeIn();
}

function test2FormDisplay() {
    $("#test2Data").hide();
    $("#test2DetailForm").fadeIn();
    $("#test2EditBtn").hide();
    $("#test2SaveBtn").fadeIn();
}

function test2DataDisplay() {

    $("#test2DetailForm").hide();
    $("#test2Data").fadeIn();

    $("#test2SaveBtn").hide();
    $("#test2EditBtn").fadeIn();
}

function issuerCred(){
    $.confirm({
        title: 'Issue Credential',
        columnClass: 'col-6',
        content: `
        <span class="info-title">Testing ID</span>
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
                text:'Cancel',
                btnClass:'btn btn-default col',
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


function updateResult() {
    $.confirm({
        title: 'Testing Result',
        columnClass: 'col-6',
        content: `
        <form class="formName" id="resultUpdate">
        <span>Swab</span>
        <div class="col-12 form-group">
            <select class="form-textbox" id="result" required>
                <option value="na" selected>N/A</option>
                <option value="positive">+ Positive</option>
                <option value="negative">- Negative</option>
            </select>
        </div>
        <br>
        <span>IgG</span>
        <div class="col-12 form-group">
            <select class="form-textbox" id="result" required>
                <option value="na" selected>N/A</option>
                <option value="positive">+ Positive</option>
                <option value="negative">- Negative</option>
            </select>
        </div>
        <br>
        <span>IgM</span>
        <div class="col-12 form-group">
            <select class="form-textbox" id="result" required>
                <option value="na" selected>N/A</option>
                <option value="positive">+ Positive</option>
                <option value="negative">- Negative</option>
            </select>
        </div>
        </form>
        `,
        type: 'blue',
        animation: 'rotateX',
        closeAnimation: 'rotateX',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text:'Cancel',
                btnClass:'btn btn-default col',
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