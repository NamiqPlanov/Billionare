start1.addEventListener('onclcik',onlogin)


function randomquestiongenerator(){
    const question = randomquestion()
    questions1.textContent = question.Question
     fifty1.onclick = () => {
        const correctansindex = question.Answers.indexOf(question.correctanswer)
        const indice = [0,1,2,3].splice(correctansindex,1)
        relocateindice(indice,3)
        answers1.children[indice[0]].style.visibility = 'hidden'
        answers1.children[indice[1]].style.visibility = 'hidden'
        console.log(indice)
     }
    console.log(question)
   relocateindice(question.Answers,4).forEach((answer)=>{
    const p =document.createElement('p')
    p.textContent = answer
    p.onclick = (e)=>{
        if(e.target.textContent === question.correctanswer){
        console.log('halaldi') 
        e.target.classList.add ('correctanswer')
    }
    else{
        console.log('sef')
        e.target.classList.add  ('wronganswer')
        fifty1.disabled = 'true'
        joker1.disabled = 'true'
        call1.disabled = 'true'
    }
}
    answers1.appendChild(p)
   })
}
randomquestiongenerator()