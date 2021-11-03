const form = document.querySelector("form");
const imagesBlock = document.querySelector("#images-block")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const memeURL = document.querySelector("#image-url");
  const memeTopText = document.querySelector("#text-on-top")
  const memeBottomText = document.querySelector("#text-on-bottom")
  //Create elements
  const divImage = document.createElement("div");
  const topText = document.createElement("div");
  const bottomText = document.createElement("div");
  const removeMeme = document.createElement("div");
  const memeImg = document.createElement("img");
  //Add values from input
  memeImg.src = memeURL.value;
  topText.innerText = memeTopText.value;
  bottomText.innerText = memeBottomText.value;
  //Add classes
  divImage.classList.add("div-image");
  removeMeme.classList.add("div-remove");
  memeImg.classList.add("meme-image")
  topText.classList.add("top-text");
  bottomText.classList.add("bottom-text");
  //Append elements
  divImage.append(memeImg);
  divImage.append(topText);
  divImage.append(bottomText);
  divImage.append(removeMeme);
  imagesBlock.append(divImage);
    
  form.reset();
});

//Remove memes
imagesBlock.addEventListener("click", function(event) {
  if (event.target.classList.contains("div-remove") === true) {
    event.target.parentElement.remove();
  } 
});