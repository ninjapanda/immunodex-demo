function addClient() {
    $.alert({
        backgroundDismiss: true,
        title: 'Notice',
        animation: 'top',
        closeAnimation: 'bottom',
        content: `
        <p>If a person or organisation is on your whitelist, then they are allowed to obtain proof-of-health from you.</p>
        `,
        buttons: {
            Next: {
                text: 'Next',
                action: function () {
                    $.confirm({
                        title: '+ Add Client',
                        columnClass: 'col-12',
                        closeIcon: true,
                        backgroundDismiss: true,
                        animation: 'top',
                        closeAnimation: 'bottom',
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
                        onOpenBefore: function () {
                            $(".jconfirm-buttons").addClass("col-12 pl-0 pr-0");
                            $(".jconfirm-title").addClass("alertTitle");
                        },
                        // autoClose: 'Cancel|8000',
                        buttons: {
                            add: {
                                text: '+ Add',
                                btnClass: 'alertBtn',
                                animation: 'top',
                                closeAnimation: 'bottom',
                                action: function () {
                                    $.confirm({
                                        title: 'Select Share Record',
                                        columnClass: 'col-12',
                                        closeIcon: true,
                                        backgroundDismiss: true,
                                        animation: 'top',
                                        closeAnimation: 'bottom',
                                        content: `
                                        <div class="mb-4 mt-2" id="recordShare">
                                            <div class="form-row" id="title">
                                                <div class="col-1 checkbox-wrapper">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="record_1">
                                                    </div>
                                                </div>
                                                <div class="col-4">Date</div>
                                                <div class="col-3">Result</div>
                                                <div class="col-2">Status</div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="data" id="data_1">
                                                <div class="form-row">
                                                    <div class="col-1 checkbox-wrapper">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="record_1">
                                                        </div>
                                                    </div>
                                                    <div class="col-4">13 May, 2020
                                                    </div>
                                                    <div class="col-3">
                                                        <div class="resultStatus">
                                                        <div class="statusDot green"></div>
                                                        <span>A</span>
                                                    </div>
                                                    </div>
                                                    <div class="col-2 text-green">Valid</div>
                                                    <div class="col-1 expandBtn" onclick="expand('data_1')"></div>
                                                </div>

                                                <div class="form-row expandData" id="data_1_exapnd">
                                                    <div class="col-1 checkbox-wrapper"></div>
                                                    <div class="col-4">
                                                        <span class="info-head">
                                                            Issuer
                                                        </span>
                                                        <span class="info-value">
                                                            PD Clinic
                                                        </span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="info-head">
                                                            Method
                                                        </span>
                                                        <span class="info-value">
                                                            Swab
                                                        </span>
                                                    </div>
                                                    <div class="col-2">
                                                        <span class="info-head">
                                                            Symptoms
                                                        </span>
                                                        <span class="info-value">
                                                            YES
                                                        </span>
                                                    </div>
                                                    <div class="col-1"></div>
                                                </div>
                                            </div>

                                            <div class="data" id="data_2">
                                                <div class="form-row">
                                                    <div class="col-1 checkbox-wrapper">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="record_2" checked>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">02 May, 2020</div>
                                                    <div class="col-3">
                                                    
                                                        <div class="resultStatus">
                                                            <div class="statusDot red"></div>
                                                            <span>E1</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-2 text-green">Valid</div>
                                                    <div class="col-1 expandBtn" onclick="expand('data_2')"></div>
                                                </div>

                                                <div class="form-row expandData" id="data_2_exapnd">
                                                    <div class="col-1 checkbox-wrapper"></div>
                                                    <div class="col-4">
                                                        <span class="info-head">
                                                            Issuer
                                                        </span>
                                                        <span class="info-value">
                                                            Q&S Lab
                                                        </span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="info-head">
                                                            Method
                                                        </span>
                                                        <span class="info-value">
                                                            Blood
                                                        </span>
                                                    </div>
                                                    <div class="col-2">
                                                        <span class="info-head">
                                                            Symptoms
                                                        </span>
                                                        <span class="info-value">
                                                            YES
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="data" id="data_3">
                                                <div class="form-row">
                                                    <div class="col-1 checkbox-wrapper">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="record_3" checked>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">23 Apr, 2020</div>
                                                    <div class="col-3">
                                                        <div class="resultStatus">
                                                            <div class="statusDot green"></div>
                                                            <span>C</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-2 text-green">Valid</div>
                                                    <div class="col-1 expandBtn" onclick="expand('data_3')"></div>
                                                </div>

                                                <div class="form-row expandData" id="data_3_exapnd">
                                                    <div class="col-1 checkbox-wrapper"></div>
                                                    <div class="col-4">
                                                        <span class="info-head">
                                                            Issuer
                                                        </span>
                                                        <span class="info-value">
                                                            Tai O Hospital
                                                        </span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="info-head">
                                                            Method
                                                        </span>
                                                        <span class="info-value">
                                                            Swab
                                                        </span>
                                                    </div>
                                                    <div class="col-2">
                                                        <span class="info-head">
                                                            Symptoms
                                                        </span>
                                                        <span class="info-value">
                                                            No
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `,
                                        buttons: {
                                            Confirm: {
                                                text: 'Confirm',
                                                btnClass: 'alertBtn',
                                                animation: 'top',
                                                closeAnimation: 'bottom',
                                                action: function () {}
                                            }
                                        },
                                        onOpenBefore: function () {
                                            $(".jconfirm-buttons").addClass("col-12 pl-0 pr-0");
                                            $(".jconfirm-title").addClass("alertTitle");
                                        },
                                    })
                                }
                            }
                        }
                    });
                }
            }
        }

    })

}

function expand(data) {
    console.log('hi');
    var id = data + "_exapnd";
    $("#" + id).toggleClass('active');

    var height1 = $("#"+id).children('div').children(".info-head").height();
    var height2 = $("#"+id).children('div').children(".info-value").height();
    var maxHeight = height1+height2+15;
    $("#" + id+".active").css('height',maxHeight);
}