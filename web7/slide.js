function submit(){
    $.get( "caption.php", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $('<img id="im" src="'+ "image.php" +'">').load(function() {
        $(this).width(400).height(300).appendTo('#d1');
    });
    $('#im').hide();
    $('#im').show(200);
    $("#d2").html("NEXT");
    $("#d2").click(function(){
                $('#im').stop();
            foo1();
    });
	var button=document.getElementById("button");
	button.disabled="true";
	button.style.display="none";
}

function foo1(){
    //$('#im').attr("src","image.php?id=1");
    $('#im').stop();
    $( "#im" ).animate({
        width: "toggle"
      }, 200, function() {
            $('#im').attr("src","image.php?id=1");
           
     });
    $('#im').animate({
                width: "toggle"
    },200, function(){});
    $.get( "caption.php?id=1", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $("#d2").html("NEXT");
    $("#d2").click(function(){
            $('#im').stop();
            foo2();
    });

}
function foo2(){
    //$('#im').attr("src","image.php?id=1");
    $('#im').stop();
    $( "#im" ).animate({
        width: "toggle"
      }, 200, function() {
            $('#im').attr("src","image.php?id=2");
           
     });
    $('#im').animate({
                width: "toggle"
    },200, function(){});
    $.get( "caption.php?id=2", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $("#d2").html("NEXT");
    $("#d2").click(function(){
            $('#im').stop();
            foo3();
    });

}
function foo3(){
    //$('#im').attr("src","image.php?id=1");
    $('#im').stop();
    $( "#im" ).animate({
        width: "toggle"
      }, 200, function() {
            $('#im').attr("src","image.php?id=3");
           
     });
    $('#im').animate({
                width: "toggle"
    },200, function(){});
    $.get( "caption.php?id=3", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $("#d2").html("NEXT");
    $("#d2").click(function(){
            $('#im').stop();
            foo4();
    });

}
function foo4(){
    //$('#im').attr("src","image.php?id=1");
    $('#im').stop();
    $( "#im" ).animate({
        width: "toggle"
      }, 200, function() {
            $('#im').attr("src","image.php?id=4");
           
     });
    $('#im').animate({
                width: "toggle"
    },200, function(){});
    $.get( "caption.php?id=4", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $("#d2").html("PREV");
    $("#d2").click(function(){
            $('#im').stop();
            boo();
    });

}

function boo(){
    $('#im').stop();
    $( "#im" ).animate({
        width: "toggle"
      }, 200, function() {
            $('#im').attr("src","image.php");
           
     });
    $('#im').animate({
                width: "toggle"
    },200, function(){});
    $.get( "caption.php", function( data ) {
          $('#d3').html( "<i>" + data + "</i>");
           
    });
    $("#d2").html("NEXT");
    $("#d2").click(function(){
            $('#im').stop();
            foo1();
    });
}
