$(document).ready(function () {
  $("#rules").on("click", function () {
    $("li").toggle();
  });
  let userpattern = [];
  let gamepattern = [];
  let count = 1;
  let i = -1;
  let d = 0;
  let btncolors = ["red", "blue", "green", "yellow"];
  function man() {
    let Number = Math.floor(Math.random() * 4);

    return btncolors[Number];
  }
  $(document).on("keypress", function () {
    $("h1").text("LeveL " + count);
    if (count === 1) {
      let randomcolor = man();
      gamepattern.push(randomcolor);
      let l = "#" + randomcolor;
      $(l).fadeOut(100).fadeIn(100);
      let mvar = "sounds/" + randomcolor + ".mp3";
      let aud = new Audio(mvar);
      aud.play();
    }
  });

  //   button click

  $(".btn").on("click", function () {
    i++;

    if (i < gamepattern.length) {
      userpattern.push($(this).attr("id"));
      $(this).fadeOut(100).fadeIn(100);
      if (userpattern[i] === gamepattern[i]) {
        let m2var = "sounds/" + $(this).attr("id") + ".mp3";
        let aud = new Audio(m2var);
        aud.play();
      } else {
        let aud = new Audio("sounds/wrong.mp3");
        $("h1").text("Game over,press any key to restart");
        aud.play();
        count = 1;
        i = -1;
        d = -1;
      }
    }
    if (i + 1 == count) {
      i = -1;
      count++;
      d = d + 1;
      userpattern = [];
      $("h1").text("LeveL " + count);
    }

    if (d === 1) {
      d = d - 1;
      let randomcolor = man();
      gamepattern.push(randomcolor);
      let l = "#" + randomcolor;
      $(l).delay(800).fadeOut(100).fadeIn(100);
    } else if (d === -1) {
      d = d + 1;
      gamepattern = [];
    }
  });
});
