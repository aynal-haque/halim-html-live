$(document).ready(function(){
    //Slider Active
  $('.sliders').owlCarousel({
      items:1,
      dots:true,
      loop:true,
      autoplay:false,
      nav:false
  });
     //Testimonial Active
  $('.testimonial').owlCarousel({
      items:3,
      dots:false,
      autoplay:false,
      loop:true,
      nav:false,
      margin:30,
      center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            center:false
        },
        1000:{
            items:3
        }
    }
  });
    //CounterUp Active
    $('.counter').counterUp();
    //Isotop Active
    $(".project-filter li").on('click',function() {
            $(".project-filter li").removeClass("active")
            $(this).addClass("active")
            
            var selector =$(this).attr("data-filter");
            
            
            jQuery(".project-list").isotope({
                filter: selector,
            });
        });
  
        

    jQuery(".project-list").isotope()
    //Magnifi Popup Active
    $('.gallry').magnificPopup({
        type:'image',
        gallery:{
        enabled:true
        }                       
    });
    
    //Manu Fixt Active
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 50){
                $('.haeader-area').addClass('stick')
            }
            else{
                $('.haeader-area').removeClass('stick')
            }
        })
        
});

    //Scroll to Active
     $(window).scroll(function(){
           if($(this).scrollTop() >300){
               $('#scroll').addClass('scroll-show')
           }
           else{
             $('#scroll').removeClass('scroll-show')  
        }
      });
    $('#scroll').click(function(){
       $('html, body').animate({
            scrollTop:0,
            },500) 
         
    });






