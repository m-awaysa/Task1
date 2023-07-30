// Navbar Toggle button on small screen
$(document).ready(function () {
  $('.main-menu-toggler').on('click', function () {
    $('.cat-list').toggleClass('show');
  });
});

// FAQ'S Slide up and down
$(document).ready(function () {
  $('.plus').click(function () {
    var parentQ_A = $(this).closest('.q-a');
    $(".q-a").not(parentQ_A).find(".answer").slideUp();
    $(".q-a").not(parentQ_A).find(".minus").hide();
    $(".q-a").not(parentQ_A).find('.plus').show();
    answer = parentQ_A.find('.answer');
    answer.slideDown();
    $(".q-a").not(parentQ_A).css({
      "height": "100px",
    })
    parentQ_A.css({
      "height": "200px",
      "padding-top": "10px",
    })
    answer.css({
      "margin-bottom": "10px",
      "padding-bottom": "10px",
    })
    // $('.vector-4-0').css({
    //   "opacity": "0.1",         
    // })
    $(this).hide();
    parentQ_A.find('.minus').show();
  });
  $('.minus').click(function () {
    var parentQ_A = $(this).closest('.q-a');
    parentQ_A.find('.answer').slideUp();
    $(this).hide();
    parentQ_A.find('.plus').show();
    setTimeout(function () {
      parentQ_A.css({
        "height": "100px",
      })
    }, 500);

    // $('.vector-4-0').css({
    //   "opacity": "1",         
    // })
  });
});


// revealBottom
$(window).on("scroll", function () {
  var reveals = $(".revealBottom");
  console.log(reveals)
  for (var i = 0; i < reveals.length; i++) {
    var innerHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;

    var revealPoint = 1;

    if (revealTop < (innerHeight - revealPoint)) {
      $(reveals[i]).addClass('active');
    } else {
      $(reveals[i]).removeClass('active');
    }
  }
});
