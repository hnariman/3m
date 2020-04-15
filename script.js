const item = document.querySelectorAll('.item');
const move = document.querySelectorAll('.drag');
const del  = document.querySelectorAll('.x');
const add  = document.querySelector('.add');
const sort = document.querySelector('.sort');



// const handler = (e) => {
//   console.log(e.target);
// }


// document.querySelector('main').addEventListener('click', handler);



let values = [];

const deleteItem = () => { // remove item button
  removeListeners();
  console.log('delete item');
  console.log(event.target.parentElement);
  console.log(this);
  event.target.parentElement.parentElement.removeChild(event.target.parentNode);
  addListeners();
}

const moveItem = ()  => { // drag & drop item button
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

const addItem = () => { // adding item button
  removeListeners();
  saveValues(item);
  console.log('adding item');
  console.log(event.target.parentElement.innerHTML);
  document.querySelector('.items').innerHTML += `
           <li class="item"> <i class="drag"></i> 
             <input class="itemText" id="" type="text" name="">
             <i class="x"></i></li> `
  addListeners();
}

const sortItem = () => { // sort list items
  console.log('sorting items');
}

const saveValues = (elem) => {
  values = Array.from(elem);
  values = values.map(v => v.innerText);
  console.log(values);
}

const addListeners = () => {
  move.forEach((x) => { x.addEventListener('mousedown', moveItem, false) });
  del.forEach((x)  => { x.addEventListener('click', deleteItem, false)  });
  add.addEventListener('click', addItem, false);  
  sort.addEventListener('click', sortItem, false);
}

const removeListeners = () => {
  move.forEach((x) => { x.removeEventListener('mousedown', moveItem, false) });
  del.forEach((x)  => { x.removeEventListener('click', deleteItem, false)  });
  add.removeEventListener('click', addItem, false);  
  sort.removeEventListener('click', sortItem, false);
}


addListeners();
