function onlogin(){
    console.log(name1.value)
    console.log(surname1.value)
    console.log(phone1.value)
    loginpage.style.display = 'none'
    gamepage.style.display = 'flex'
   
}

function radnomindex(){
    return Math.floor(Math.random()*questionsarr.length)
}
function randomquestion(){
    const questionindex = radnomindex()
    const question = questionsarr[questionindex] 
      questionsarr.splice(questionindex,1)
      return question
}
function relocateindice(arr,maxlength){
    const r1 = Math.floor(Math.random()*maxlength)
    const r2 = Math.floor(Math.random()*maxlength)
    arraymove(arr,r1,2)
    arraymove(arr,r2,3)
    function arraymove(arr,fromindex,toindex){
        var elem = arr[fromindex]
        arr.splice(fromindex,1)
        arr.splice(toindex,0,elem)
    }
    return arr
}