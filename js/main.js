(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        //Owl carousel Start//
            $(".slider-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: true,
             items: 1,
             itemsDesktop:  [1199,1],
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false
            
         });
        

            $(".testimonial-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: false,
             items: 1,
             itemsDesktop:  [1199,1],
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false
            
         });
        

       //Responsive menu//
        $("ul#nav").slicknav({
            prependTo: ".slicknav-responsive-menu"
        });
        //counter-up
         $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

    
        


    });


    jQuery(window).load(function(){
        //sticky menu
        $(".header-area").sticky({ topSpacing: 0 });
        
    });


}(jQuery)); 