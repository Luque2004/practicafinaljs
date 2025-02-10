$(document).ready(function(){
    $(".box").on("mouseenter",function(this){
        $(this).addClass("selected")
    })
    $(".box").on("mouseleave",function(this){
        $(".box").removeClass("selected")
    })

})