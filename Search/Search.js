var path = [
  "Images/Book1.jpg",
  "Images/Book2.jpg",
  "Images/Book3.jpg",
  "Images/Book4.jpg",
  "Images/Book5.jpg",
  "Images/Book6.jpg",
  "Images/Book7.jpg",
  "Images/Book8.jpg",
  "Images/Book9.jpg",
  "Images/Book10.jpg",
  "Images/Book11.jpg",
];

$("#navBar").click(function () {
  $("#Slider").animate({ right: "0%" });
});

$("#popupClose").click(function () {
  $("#Slider").animate({ right: "-100%" });
  setTimeout(() => {
    $("#myModal").modal("hide");
  }, 500);
});

$(".searchBar").keyup(function () {
  const key = event.key;
  if ($(".searchBar").val() == "") {
    $(".searchResults").addClass("d-none");
  } else {
    $(".searchResults").removeClass("d-none");
  }
});

for (var i = 0; i < path.length; i++) {
  $("#firstBook").attr("src", path[i]);
  var help = $("#firstBook").clone();
  $(".searchResults").append(help);
}

$(".searchBar").keydown(function () {
  const key = event.key;
  if (key == "Enter") {
    $(".searchBar").blur();
  }
});

$("#search").click(function () {
  $("#search").css("color", "black");
  var ele = $(".searchBar");
  ele.removeClass("d-none");
  ele.focus();
  ele.animate({ width: "300px" });
  setTimeout(() => {
    $(".searchBar").addClass("displayCheck");
  }, 200);
});

$(document).click(function (e) {
  if ($(".searchBar").hasClass("displayCheck")) {
    if (!$(e.target).hasClass("searchBar")) {
      if ($(".searchBar").val() == "") {
        $(".searchBar").animate({ width: "0" });
        setTimeout(() => {
          $(".searchBar").addClass("d-none");
          $("#search").css("color", "grey");
          $(".searchBar").removeClass("displayCheck");
        }, 300);
      }
    }
  }
});
