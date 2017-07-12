$(document).ready(function() {
  var url = document.location.toString();
  if (url.match('#')) {
    var $urlR =  $('#'+url.split('#')[1]);
    var $par = $urlR.closest("div[id]").attr('id');
    var $btnPar = $("#" + $par).parents('div[id]').not("#develop").last().attr('id');
    $('[data-target*=' + '"' + $btnPar + '"]').addClass('active').click();
    $urlR.closest("div[id]").addClass('show');
    $('[data-target*=' + '"' + $par + '"]').addClass('active');
    console.log($par);
    console.log($btnPar);
  } else {
    $(".btn").first().addClass('active').click();
    $('[data-target*=' + '"' + "#offline-windows" + '"]').addClass('active');
    $("#offline-windows").addClass('show');
  }

  $('.btn').click(function() {
    $(this).addClass('active').siblings('.btn').removeClass('active');
    $(this).siblings('.btn').each(function() {
      var $sibling = $(this).attr('data-target');
      $($sibling).collapse('hide');
    });
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