function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        $('.img-wrapper').css('background-color','transparent');

        reader.readAsDataURL(input.files[0]);
    }
}

function formConfirm(){
    $("#requestConfirm .overLay.active").removeClass('active');
    $("#requestForm .overLay").addClass('active');

    $("#requestConfirm #blah2").attr('src',$("#requestForm #blah").attr('src'));



    $("#con-request").empty().append( $("#requestBy").val());
    $("#con-purose").empty().append( $("#purpose").val());
    $("#con-startDate").empty().append( $("#start-date").val());
    $("#con-endDate").empty().append( $("#end-date").val());
    $("#con-address").empty().append( $("#address").val());
    $("#con-declAvailble").empty().append( $("#availableTime").val());
}

function formConfirmBack(){
    $("#requestForm .overLay").removeClass('active');
    $("#requestConfirm .overLay").addClass('active');
}


function createRequest() {
    $.confirm({
        title: 'Create Request',
        columnClass: 'col-md-6 col-sm-12',
        content: `
        Click "Confirm" to create request.
        `,
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
            Confirm: {
                text: 'Confirm',
                btnClass: 'btn btn-orange col',
                action: function () {
                    $.dialog({
                        title: 'Create Request',
                        columnClass: 'col-6',
                        type: 'orange',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Request Created, redirect to Request Detail Page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="requestDetail.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}