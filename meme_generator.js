let topTextInput, bottomTextInput, imageInput, generateBtn, canvas, context;

function generateMeme(img, topText, bottomText) {
  //set the canvas width and height to the image width and height
  canvas.width = img.width;
  canvas.height = img.height;

  //clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  //draw the image
  context.drawImage(img, 0, 0);

  let fontSize = canvas.width / 15;
  context.font = fontSize + "px Impact";
  context.fillStyle = "white";
  context.strokeStyle = "black";
  context.lineWidth = fontSize / 15;
  context.textAlign = "center";

  context.textBaseLine = "Middle";
  context.fillText(topText, canvas.width / 2, 50, canvas.width);
  context.strokeText(topText, canvas.width / 2, 50, canvas.width);

  context.textBaseLine = "bottom";
  context.fillText(bottomText, canvas.width / 2, canvas.height, canvas.width);
  context.strokeText(bottomText, canvas.width / 2, canvas.height, canvas.width);
}

function init() {
  topTextInput = document.getElementById("top-text");
  bottomTextInput = document.getElementById("bottom-text");
  imageInput = document.getElementById("image-input");
  generateBtn = document.getElementById("generate-btn");
  canvas = document.getElementById("meme-canvas");
  context = canvas.getContext("2d");

  //set the canvas' width and height to 0 so it effectively disappears because im going to be resetting the width and height everytime we make a new meme,
  // which is based off of the width and height the user selects

  canvas.width = 0;
  canvas.height = 0;

  generateBtn.addEventListener("click", function () {
    console.log("Button pressed");
    let reader = new FileReader();
    reader.onload = function () {
      let img = new Image();
      img.src = reader.result;
      generateMeme(img, topTextInput.value, bottomTextInput.value);
    };
    reader.readAsDataURL(imageInput.files[0]);
  });
}

init();
