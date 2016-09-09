function albumClickHandler(number) {
    $('#homePage').hide();
    $('#albumPage' + number).show();
}

function navClickHandler(number) {
  $('.albumPage').hide();
  $('#albumPage'+number).show();
}

function photoClickHandler(picName) {
  $('.albumPage').hide();
  $('.individual').show();
  $('.photoContainer').hide();
  $('#'+ picName).show();
}

$(document).ready(function() {
    $('.albumCover').on('click', function(evt) {
      albumClickHandler(this.id.slice(5));
    });

    $('nav li').on('click', function() {
      navClickHandler($(this).index()+1);
    });

    $('nav li:last-child').on('click', function() {
        $('.albumPage').hide();
        $('#homePage').show();
    });

    $('.photoImage').on('click', function(evt) {
      var src = $(this).attr('src');
      photoClickHandler(src.slice(src.indexOf('/')+1, src.lastIndexOf('.')));

    });

    $('.backLink1').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage1").show();
    });
    $('.backLink2').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage2").show();
    });
    $('.backLink3').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage3").show();
    });
    $('.backLink4').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage4").show();
    });
    $('.backLink5').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage5").show();
    });
    $('.backLink6').on('click', function (){
      $('.photoContainer').hide();
      $("#albumPage6").show();
    });

});
