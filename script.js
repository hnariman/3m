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
makeDraggableAll('.item');

// Добавляем новые слот и элемент 
const add = () => {
  const list = document.querySelector('ul');
  const item = createHTMLElement('li','item');
  const drag = createHTMLElement('i', 'drag');
  const input = createHTMLElement('input','itemText','text');
  const x = createHTMLElement('i','x');
  item.append(drag, input, x);
  list.append(item);
  makeDraggableAll('.item');
}

// зона Харакири 
const del = (e) => { e.target.parentNode.remove(e.target); }

// сортировка букв и слов
const sort = (e) => {
  const icon = document.querySelector('.sort');
  const list = document.querySelectorAll('.item');
  icon.style.color = 'black';
  icon.classList.toggle('fa-sort-amount-asc');
  icon.classList.toggle('fa-sort-amount-desc');
  const inputs = document.querySelectorAll('input');
  values = Array.from(inputs).map( x => x.value ).filter(x => x.length > 0 );
  // values = values.sort((a,b)=> a-b);
  if (icon.classList.contains('fa-sort-amount-asc' )){ values.sort();    }
  if (icon.classList.contains('fa-sort-amount-desc')){ values.reverse(); }
  inputs.forEach(( elem, index ) => { if ( values[index] !== undefined) elem.value = values[index]; })
  setTimeout(() => { icon.style.color = 'grey'; },500);
}

// двигатель и переносчик!
let item;
const dragOver  = (e) => { e.preventDefault(); }
const dragLeave = (e) => { e.preventDefault(); item.classList.remove('hover'); e.target.classList.remove('hover'); }
const dragEnter = (e) => { e.preventDefault(); item.classList.add('hover'); }
const dragStart = (e) => { item = e.target; item.classList.add('hover')} 
const dragEnd   = (e) => { e.preventDefault(); item.classList.remove('hover')} 

const dragDrop  = (e) => {
  e.preventDefault(); 
  e.stopPropagation();
  item.classList.remove('hover'); 
  e.target.classList.remove('hover'); 
  const itemTop = item.getBoundingClientRect().bottom;
  const targetTop = e.target.getBoundingClientRect().bottom;
  console.log(e.target.tagName);
  if ( e.target.tagName === 'LI' ) { e.target.parentElement.append(item) } 
  if ( e.target.tagName !== 'LI' ) { return false; };
  item.classList.remove('hover'); 
  e.target.classList.remove('hover'); 
  if ( itemTop < targetTop )  { e.target.parentElement.insertBefore(item, e.target) }
  else if( itemTop > targetTop )  {  e.target.parentElement.insertBefore(item, e.target.previousSibling) }
  else if( itemTop > e.target.parentElement.firstChild.getBoundingClientRect().bottom )
  { e.target.parentElement.insertBefore(item, e.target.parentElement.firstChild) }
}

document.querySelectorAll('.items').forEach(x => {
  x.addEventListener('dragstart', dragStart);
  x.addEventListener('dragend'  , dragEnd);
})

document.querySelectorAll('.items').forEach(x => {
  x.addEventListener('dragover'  ,  dragOver );
  x.addEventListener('drop'      ,  dragDrop );
  x.addEventListener('dragleave' , dragLeave );
  x.addEventListener('dragenter' , dragEnter );
})

// распределитель импульсов грызуна - ( mouse event handler )
const handler = (e) => {
  if (e.target.parentNode.className === 'add' && e.type === 'click'){ add();  } 
  else if ( e.type === 'click' && e.target.classList.contains('x')) { del(e); } 
  else if ( e.type === 'click' && e.target.classList.contains('sort')){ sort(e);}
}

document.addEventListener('click', handler, true);
document.querySelectorAll('.x', '.drag', 'input').forEach( x =>  {
  x.removeEventListener('dragover'  ,  dragOver, false );
  x.removeEventListener('drop'      ,  dragDrop, false );
  x.removeEventListener('dragleave' , dragLeave, false );
  x.removeEventListener('dragenter' , dragEnter, false );
  x.removeEventListener('dragend'   ,   dragEnd, false );
  x.removeEventListener('dragstart' , dragStart, false );
});
