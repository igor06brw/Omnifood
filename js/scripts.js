/*sticky navi */
$(document).ready(function(){
    /*sticky navi */
   $('.js--section-features').waypoint(function(direction){

       if(direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }

   }, {

       offset: '50px'

   })

/*scroll navi */


});


