$(document).ready(() => {
    loaderFadeOut();
    $('.calendar').pignoseCalendar({
        initialize: false,
        scheduleOptions: {
            colors: {
                offer: '#485563',
            }
        },
        schedules: [{
            name: 'offer',
            date: '2020-03-17',
            time: ['14:00-15:00','15:00-16:00'],
        }, {
            name: 'offer',
            date: '2020-03-18',
            time: ['14:00-15:00','17:00-18:00','18:00-19:00'],
        }, {
            name: 'offer',
            date: '2020-03-19',
            time: ['14:00-15:00','15:00-16:00'],
        }],
        select: function (date, context) {
            $(".radio-toolbar").empty();
            $("#bookingTime-wrapper").hide();

            var timeSlotLenght = context.storage.schedules[0].time.length;

            for(i=0;i<timeSlotLenght;i++){
                var option = `
                <div class="col-6">
                    <input type="radio" id="timeSlot_${i}" name="timeSlot" value="timeSlot_${context.storage.schedules[0].time[i]}">
                    <label for="timeSlot_${i}">${context.storage.schedules[0].time[i]}</label>
                </div>
                `;
                $(".radio-toolbar").append(option);
            };
            $("#bookingTime-wrapper").show();
        }
    });
})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function cancelBooking() {
    $.confirm({
        title: 'Cancel Booking',
        content: '',
        type: 'red',
        typeAnimated: true,
        backgroundDismiss: true,
        autoClose: 'Back|8000',
        buttons: {
            cancelBooking: {
                text: 'Cancel Booking',
                btnClass: 'btn-red',
                action: function () {}
            },
            Back: function () {}
        }
    });
}