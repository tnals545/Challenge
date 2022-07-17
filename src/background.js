const imageArray = [];
for (let i = 0; i < 10; i++) {
  imageArray.push(`${i}.jpg`);
}

const randomImg = imageArray[Math.floor(Math.random() * imageArray.length)];
const bgImage = document.createElement("img");

bgImage.className = "background";
bgImage.src = `img/${randomImg}`;

document.body.appendChild(bgImage);
