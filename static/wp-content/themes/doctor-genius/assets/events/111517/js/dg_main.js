    $(window).load(function () {
        setTimeout(function(){
            $('.preloader').fadeOut('slow', function () {
            });
        },0000); // set the time here
    }); 

	$('.countdown').countdown({
	date: "November 15, 2017 18:03:26",
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