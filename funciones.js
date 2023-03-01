
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#linke').fadeIn();
            } else {
                $('#linke').fadeOut();
            }
        });
    });



