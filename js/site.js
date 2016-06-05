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


$(function () {

  var nextPage = 2;

  function readyForNextPage() {
    if (!$('#next_page_spinner').is(':visible')) return;

    var threshold = 200;
    var bottomPosition = $(window).scrollTop() + $(window).height();
    var distanceFromBottom = $(document).height() - bottomPosition;
    return distanceFromBottom <= threshold;
  }

  function observeScroll() {
    if (readyForNextPage()) {
      getNextPage();
    }
  }
  $(document).scroll(observeScroll);

  function getNextPage() {
    $.get('/cards' + nextPage, function (data) {
      $('#content').append(data);
      $('.img-avatar').one('error', function () {
        this.src = '/img/missing.png'
      });
    }).done(function () {
      nextPage++;
    })
  }
});