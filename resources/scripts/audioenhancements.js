function toggleBackground(audioContainer, title, icon) {
  var c = document.getElementById(audioContainer);
  var t = document.getElementById(title);
  var i = document.getElementById(icon);
  if (c.style.backgroundColor === "white") {
    i.src =
    "./resources/media/images/vintage-radio-microphone-with-background-removed.png";
  } else if (c.style.backgroundColor !== "white") {
    t.style.color = "black";
    c.style.backgroundColor = "white";
  }
}

function pauseAudio(audioContainer, title, icon) {
  var c = document.getElementById(audioContainer); // Not used
  var t = document.getElementById(title); // Not used
  var i = document.getElementById(icon);
    i.src =
      "./resources/media/images/vintage-radio-microphone-with-black-text.png";
}

function endAudio(audioContainer, title, icon) {
  var c = document.getElementById(audioContainer);
  var t = document.getElementById(title);
  var i = document.getElementById(icon);
  t.style.color = "";
  c.style.backgroundColor = "";
  i.src =
    "./resources/media/images/vintage-radio-microphone-with-background-removed.png";
}