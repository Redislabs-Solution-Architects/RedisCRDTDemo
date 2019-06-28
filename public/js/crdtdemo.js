/*
* Client-side JavaScript to handle AJAX commands
*
*/


function countClick(imageid){
  $.ajax({
    type: 'POST',
    url: '/incrcount',
    dataType: 'json',
    data: {
      id: imageid},
    success: function( result ) {
    }
  });

}


function getCount(imageid){
  $.ajax({
    type: 'GET',
    url: '/getcount',
    dataType: 'json',
    data: {
      id: imageid},
    success: function( result ) {
      if (result >= 42 && imageid=="count2") {
        $("#count2").html( "<strong> Exploded!</strong>");
        $("#alderaan").attr("src","img/explode.gif");
      } else {
        $( "#"+imageid).html( "<strong>" + result + "</strong>" );
      }
        
    }
  });
}
