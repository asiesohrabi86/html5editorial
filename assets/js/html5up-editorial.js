$(document).ready(function(){
    $('.sidebar-group-link').click(function(){
        if($(this).hasClass('sidebar-group-link-active')){
            var status = 1;
        }
        else{
            var status = 0;
        }

        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.arrow-icon').removeClass('fa-angle-up');
        $('.arrow-icon').addClass('fa-angle-down');

        if(status == 0){
            $(this).addClass('sidebar-group-link-active');
            $(this).children('.submenu-toggle').children('.arrow-icon').removeClass('fa-angle-down');
            $(this).children('.submenu-toggle').children('.arrow-icon').addClass('fa-angle-up');
        }
        
    });

    $('.selector-element').click(function(){
        $('.selector-element').removeClass('active');
        $(this).addClass('active'); 
    });

    $('#sidebar-toggle').click(function(){
        if($('#sidebar').hasClass('sidebar-d-none')){
            $('#sidebar').removeClass('sidebar-d-none');
            $('.sidebar-menu').animate({width:"24em"}, 500);
            $('#main-body').removeClass('main-body-width-100');
        
        }else{
            $('#sidebar').addClass('sidebar-d-none');
            $('.sidebar-menu').animate({width:"70px"}, 500);
            $('#main-body').addClass('main-body-width-100');
        }      
        
    });


    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > 1700){
            $(".main-body").scrollTop($(".main-body").height());
            // $(".main-body").addClass("main-body-fixed");
        } 
        // else {
        //     $(".main-body").removeClass("main-body-fixed");
        // }
        
    });

});