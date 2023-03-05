/*$("#footer").hover(function() {

    $("#footer")
        .animate({ borderWidth: 1}, 500)
        .css({ backgroundColor: "green"}, 500)
        .animate({ borderWidth: 0}, 500)
        .css({ backgroundColor: "#c4d5d9"}, 500);
    
    $(".fp")
        .animate({ borderWidth: 1}, 500)
        .css({ backgroundColor: "green"}, 500)
        .animate({ borderWidth: 0}, 500)
        .css({ backgroundColor: "#c4d5d9"}, 500)
        .animate({fontSize: "20"}, 1000 )
        .animate({fontSize: "12"}, 1000 );

    var timer = setTimeout(function() 
        {$(".fp")
            .css("color", "black")}, 2300);

}); */


$( "#footer" ).hover(
    function() {
        $( "#footer" )
            .animate({fontSize: "20"}, 200 )
            .animate({ borderWidth: 1}, 200)
            .css({ backgroundColor: "#64b177"}, 1500)

    }, function() {
        $("#footer")
            .animate({ borderWidth: 0}, 500)
            .css({ backgroundColor: "#c4d5d9"}, 1500)
            .animate({fontSize: "15"}, 200 )

    }
  );


 /* $( "li" ).hover(
    function() {
        $(this)
            .animate({fontSize: "1"}, 200 )
            .animate({ color: "#6c6c6c"}, 200)

    }, function() {
        $(this)
            .animate({ color: "black"}, 500)
            .animate({fontSize: "11"}, 200 )

    }
  ); */
