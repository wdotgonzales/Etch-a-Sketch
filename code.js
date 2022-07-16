for(let x = 0;x < 256;x ++){
  const multipledivs = document.createElement('div');
  multipledivs.style.backgroundColor = 'white';

  multipledivs.style.height = '30px'
  multipledivs.classList.add('multipledivs');

  multipledivs.style.border = '0.1em solid black'
  // multipledivs.innerText = x + 1;

  const divs = document.querySelector('.sketch-container').appendChild(multipledivs);


  const sketch = document.querySelector('.sketch');
  const eraser = document.querySelector('.eraser');
  const reset = document.querySelector('.reset');


  sketch.addEventListener('click',() => {
    sketch.style.backgroundColor = 'black'
    sketch.style.color = 'white'

    eraser.style.backgroundColor = 'white';
    eraser.style.color = 'black';

    divs.addEventListener('mousemove',() => {
      divs.style.backgroundColor = 'orange'
    })
  })


  eraser.addEventListener('click',() => {
    eraser.style.backgroundColor = 'black';
    eraser.style.color = 'white';

    sketch.style.backgroundColor = 'white';
    sketch.style.color = 'black';


    divs.addEventListener('mousemove',() => {
      divs.style.backgroundColor = 'white'
    })
  })

  reset.addEventListener('click',() => {
    eraser.style.backgroundColor = 'white';
    eraser.style.color = 'black';

    sketch.style.backgroundColor = 'white';
    sketch.style.color = 'black';

    divs.style.backgroundColor = 'white'

    divs.addEventListener('mousemove',() => {
      divs.style.backgroundColor = 'white'
    })
  })
}
