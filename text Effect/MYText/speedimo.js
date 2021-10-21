const textEl = document.getElementById("text");
const text = "Programming!";
let idx = 1;
let speed = 180


function writeText() {
     textEl.innerText = text.slice(0, idx);

     idx++;

     if (idx > text.length) {
          idx = 1;
     }
     setTimeout(writeText, speed);
}

writeText();