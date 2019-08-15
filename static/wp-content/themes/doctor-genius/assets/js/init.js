(function($){
  $(function(){

       $('.button-collapse-MainNav').sideNav({
             menuWidth: 240, // Default is 240
             edge: 'right', // Choose the horizontal origin
             closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       });

  }); // end of document ready
})(jQuery); // end of jQuery name space