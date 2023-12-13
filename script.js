const images = ["./images/karin.jpg", "./images/lunato.jpg", "./images/lzebule.jpg", "./images/mishe.jpg"];

const image = images[Math.floor(Math.random() * images.length)]
document.body.style.backgroundImage = `url("${image}")`;
