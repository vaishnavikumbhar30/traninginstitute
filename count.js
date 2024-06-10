$(document).ready(function(){
    
    function animateCounters() {
        $('.counter').each(function () {
            var $this = $(this);
            var target = $this.data('target');

            $({ Counter: 0 }).animate({ Counter: target }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
    // Run the counter animation when the element is in the viewport
    $(window).on('scroll', function () {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var elementOffsetTop = $('.counter').offset().top;

        if (windowScrollTop + windowHeight > elementOffsetTop) {
            animateCounters();
        }
    });

    $('.slideInUp').waypoint(function(direction) {
        //console.log(this.id);
        myfunc_fadeInDown(this.element, direction); //when using waypoint, this refers to the waypoint object
    },{offset:'90%'});
    
function myfunc_fadeInDown(target, direction){
    console.log(target);
    if(direction === "down"){
        $(".slideInUp").addClass("animate__animated animate__slideInUp");
  
        setTimeout(function(){
            $(".slideInUp").removeClass("animate__animated animate__slideInUp");
            $(".slideInUp").removeClass("hidden");
    }, 1000);
    }
}


 });