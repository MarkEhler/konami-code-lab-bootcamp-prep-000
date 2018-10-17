const codes = [
38, 38, 40, 40, 37, 39, 37, 39, 66, 65
];

function init() {
  let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
 // const key = e.key;
  var key = parseInt(e.which || e.detail);
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}
