const item = document.querySelectorAll('.item');
const move = document.querySelectorAll('.drag');
const del  = document.querySelectorAll('.x');
const add  = document.querySelector('.add');
const sort = document.querySelector('.sort');

console.log('outside of the class');
console.log(item);
class Actions {
  constructor() {
    this.item = document.querySelectorAll('.item');
  }
  del() { // remove item (x) button
    console.log('delete item');
    console.log(event.target.parentElement);
    console.log(this);
    event.target.parentElement.parentElement.removeChild(event.target.parentNode);
  }
  move() { // drag & drop item button
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
  add() { // adding item button
    console.log('adding item');
    console.log(event.target.parentElement);
    document.querySelector('.items').innerHTML += `
           <li class="item"> <i class="drag"></i> 
             <input class="itemText" id="" type="text" name="">
             <i class="x"></i></li> `
  }
  sort() {
    console.log('sorting items');
  }
}

const action = new Actions(item);

move.forEach((x) => { x.addEventListener('mousedown', action.move) });
del.forEach((x)  => { x.addEventListener('click', action.del)  });
add.addEventListener('click', action.add);  
sort.addEventListener('click', action.sort);
