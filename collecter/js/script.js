$(document).ready(()=>{
    loaderFadeOut();

    $('.tab').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })
})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function openTab(tab) {
    $('.tabcontent').hide();
    $(tab).fadeIn('slow');
}

function sendToTester() {
    $.confirm({
        title: 'Send this data to Tester',
        columnClass: 'col-6',
        content: `
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">24824E9</span>
        </div>
        <br>
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">55212E2</span>
        </div>
        `,
        type: 'green',
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
                btnClass: 'btn btn-green col',
                action: function () {
                    $.dialog({
                        title: 'Sent to Tested',
                        columnClass: 'col-6',
                        type: 'green',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Record sent, will redirect to sample list page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="sampleList.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}

function saveTest(batchNo) {
    if (batchNo == '') {
        batchNo = 'N/A';
    }
    $.dialog({
        title: 'Saved Test',
        columnClass: 'col-6',
        content: `
        <div class="row">
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">` + batchNo + `</span>
        </div>
        </div>
        
        `,
        type: 'green',
        animation: 'top',
        closeAnimation: 'top',
        backgroundDismiss: true,
        onOpen: function () {
            $("#statusText").empty();
            $("#statusText").append("Pending for send")
            var self = this;
            setTimeout(function () {
                self.close();
                window.scrollTo(0, 0); 
            }, 600);
        },
        
    });
}