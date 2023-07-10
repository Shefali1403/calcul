console.log('hello');
let string="";
let buttons= document.querySelectorAll('.but');
Array.from(buttons).forEach(button=>{
      button.addEventListener('click',(e)=>{
        try{
        if(e.target.innerText=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
       else if(e.target.innerText=='C'){
            string="";
            document.querySelector('input').value=string;
            
        }
       else if(e.target.innerText=='del'){
             string=string.slice(0, string.length-1);
            console.log(string);
            document.querySelector('input').value=string;
        }
        else{
         string= string+e.target.innerText;
         document.querySelector('input').value=string;
        }
    }
    
    catch(error){
        document.querySelector('input').value="error";
    }
})
})