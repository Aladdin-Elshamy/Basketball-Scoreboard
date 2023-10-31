document.querySelectorAll('div button').forEach(button => {
    button.addEventListener('click', function addOne(e){
        let parentDiv = e.currentTarget.parentNode;
        let scoreValue = Number(parentDiv.previousElementSibling.textContent)
        let score = parentDiv.previousElementSibling
        if(parentDiv.className.includes("home")){
            scoreValue+=Number(e.currentTarget.textContent[1])
            score.textContent = scoreValue;
        }   
        if(parentDiv.className.includes("guest")){
            scoreValue+=Number(e.currentTarget.textContent[1])
            score.textContent = scoreValue;
        }        
    })
})

