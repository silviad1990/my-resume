(function () {
  "use strict";
  const myImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  let currentImg = 0;

  document
    .getElementById("next")
    .addEventListener("click", function nextPhoto() {
      currentImg++;
      if (currentImg < myImages.length) {
        document.getElementById("myimage").src = myImages[currentImg];
      } else {
        currentImg = 0;
        document.getElementById("myimage").src = myImages[currentImg];
      }
    });
  document
    .getElementById("previous")
    .addEventListener("click", function previousPhoto() {
      currentImg--;
      if (currentImg >= 0) {
        document.getElementById("myimage").src = myImages[currentImg];
      } else {
        currentImg = myImages.length - 1;
        document.getElementById("myimage").src = myImages[currentImg];
      }
    });
})();
