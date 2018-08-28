# Konami Code Lab

## Objectives
1. Practice using event listeners.
2. Explain how event listeners are triggered.
3. Capture user interactions to trigger events on a page.

## Instructions
In `konami_code.js`, you'll notice that we've provided very little: well, nothing except -- what's that? If you open the file up in your text editor, you should see:
```js



function init() {
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
  var index = 0
  document.body.addEventListener('keydown' ,function(e){
  var key = e.key
  if (key === codes[index]) {
     index++;
     if (index === codes.length) {
       alert('Yippie');
       index = 0;
     }
  } else {
    index = 0;
  }

})
}
 
 
 
 
 
 
 

```

Have fun!

## Hints
`KeyboardEvent` has gotten lots of recent updates. The `key` and `code` properties recently replaced `which`, `keyCode`, and `charCode` properties, which were often implemented slightly differently between different browsers and would report different values across different operating systems. Some environments (node in particular) don't know about `KeyboardEvent`


## Resources
- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
- [MDN - KeyboardEvent][KeyboardEvent]
- [MDN — keydown][keydown]

[keydown]: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
[KeyboardEvent]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

<p class='util--hide'>View <a href='https://learn.co/lessons/konami-code-lab'>Konami Code Lab</a> on Learn.co and start learning to code for free.</p>
