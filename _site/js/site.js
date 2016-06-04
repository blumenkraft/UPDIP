// Activate clip
$(function () {
  var clip = new Clipboard('.btn');
  console.log(clip);
});

// Fancy logo easteregg
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

// Use placeholder if avatar image is missing
$(function () {
  $('.img-avatar').one('error', function () {
    this.src = '/img/missing.png'
  });
});
