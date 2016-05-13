// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    minuteColor(s);
  $("#txt").html(h + ":" + m + ":" + s + " " + ampm)
    
    
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function minuteColor (i) {
    if (i % 2 === 0){
      $("#txt").css({
        color: "green"
        })
    }
    else{
      $("#txt").css({
        color: "red"
      })
    }
  }


  startTime();
});
$(document).ready(function() {
  function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  function changeBackground() {
  $("body").css({
    backgroundColor: getRandomColor()
  })
  setTimeout(changeBackground, 5000);
}
  changeBackground();



});




/*function getRandomInt (min, max) {

  return Math.floor(Math.random() * max) + min;
}

 

function randomSize() {
  var fSize = ["100%", "150%", "200%", "300%", "400%", "1000%", "50%", "25%"];
  var fs = fSize[getRandomInt(0, fSize.length - 1)];
  $("#txt").css({
    fontSize: fs
});


  setTimeout(randomSize, 2000);

};

  randomSize();*/

  // define some variable that's keeping track of what index you're on

  // define your changefont function
    // define font size array
    // pick out font size with that index
    // change the font size using css()
    // increase variable by 1
    // if the variable is too long then set back to 0
    // settimeout changefont function

  // call your changefont function



  var i = 0
  function fontChange(){
    var fSize = ["100%", "200%", "300%", "500%"]
    var fs = fSize[i]
    $("#txt").css({
      fontSize: fs
    })
    i++;
    console.log(fSize[i]) 
    if (i > fSize.length){
     i = 0;
  }

    setTimeout(fontChange, 3000);
  }
  fontChange();

  





