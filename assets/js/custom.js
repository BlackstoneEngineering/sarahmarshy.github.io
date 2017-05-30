$(document).ready(function() {
    $(".btn").first().addClass('active');
});

$(document).ready(function() {
  $('.btn-group .btn').click(function() {
    $(this).addClass('active').siblings('.btn').removeClass('active');
  });
});
