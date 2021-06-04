'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event)
  console.log(sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
    srcElement: span
    target: span
    timeStamp: 1535.2850000053877
    toElement: span
    type: "click"
    )
  /* remove class 'active' from all article links  */

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
