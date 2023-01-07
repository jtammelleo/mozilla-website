const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "mozilla_logo.png") {
    myImage.setAttribute("src", "mozilla_logo.png");
  } else {
    myImage.setAttribute("src", "mozilla_logo.png");
  }
};
