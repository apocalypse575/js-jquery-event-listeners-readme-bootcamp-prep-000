//define functions here

function getIt() {
  $("p").click(function(){
    alert("Hey!");
  });
}

function frameIt() {
  $(document).on('load', function(){
    $('#img').append('#tasty')
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert('g was pressed!')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}


$(document).ready(function(){

// call functions here

});
