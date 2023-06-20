$(document).ready(function () {
    // Function to change the nav-bar on scroll
    $(window).scroll(function () {
        $(window).scrollTop() >= 100
            ? ($(".fixed-nav-bar").addClass("scrolled"),
              $(".the-bass").addClass("scrolled"))
            : ($(".fixed-nav-bar").removeClass("scrolled"),
              $(".the-bass").removeClass("scrolled"));
    });

    // Drop Down Function
    $("#menuButton").on("change", function () {
        $("#menuButton").is(":checked")
            ? $(".the-bass").addClass("dropped")
            : $(".the-bass").removeClass("dropped");
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;

    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Email sent successfully!');
        form.reset();
      }
    };
    xhr.send(new URLSearchParams(new FormData(form)).toString());
  });
