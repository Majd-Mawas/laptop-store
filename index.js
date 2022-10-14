const mainTag = document.querySelector("#main > div")
let count = 1;
// mainTag.style.backgroundImage = `url("images/image-${count}.jpg");`
mainTag.classList.add(`img${count}`)

function nextimg(){
  count===3?count=1:count++;
  console.log();
  mainTag.className = ""
  mainTag.classList.add(`img${count}`)
}

function previmg(){
  count===1?count=3:count--;
  mainTag.className = ""
  mainTag.classList.add(`img${count}`)
}

console.log(mainTag.classList);

