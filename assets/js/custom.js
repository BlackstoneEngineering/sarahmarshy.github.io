$(document).ready(function() {
  var url = document.location.toString();
  if (url.match('#') ) {
    $('#'+url.split('#')[1]).parent().parent().addClass('show');
    var $par = $('#'+url.split('#')[1]).parent().parent().attr('id');
    console.log($par);
    $('[data-target*=' + '"' + $par + '"]').addClass('active');
  } else {
    $(".btn").first().addClass('active').click();
  }

  $('.btn-group .btn').click(function() {
    $(this).addClass('active').siblings('.btn').removeClass('active');
  });
});

$(function() {
  return $("h2, h3, h4, h5, h6").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '<i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});
