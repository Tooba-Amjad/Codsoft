let p=document.getElementById('input')  
      
let ans=document.getElementById('answer')
  var inputstring=''
  var newstring=''
  var operation
  var answer
  var val=''
  const getinput=(value)=>{
     val+=value
      inputstring+=value
  p.innerHTML=inputstring
  }
  const getchar=(oper)=>{
      operation=oper
      result=parseInt(inputstring)
      p.innerHTML=inputstring+=oper
      val=''
  }
   const equals=()=>{
      number=parseInt(val)
      if(operation=='+')
       answer=result+number
       if(operation=='-')
       answer=result-number
       if(operation=='*')
       answer=result*number
       if(operation=='/')
       answer=result/number   
   ans.innerHTML=answer
  }

const Clear = () => {
    console.log('hello');
    inputstring = '';
    val = '';
    answer = '';
    ans.innerHTML = '';
    p.innerHTML = '';
}

  