    jQuery(document).ready(function($) {
        setTimeout(function(){
            $('.preloader').fadeOut('slow', function () {
            });
        },0000); // set the time here
        var eventDate = document.querySelector('.countdown').dataset.eventDate;
        $('.countdown').countdown({
            date: eventDate,
            render: function(data) {

                var el = $(this.el);
                el.empty()
                //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
                    .append("<div>" + this.leadingZeros(data.days, 2) + "<span>days</span></div>")
                    .append("<div>" + this.leadingZeros(data.hours, 2) + "<span>hours</span></div>")
                    .append("<div>" + this.leadingZeros(data.min, 2) + "<span>minutes</span></div>")
                    .append("<div>" + this.leadingZeros(data.sec, 2) + "<span>seconds</span></div>");
            }
        });
    });
