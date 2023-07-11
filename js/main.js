let room = document.querySelector('.room')
room.setAttribute('style', 'background-image : url(./img/rooms/1.jpeg)')
let arrayRoomsImg = [
  './img/rooms/1.jpeg',
  './img/rooms/2.jpeg',
  './img/rooms/3.jpeg',
  './img/rooms/4.jpeg',
  './img/rooms/5.jpeg',
  './img/rooms/6.jpeg',
  './img/rooms/7.jpeg',
  './img/rooms/8.jpeg',
  './img/rooms/9.jpeg'
];
arrayRoomsImg.forEach(function (PathToImg) {
  let link = document.createElement('a')
  link.classList.add('option-item')
  link.setAttribute('data-link', PathToImg)
  link.setAttribute('data-type', room)
  link.setAttribute('style', `background-image:url(${PathToImg})`)
  let containerRoomSelector = document.querySelector('.btn-container__change-room')
  containerRoomSelector.appendChild(link)
  link.onclick = function () {
    let room = document.querySelector('.room')
    room.setAttribute('style', `background-image:url(${PathToImg})`)
  }
})
let beds = document.getElementsByClassName('btn-container__change-bed');
let pathToBedImage = new Array(
  './img/bed/1.png',
  './img/bed/2.png',
  './img/bed/3.png',
);
function render(){
let link = event.target.dataset.link
let type = event.target.dataset.type
console.log(link)
let bedBlock = document.querySelector(`.room__${type}`)
bedBlock.style.backgroundImage = `url('${link}')`

}
for(let i = 0; i < pathToBedImage.length; i++) {
let linkBed = `
  <a 
  class="option-item" 
  data-link="${pathToBedImage[i]}"
  data-type="bed"
  style="background-image:url(${pathToBedImage[i]})"
  onclick="render()">
  </a>`;
  

    beds[0].innerHTML += linkBed;
}
let lamp = document.getElementsByClassName('btn-container__change-lamp');
let pathToLampImage = new Array(
  './img/lamp/1.png',
  './img/lamp/2.png',
  './img/lamp/3.png',
  './img/lamp/4.png',
);
function renderLamp(){
let link = event.target.dataset.link
console.log(link)
let lampBlock = document.querySelector('.room__lamp')
lampBlock.style.backgroundImage = `url('${link}')`

}
for(let i = 0; i < pathToLampImage.length; i++) {
let linkLamp = `
  <a 
  class="option-item" 
  data-link="${pathToLampImage[i]}"
  data-type="lamp"
  style="background-image:url(${pathToLampImage[i]})"
  onclick="render()">
  </a>`;
  

  lamp[0].innerHTML += linkLamp;
}

let changeCabinets = document.querySelector('section.btn-container__change-cabinet')
let arrayCabinet = []
arrayCabinet.push('./img/cabinet/1.png')
arrayCabinet.push('./img/cabinet/2.png')
for(let cabinet of arrayCabinet){
  let linkCabinet = `  <a 
  class="option-item" 
  data-link="${cabinet}"
  data-type="cabinet"
  style="background-image:url(${cabinet})"
  onclick="render()">
  </a>`
  changeCabinets.innerHTML += linkCabinet
}

let changePic = document.querySelector('section.btn-container__change-pic')
let arrayPic = []
arrayPic.push('./img/pic/1.jpeg')
arrayPic.push('./img/pic/2.jpeg')
for(let pic of arrayPic){
  let linkPic = `
  <a 
  class="option-item" 
  data-link="${pic}"
  data-type="pic"
  style="background-image:url(${pic})"
  onclick="render()">
  </a>
  `
  changePic.innerHTML += linkPic
}