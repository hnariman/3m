## Plan 

### HTML
### CSS
### Icons

### Code

#### Input
- get item values on click (console.log)
#### Add Button
click()
createElement()
- define parent element
- add element to parent
#### Delete button
- register click event
- define element
- remove element
#### Sort button
click()
toggleBackground(color);
toggleIcon()
- get items values
- sort values
- create elements
- add values to elements 
- delete old elements
- add new elements
addListener(all)
#### Drag & Drop
mouseDown()
    changePoisitioning(absolute);
    toggleBackground()
    addListener(mouseMove)
  mouseMove()
  addListener(mouseUp)
  - get item coordinates
  - get mouse coordinates
  - apply mouse coordinates to item
  mouseUp()
  changePoisitioning(relative);
  toggleBackground();
#### Save list items values






#### Adding Element
Get list node (nodeList)
Create item
item.add class
1 child - create
1 child - add class
1 child - append
2 child - create
2 child - add class
2 child - append
3 child - create
3 child - add class
3 child - append




#### Drag
mousedown
parent background color transparency toggle
item.position = absolute
parent.position = relative 
mousemove listener
get mouse coordinates 
item-coordintes = mouse-coordinates 


if class (asc) sort
if class (dsc) reverse sort


#### Drag n drop functionality
div.item ondrag =>
  li.slot z-index = 2;

li.slot dragover =>
  background = grey;

li.slot drop =>
  if ( e.target === item )
  e.target.parentNode.remove(e.target)
  append(e.target)
  







#### Quicker DND solution:

create NodeList of list items
get item coordintes (center);

nodelist.forEach( x => {

    } )
// target 200px  item 400px
if item top > target top {
target remove from parent && target append to lower sibling
}

// target 200 px item 100px
if (item top < target top) {
target remove from parent && target and append to upper sibling
}

Wed 15 Apr 2020 04:47:41 AM +04

     April 2020       
Su Mo Tu We Th Fr Sa  
          1  2  3  4  
 5  6  7  8  9 10 11  
12 13 14 15 16 17 18  
19 20 21 22 23 24 25  
26 27 28 29 30        
                      
