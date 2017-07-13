$(document).ready(function() {
  anchor = window.location.hash;
  if (anchor.match('#')) {
    var $urlR =  $(anchor);
    var $par = $urlR.closest("div[id]").attr('id');
    var $btnPar = $("#" + $par).parents('div[id]').not("#develop").not("#blinky").last().attr('id');
    $('[data-target*=' + '"' + $btnPar + '"]').addClass('active').click();
    $urlR.closest("div[id]").addClass('show');
    $('[data-target*=' + '"' + $par + '"]').addClass('active');
    console.log("par = " + $par);
    console.log("btnPar = " + $btnPar);
        
  } else {
    $('[data-target*=' + '"' + "#offline-windows" + '"]').addClass('active');
    $("#offline-windows").addClass('show');
  }

  $('.btn').click(function() {
    
    var $dataTarget = $(this).attr('data-target');
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active').siblings('.btn').removeClass('active');
      $(this).siblings('.btn').each(function() {
        var $sibling = $(this).attr('data-target');
        $($sibling).collapse('hide');
      });
    }
    
    if ($dataTarget == "#online-compile") {
      //$("#develop").removeAttr("hidden");
      $('[data-target*=' + '"' + "#blinky-offline" + '"]').removeClass('active');
      $("#blinky-offline").collapse('hide');
    } else if ($dataTarget == "#offline-compile") {
      //$("#develop").removeAttr("hidden");
      $('[data-target*=' + '"' + "#blinky-online" + '"]').removeClass('active');
      $("#blinky-online").collapse('hide');
    }

    if ($(this).attr('data-target') == "#blinky-online") {
      //$("#develop").attr('hidden', 'true');
      $("html, body").animate({ scrollTop: $('#end').offset().top }, 1000);
    } else if ($(this).attr('data-target') == "#blinky-offline") {
      //$("#develop").attr('hidden', 'true');
      $("html, body").animate({ scrollTop: $('#end').offset().top }, 1000);
    } 
  });
  
  
  
});

$(function() {
  return $("h2, h3").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '<i class="fa fa-link"></i>';
    if (id) {
      return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
});