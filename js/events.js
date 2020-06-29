//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  });
}

function frameIt(){
  $('image').on('load', function(){
    image.addclass('tasty')
  });
}