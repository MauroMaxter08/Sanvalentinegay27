const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"Brujita Piensalo Bien..💜", images:"images/cat-02.gif"},
    {text:"Consideralo de nuevo brujita preciosa!💜", images:"images/cat-03.gif"},
    {text:"Vamos, Brujita atrévete a un si.. no me hagas hechizarte.💜", images:"images/cat-04.gif"},
    {text:"Que la Distancia No te haga dudar de nuestro AMOR.💜", images:"images/cat-05.gif"},
  ]
  const ohyes = {text:
    "💜💜💜Aunque te haya costado, sabía que me elegirías... Por eso quiero decirte que te quiero mucho. Con este pequeño detalle, quiero que sepas que sigues en mi corazón y en mi mente. Espero que tengas un maravilloso día y que esto te deje una sonrisa. 💜💜T.Q.M.💜💜 !!", 
    images:"images/cat-yes.gif"}
  const cat = document.querySelector('.cat')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  
  let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Claro,Que Si!💜"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No...'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })