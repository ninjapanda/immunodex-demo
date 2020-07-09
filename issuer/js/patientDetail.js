$(document).ready(function () {
    var productDetail = {
        "pcr": {
            "1": {
                "name": "(Roche) qSARS-CoV-2 PCR Rapid Test",
                "manufacturer": "Roche",
                "specificty": "82.5%",
                "sensitivity": "98.5%"
            },
            "2": {
                "name": "(Cellex, Inc) qSARS-CoV-2 PCR Rapid Test",
                "manufacturer": "Cellex, Inc",
                "specificty": "90%",
                "sensitivity": "99.5%"
            }
        },
        "ab": {
            "1": {
                "name": "(Roche) qSARS-CoV-2 IgG/IgM Rapid Test",
                "manufacturer": "Roche",
                "specificty": "88.5%",
                "sensitivity": "92.5%"
            },
            "2": {
                "name": "(Cellex, Inc) qSARS-CoV-2 IgG/IgM Rapid Test",
                "manufacturer": "Cellex, Inc",
                "specificty": "93%",
                "sensitivity": "97.5%"
            }
        }
    };

    $("#pcrTest").change(function () {
        var val = $(this).val();
        if (val == 0) {
            $("#pcr_manufacturer").val("");
            $("#pcr_spec").val("");
            $("#pcr_sen").val("");
        } else {
            $("#pcr_manufacturer").val(productDetail.pcr[val].manufacturer);
            $("#pcr_spec").val(productDetail.pcr[val].specificty);
            $("#pcr_sen").val(productDetail.pcr[val].sensitivity);
        }

    });

    $("#abTest").change(function () {
        var val = $(this).val();
        if (val == 0) {
            $("#ab_manufacturer").val("");
            $("#ab_spec").val("");
            $("#ab_sen").val("");
        } else {
            $("#ab_manufacturer").val(productDetail.ab[val].manufacturer);
            $("#ab_spec").val(productDetail.ab[val].specificty);
            $("#ab_sen").val(productDetail.ab[val].sensitivity);
        }

    });
});

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

function issuerCred() {
    $.confirm({
        title: 'Issue Credential',
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
        <span>RT-PCR</span>
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