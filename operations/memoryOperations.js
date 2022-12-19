
import Values from './Values.js';

export default class MemoryOperations{
  positiveMemoryAdd(value){ 
    console.log("*****************") 
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)
  if(value=="M+"&& Values.memoryOperator!="" && Values.memoryValue!=""&&Values.lastValue!=""){
    console.log("1111111111111111111111111")
    if(Values.memoryOperator=="+"){
      console.log("1-2222222222222222222222")
        Values.memoryValue=Number(Values.memoryValue)+Number(Values.lastValue)
        Values.memory.push(Values.memoryValue);
        for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }   
      }
    else if(Values.memoryOperator=="-"){
      console.log("1-3333333333333333333333")
      Values.memoryValue=Number(Values.memoryValue)-Number(Values.lastValue)
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }
      }       
    else if(Values.memoryOperator=="x"){
      console.log("1-44444444444444444444444444444444")
      Values.memoryValue=Number(Values.memoryValue)*Number(Values.lastValue)
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }
      }         
    else if(Values.memoryOperator=="/"){
      console.log("1-555555555555555555555555555555555555")
      Values.memoryValue=Number(Values.memoryValue)/Number(Values.lastValue)
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }             
      }  
      else if(Values.memoryOperator=="%"){
        console.log("1-655555555555555555555555555555555555")
        Values.memoryValue=(Number(Values.memoryValue)/100)*Number(Values.lastValue)
        Values.memory.push(Values.memoryValue);
        for (let index = 0; index < Values.memory.length; index++) {
            console.log(Values.memory[index]); }             
        }  
  
    document.querySelector('#totalId').innerHTML =Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue=""; 
    Values.memoryOperator="";
    console.log("******EXIT********") 
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)
      } 
  else if(value=="M+"&& Values.memoryOperator=="" && Values.memoryValue!=""&&Values.lastValue==""){
    console.log("77777777777777777777777777777777777777")
    Values.memory.push(Values.memoryValue);
    for (let index = 0; index < Values.memory.length; index++) {
      console.log(Values.memory[index]); } 
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "" 
    Values.lastValue=""; 
    Values.memoryOperator=""     
   }
  else if(value=="M+"&& Values.memoryOperator=="" && Values.memoryValue!=""&&Values.lastValue!=""){
  console.log("66666666666666666666666666666666666666666")
    Values.memory.push(Values.lastValue);
    Values.memoryValue=Values.lastValue;
    for (let index = 0; index < Values.memory.length; index++) {
        console.log(Values.memory[index]); }  
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = ""     
    Values.memoryOperator="" 
    Values.lastValue="";
      }    
  else if (value=="M+" && Values.memoryOperator=="" && Values.memoryValue=="" && Values.lastValue!="" ){  
  console.log("???????????????????????") 
  console.log("Values.lastValue :"+Values.lastValue)
  console.log("Values.memoryValue :"+Values.memoryValue)
  console.log("Values.memoryOperator :"+Values.memoryOperator)
  Values.memory.push(Values.lastValue);
  Values.memoryValue=Values.lastValue;
  for (let index = 0; index < Values.memory.length; index++) {
       console.log(Values.memory[index]); } 
  document.querySelector('#totalId').innerHTML = Values.memoryValue;
  document.querySelector('#inputId').innerHTML = "";
  Values.lastValue="";
  Values.memoryOperator="";
  console.log("Values.lastValue :"+Values.lastValue)
  console.log("Values.memoryValue :"+Values.memoryValue)
   }
  
  }
  negativeMemoryAdd(value){
  console.log("*****************") 
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)
  if(value=="M-"&& Values.memoryOperator!="" && Values.memoryValue!=""&&Values.lastValue!=""){
    console.log("1111111111111111111111111")
    if(Values.memoryOperator=="+"){
      console.log("1-2222222222222222222222")
        Values.memoryValue=Number(Values.memoryValue)+Number(Values.lastValue)
        //memory=[];
        Values.memory.push(Values.memoryValue);
        for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }   
      }
    else if(Values.memoryOperator=="-"){
      console.log("1-3333333333333333333333")
      Values.memoryValue=Number(Values.memoryValue)-Number(Values.lastValue)
      //memory=[];
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }
      }       
    else if(Values.memoryOperator=="x"){
      console.log("1-44444444444444444444444444444444")
      Values.memoryValue=Number(Values.memoryValue)*Number(Values.lastValue)
     
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }
      }         
    else if(Values.memoryOperator=="/"){
      console.log("1-555555555555555555555555555555555555")
      Values.memoryValue=Number(Values.memoryValue)/Number(Values.lastValue)
      
      Values.memory.push(Values.memoryValue);
      for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); }             
      } 
     else if(Values.memoryOperator=="%"){
        console.log("1-655555555555555555555555555555555555")
        Values.memoryValue=(Number(Values.memoryValue)/100)*Number(Values.lastValue)
        
        Values.memory.push(Values.memoryValue);
        for (let index = 0; index < Values.memory.length; index++) {
            console.log(Values.memory[index]); }             
        }
  
    document.querySelector('#totalId').innerHTML =Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue=""; 
    Values.memoryOperator="";
        
      } 
      else if(value=="M-"&& Values.memoryOperator=="" && Values.memoryValue!=""&&Values.lastValue==""){
        console.log("77777777777777777777777777777777777777")
        Values.memory.push(-1*Values.memoryValue);
        
        for (let index = 0; index < Values.memory.length; index++) {
          console.log(Values.memory[index]); } 
          document.querySelector('#totalId').innerHTML = Values.memoryValue;
          document.querySelector('#inputId').innerHTML = "" 
        Values.lastValue=""; 
          
        Values.memoryOperator=""     
       }
     else if(value=="M-"&& Values.memoryOperator=="" && Values.memoryValue!=""&&Values.lastValue!=""){
      console.log("66666666666666666666666666666666666666666")
        Values.memory.push(-1*Values.lastValue);
        Values.memoryValue=Values.lastValue;
        for (let index = 0; index < Values.memory.length; index++) {
            console.log(Values.memory[index]); }  
            document.querySelector('#totalId').innerHTML = Values.memoryValue;
            document.querySelector('#inputId').innerHTML = ""     
        Values.memoryOperator="" 
        Values.lastValue="";
          }    
    else if (value=="M-" && Values.memoryOperator=="" && Values.memoryValue=="" && Values.lastValue!="" ){  
    console.log("???????????????????????") 
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)
    Values.memory.push(-1*Values.lastValue);
  
    Values.memoryValue=Values.lastValue;
    for (let index = 0; index < Values.memory.length; index++) {
           console.log(Values.memory[index]); } 
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue="";
    Values.memoryOperator="";
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
       }
      
  }
  memorySum(value){
  console.log("-----------------")  
  var memoryAdd=0;
  if (value=="MR" && Values.memory.length>0 ){
  for (let index = 0; index < Values.memory.length; index++) {
    console.log(Values.memory[index]);
    memoryAdd += Number(Values.memory[index])
      }
  Values.memoryValue=memoryAdd; 
    
  document.querySelector('#totalId').innerHTML = "MR="+ Values.memoryValue 
  memoryAdd==""
  Values.lastValue="";
  
  
  console.log("MR sum :"+memoryAdd); 
  console.log("Values.memoryValue :"+Values.memoryValue) 
  console.log("Values.memoryOperator :"+Values.memoryOperator)
  console.log("Values.lastvalue  :"+Values.lastValue)
  
  }
  }
  memoryClear(value){
  if (value=="MC" && Values.memory.length>0 && Values.memory!=""){
    console.log(Values.memory.length)
    console.log("*****MEMORY CLEAR***********")
    Values.memory=[]
    document.querySelector('#totalId').innerHTML =""; 
    document.querySelector('#inputId').innerHTML = "";
    Values.memoryValue=="" 
    Values.memoryOperator==""
  }
  console.log("*****MEMORY CLEAR***********")
  }
}