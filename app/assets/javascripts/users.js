$(function () {
  setTimeout(function () {
    $('#logo').addClass('hinge');
    $('#logo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      setTimeout(function () {
        $('#logo').removeClass('hinge');
        $('#logo').addClass('zoomIn');
      }, 1000);
    });
  }, 30000);
});
