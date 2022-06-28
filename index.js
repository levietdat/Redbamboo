$(function () {
  let showImg = 0
  $(document).on('scroll', function () {
    var postionContent = $(document).scrollTop();
    console.log(postionContent);  
    $('.content').css({
        'top':-postionContent/2  + 'px',
    })  
    if(postionContent > 155  ) {
      $('nav').slideUp("fast")
      $('.oder-foot img').addClass('tranform-img')
      }
    else {
      $('.oder-foot img').removeClass('tranform-img')
      
      $('nav').slideDown("fast")
    }
    
    $('.footer').css("transform", "scale("+ postionContent +"px "+ postionContent +")");
    if(postionContent > 3200) {
      ('.footer').addClass('scale')
    }
  });
  setTimeout(function() {
    $('.dots-bars-4').css('display','none')
    $('.img-show img').slice(showImg,showImg+6).show()
  $('.load-more').on('click', function(){
        showImg =showImg+6
      $('.img-show img').slice(showImg,showImg+6).fadeIn("fast")
  })
  },2000)
  
});
