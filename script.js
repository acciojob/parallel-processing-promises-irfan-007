//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function addImage(e) {
  e.preventDefault();

  let promises = images.map(downloadImage);
  let allProm = Promise.all(promises);
  allProm.then((urls) => {
    urls.forEach((url) => {
      let img = document.createElement("img");
      img.src = url;
      output.appendChild(img);
    });
  });
}

async function downloadImage(obj) {
  const response = await fetch(obj.url);
  if (!response.ok) throw new Error(`Failed to load image's URL: ${obj.url}`);
  else return obj.url;
}

btn.addEventListener("click", addImage);