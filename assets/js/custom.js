$(document).ready(function() {
  anchor = window.location.hash;
  if (anchor.match('#')) {
    var $urlR =  $(anchor);
    var $par = $urlR.closest("div[id]").attr('id');
    var $btnPar = $("#" + $par).parents('div[id]').not("#develop").not("#blinky").not("#debug").not("#more").last().attr('id');
    if (anchor.includes("online")) {
      $('[data-target*=' + '"' + "online-compile" + '"]').first().addClass('active');
    } else if (anchor.includes("offline")) {
      $('[data-target*=' + '"' + "offline-compile" + '"]').first().addClass('active');
    }
    $('[data-target*=' + '"' + $btnPar + '"]').first().click().addClass('active');
    $urlR.closest("div[id]").addClass('show');
    $('[data-target*=' + '"' + $par + '"]').first().addClass('active');
    console.log("par = " + $par);
    console.log("btnPar = " + $btnPar);
  } else {
    $('[data-target*=' + '"' + "#offline-windows" + '"]').addClass('active');
    $("#offline-windows").addClass('show');
  }

  $('.btn').click(function() {
    
    var $dataTarget = $(this).attr('data-target');
    console.log("button target = " + $dataTarget);
    
    $(this).first().addClass('active').siblings('.btn').removeClass('active');
    $(this).siblings('.btn').each(function() {
      var $sibling = $(this).attr('data-target');
      $($sibling).collapse('hide');
    });
    
    /** Sort of JavaScript Div pagination **/
    $($dataTarget).parents('div[id]').siblings('div[id]').each(function() {
      var $targetChildren = $(this).children('div[id]');
      $targetChildren.each(function() {
        $thisTarget = $(this).attr('id');
        $('[data-target*=' + '"' + $thisTarget + '"]').removeClass('active');
        $("#" + $thisTarget).collapse('hide');
      });
    });
    
    /** Keep respective Online/Offline button active **/
    if ($dataTarget.includes("online")) {
      $('[data-target*=' + '"' + "online-compile" + '"]').first().addClass('active');
    } else if ($dataTarget.includes("offline")) {
      $('[data-target*=' + '"' + "offline-compile" + '"]').first().addClass('active');
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