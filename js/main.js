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