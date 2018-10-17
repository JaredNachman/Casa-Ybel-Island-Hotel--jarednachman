$(document).ready(function() {
  $('h2').removeClass('hidden');
  $('h2').fadeIn(2000);

  $('p').removeClass('hidden');
  $('p').fadeIn(4000);

  $('.row').removeClass('hidden');
  $('.row').fadeIn(6000);

  $('h3').removeClass('hidden');
  $('h3').fadeIn(6000);

  $('.bodytext').removeClass('hidden');
  $('.bodytext').fadeIn(8000);
});

$(document).scroll(function() {
  $('ul').removeClass('hidden');
  $('ul').fadeIn(3000);
});
