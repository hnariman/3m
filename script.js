const item = document.querySelectorAll('.item');
const move = document.querySelectorAll('.drag');
const del  = document.querySelectorAll('.x');
const add  = document.querySelector('.add');
const sort = document.querySelector('.sort');


let values = [];

function deleteItem() { // remove item (x) button
  console.log('delete item');
  console.log(event.target.parentElement);
  console.log(this);
  event.target.parentElement.parentElement.removeChild(event.target.parentNode);
}

function moveItem() { // drag & drop item button
  console.log('moving item');
  console.log(event.target.parentElement);
  event.target.parentElement.parentElement.addEventListener('mousemove', () => {
    event.target.parentElement.parentElement.addEventListener('mouseup', () => {
      event.target.parentElement.parentElement.removeEventListener()
    })
    console.log('moving mouse');
  })
  console.log('mousedown event');
  console.log(event.target.parentElement.querySelector('p').innerText);
}

function addItem() { // adding item button
  saveValues(item);
  console.log('adding item');
  console.log(event.target.parentElement.innerHTML);
  document.querySelector('.items').innerHTML += `
           <li class="item"> <i class="drag"></i> 
             <input class="itemText" id="" type="text" name="">
             <i class="x"></i></li> `
}

function sortItem() {
  console.log('sorting items');
}

function saveValues(elem) {
  values = Array.from(elem);
  values = values.map(v => v.innerText);
  console.log(values);
}

move.forEach((x) => { x.addEventListener('mousedown', moveItem) });
del.forEach((x)  => { x.addEventListener('click', deleteItem)  });
add.addEventListener('click', addItem);  
sort.addEventListener('click', sortItem);
