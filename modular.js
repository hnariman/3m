// компактный создватель элементов HTML ( уже с классом )
const createHTMLElement = (tag, clas, type=null, value=null) => {
  const element = document.createElement(`${tag}`);
  element.classList.add(`${clas}`);
  if( type  !== null ) { element.type  = `${type}`  }
  if( value !== null ) { element.value = `${value}` }
  return element;
}

// Подключить драг HTML:5 по селектору, чтобы сделать this драгоспособным 
const makeDraggableAll = (selector) => {
  const items = document.querySelectorAll(`${selector}`);
  items.forEach(x => { 
    if (!x.getAttribute('draggable')) x.setAttribute('draggable', 'true')})
}

// Добавляем новые слот и элемент 
const add = () => {
  const list = document.querySelector('ul');
  const slot = createHTMLElement('li','slot');
  const item = createHTMLElement('div','item');
  const drag = createHTMLElement('i', 'drag');
  const input = createHTMLElement('input','itemText','text');
  const x = createHTMLElement('i','x');
  item.append(drag, input, x);
  slot.append(item);
  list.append(slot);
}

// зона харакири 
const del = (e) => { e.target.parentNode.remove(e.target); }

// сортировка букв и слов
const sort = (e) => {
  const icon = document.querySelector('.sort');
  const list = document.querySelectorAll('.item');
  icon.style.color = 'black';
  icon.classList.toggle('fa-sort-amount-asc');
  icon.classList.toggle('fa-sort-amount-desc');
  const inputs = document.querySelectorAll('input');
  values = Array.from(inputs).map( x => x.value ).filter(x => x.length > 0);
  // values = values.sort((a,b)=> a-b);
  if (icon.classList.contains('fa-sort-amount-asc')) { values.sort(); }
  if (icon.classList.contains('fa-sort-amount-desc')){ values.reverse(); }
  inputs.forEach(( elem, index ) => { elem.value = values[index]; })
  setTimeout(() => { icon.style.color = 'grey'; },500);
}

// двигатель и переносчик!
let item;
const dragOver  = (e) => { e.preventDefault(); }
const dragLeave = (e) => { e.target.classList.remove('hover');}
const dragEnter = (e) => { e.preventDefault(); e.target.classList.add('hover');}
const dragDrop  = (e) => {
  // e.target.append(item);
  const itemTop = item.getBoundingClientRect().top;
  const targetTop = e.target.getBoundingClientRect().top;
  itemTop < targetTop ? console.log('upper item') : console.log('lower item');
  const slots = document.querySelectorAll('.item');
  slots.forEach(x, index) => {
    if (x == e.target)  {
    }
   return index;
  }
}
const dragStart = (e) => { item = e.target; }

// двигатель и переносчик 2!
const move = (e) => {
  makeDraggableAll('.item');
  e.target.addEventListener('dragstart', dragStart);
  const slots = document.querySelectorAll('.slot');
  slots.forEach(x => {
    x.addEventListener('dragover', dragOver );
    x.addEventListener('drop', dragDrop );
    x.addEventListener('dragleave', dragLeave );
    x.addEventListener('dragenter', dragEnter );
  })
}

// распределитель импульсов грызуна - ( mouse event handler )
const handler = (e) => {
  if (e.target.parentNode.className === 'add' && e.type === 'click'){ add();  } 
  else if ( e.type === 'click' && e.target.classList.contains('x')) { del(e); } 
  else if ( e.type === 'dragstart' && e.target.classList.contains('item') ) { move(e); } 
  else if ( e.type === 'click' && e.target.classList.contains('sort')){ sort(e);}
}

// импульс грызуна - mouse events
document.addEventListener('click', handler, true);
document.addEventListener('mousedown', handler, true);
document.addEventListener('dragstart',handler, true);
document.addEventListener('dragover', handler, true);
