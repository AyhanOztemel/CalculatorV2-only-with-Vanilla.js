import Values from './Values.js';
export default class Calculate{
  
//after this line calculations codes *****************************************
changeValue=(value)=>{
  console.log("changeValue")
  if(Values.lastValue != "" && Values.memoryValue == "" && Values.memoryOperator == ""&&Values.lastValue !="0"){
  if (Values.lastValue!=""&& Values.lastValue>0) { Values.lastValue=-1*Values.lastValue }
  else { Values.lastValue=-1*Values.lastValue }
  document.querySelector('#inputId').innerHTML=Values.lastValue;
  document.querySelector('#totalId').innerHTML=Values.lastValue;
 
}
 if (Values.lastValue != "" && Values.memoryValue != "" && Values.memoryOperator != ""&&Values.lastValue !="0" ) {
  if (Values.lastValue!=""&& Values.lastValue>0) { Values.lastValue=-1*Values.lastValue }
  else { Values.lastValue=-1*Values.lastValue }
  document.querySelector('#inputId').innerHTML=Values.lastValue;
  document.querySelector('#totalId').innerHTML=Values.memoryValue +Values.memoryOperator+Values.lastValue;
 
}
 if (Values.lastValue == "" && Values.memoryValue != "" && Values.memoryOperator == ""&&Values.memoryValue !="0") {
  if (Values.memoryValue!=""&& Values.memoryValue>0) { Values.memoryValue=-1*Values.memoryValue }
  else { Values.memoryValue=-1*Values.memoryValue }
  document.querySelector('#inputId').innerHTML="";
  document.querySelector('#totalId').innerHTML=Values.memoryValue;
  
}
}
equal=(value)=> {
  if(value == "="&& Values.memoryOperator=="%"){ 
    console.log("epual)")
    console.log(Values.memoryValue)   
    console.log(Values.lastValue) 
    Values.memoryValue=Values.memoryValue*(Values.lastValue/100)
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue;
   
     Values.memoryOperator="";
    value ="";
    Values.lastValue ="";
  }
  else if (value == "=" && Values.memoryOperator == "-" && Values.lastValue != "" && 
       Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) - Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue;
    
    Values.memoryOperator="";
    value ="";
    Values.lastValue = "";
  } 
  else if (value == "=" && Values.memoryOperator == "x" && Values.lastValue != "" &&
            Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) * Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue;
   
    Values.memoryOperator="";
    value ="";
    Values.lastValue = "";
  } 
  else if (value == "=" && Values.memoryOperator == "/" && Values.lastValue != "" &&
           Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) / Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue;
    Values.memoryOperator="";
    value ="";
    Values.lastValue = "";
  }
  else if (value == "=" && Values.memoryOperator == "+" && Values.lastValue != "" &&
            Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) + Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue;
    Values.memoryOperator="";
    value ="";
    Values.lastValue = "";
  }
}
addition=(value)=>{
   console.log("&&"+Values.lastValue+"&&"+ Values.memoryOperator+"&&"+Values.memoryValue)
  if (value=="+" && Values.memoryOperator == "+" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = (Number(Values.memoryValue) + Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (value == "+" && Values.memoryOperator == "-" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) - Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    Values.memoryOperator = value;
    Values.lastValue = "";
  }
  else if (value == "+" && Values.memoryOperator == "x" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) * Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
   
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value == "+" && Values.memoryOperator == "/" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) / Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value=="+" && Values.memoryOperator == "%" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = ((Number(Values.memoryValue) /100)*Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (Values.memoryOperator != "+" && Values.memoryOperator != "" && Values.lastValue == "") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator != "+" && Values.memoryOperator == "" && Values.lastValue == "" && Values.memoryValue!="") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator == "" && Values.memoryValue == "" && Values.lastValue != "") {
    
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.lastValue + value;
   
    Values.memoryValue = Values.lastValue;
    Values.memoryOperator = value;
    console.log("memory Operator --->"+Values.memoryOperator+"  memory Value--->"+Values.memoryValue+"  lastValue--->"+Values.lastValue)
    value = "";
    Values.lastValue = "";
  }  
}
subtraction=(value)=> {
  if (value=="-" && Values.memoryOperator == "-" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = (Number(Values.memoryValue) - Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (value == "-" && Values.memoryOperator == "+" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) + Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  }
  else if (value == "-" && Values.memoryOperator == "x" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) * Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value == "-" && Values.memoryOperator == "/" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) / Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value=="-" && Values.memoryOperator == "%" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = ((Number(Values.memoryValue) /100)*Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (Values.memoryOperator != "-" && Values.memoryOperator != "" && Values.lastValue == "") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator != "-" && Values.memoryOperator == "" && Values.lastValue == "" && Values.memoryValue!="") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
   }
  else if (Values.memoryOperator == "" && Values.memoryValue == "" && Values.lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.lastValue + value;
    Values.memoryValue = Values.lastValue;
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }  
}
multiplication=(value)=>{
  if (value=="x" && Values.memoryOperator == "x" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = (Number(Values.memoryValue) - Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (value == "x" && Values.memoryOperator == "+" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) + Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  }
  else if (value == "x" && Values.memoryOperator == "-" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) * Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value == "x" && Values.memoryOperator == "/" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) / Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value=="x" && Values.memoryOperator == "%" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = ((Number(Values.memoryValue) /100)*Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (Values.memoryOperator != "x" && Values.memoryOperator != "" && Values.lastValue == "") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator != "-" && Values.memoryOperator == "" && Values.lastValue == "" && Values.memoryValue!="") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator == "" && Values.memoryValue == "" && Values.lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.lastValue + value;
  
    
    Values.memoryValue = Values.lastValue;
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }  
}
division=(value)=>{
  if (value=="/" && Values.memoryOperator == "/" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = (Number(Values.memoryValue) / Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (value == "/" && Values.memoryOperator == "+" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) + Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  }
  else if (value == "/" && Values.memoryOperator == "x" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) * Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value == "/" && Values.memoryOperator == "-" && Values.lastValue != "" && Values.memoryValue != "") {
    Values.memoryValue = (Number(Values.memoryValue) - Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    Values.lastValue = "";
  } 
  else if (value=="/" && Values.memoryOperator == "%" && Values.lastValue != "" &&  Values.memoryValue 
  != "") {
    Values.memoryValue = ((Number(Values.memoryValue) /100)*Number(Values.lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
  
    
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }
  else if (Values.memoryOperator != "/" && Values.memoryOperator != "" && Values.lastValue == "") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator != "/" && Values.memoryOperator == "" && Values.lastValue == "" && Values.memoryValue!="") {
    Values.memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=Values.memoryValue + value;
    
  }
  else if (Values.memoryOperator == "" && Values.memoryValue == "" && Values.lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=Values.lastValue + value;
  
    
    Values.memoryValue = Values.lastValue;
    Values.memoryOperator = value;
    value = "";
    Values.lastValue = "";
  }  
}
sqrtOperation=(value)=>{
  console.log("square :"+value)
  if (Values.lastValue != "" && Values.memoryValue == "" && Values.memoryOperator == "" && Values.lastValue>=0 ) {
    var kareKok = Math.sqrt(Values.lastValue);
    Values.memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    Values.lastValue ="";
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)    
  }
  else if (Values.lastValue == "" && Values.memoryValue != "" && Values.memoryOperator == "") {
    var kareKok = Math.sqrt(Values.memoryValue);
    Values.memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    Values.lastValue ="";
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)  
  }
  else if (Values.lastValue != "" && Values.memoryValue != "" && Values.memoryOperator == "") {
    var kareKok = Math.sqrt(Values.lastValue);
    Values.memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = Values.memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    Values.lastValue ="";
    console.log("Values.lastValue :"+Values.lastValue)
    console.log("Values.memoryValue :"+Values.memoryValue)
    console.log("Values.memoryOperator :"+Values.memoryOperator)  
  }
  else if (Values.lastValue != "" && Values.memoryValue != "" && Values.memoryOperator != "") {
    var kareKok = Math.sqrt(Values.lastValue);
    if (Values.memoryOperator == "+") {
      kareKok = Number(Values.memoryValue) + Number( kareKok);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+"√¯"+Values.lastValue+")"+"="+kareKok;
    }
    if (Values.memoryOperator == "-") {
      kareKok = Number(Values.memoryValue) - Number( kareKok);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+"√¯"+Values.lastValue+")"+"="+kareKok;
    }
    if (Values.memoryOperator == "x") {
      kareKok = Number(Values.memoryValue) * Number( kareKok);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+"√¯"+Values.lastValue+")"+"="+kareKok;
    }
    if (Values.memoryOperator == "/") {
      kareKok = Number(Values.memoryValue) / Number( kareKok);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+"√¯"+Values.lastValue+")"+"="+kareKok;
    }
    if (Values.memoryOperator == "%") {
      console.log("% kare")
      kareKok = Number(Values.memoryValue/100) * Number( kareKok);
      document.querySelector('#totalId').innerHTML=Values.memoryValue+Values.memoryOperator+"("+"√¯"+Values.lastValue+")"+"="+kareKok;
    }
  console.log("----------------")
  console.log("Values.lastValue :"+Values.lastValue)
  console.log("Values.memoryValue :"+Values.memoryValue)
  console.log("Values.memoryOperator :"+Values.memoryOperator)
  document.querySelector('#inputId').innerHTML = "";
  Values.lastValue = "";
  Values.memoryOperator=""
  Values.memoryValue = kareKok;
  console.log("----------------")
  console.log("new Values.lastValue :"+Values.lastValue)
  console.log(" new Values.memoryValue :"+Values.memoryValue)
  console.log("new Values.memoryOperator :"+Values.memoryOperator)
  }
  }
percent=(value)=>{   
  console.log("percent calculate")
  console.log("value :"+value)
  console.log("Values.lastValue :"+Values.lastValue)
  console.log("Values.memoryValue :"+Values.memoryValue)
  console.log("Values.memoryOperator:"+Values.memoryOperator) 
 
  if(value=="%" && Values.lastValue!=""&&Values.memoryOperator==""&& Values.memoryValue==""){
    console.log("yüzde :01")
    document.querySelector('#totalId').innerHTML = Values.lastValue+value;
    document.querySelector('#inputId').innerHTML = "";
      Values.memoryValue=Values.lastValue;
      Values.lastValue = "";
      Values.memoryOperator=value;
      
    }
  else if (value=="%"&& Values.memoryValue!=""&& Values.memoryOperator!="%" && Values.lastValue==""){
    console.log("yüzde :02")
    Values.memoryOperator=value;
    document.querySelector('#totalId').innerHTML = Values.memoryValue+Values.memoryOperator;
    value="";
  }
  
}
exponentiation(){
  if (Values.lastValue != "" &&Values.memoryValue == "" && Values.memoryOperator == "") {
    var takeSquare= Values.lastValue*Values.lastValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue = "";
   Values.memoryValue = takeSquare
  }
  else if (Values.lastValue == "" &&Values.memoryValue != "" && Values.memoryOperator == "") {
    var takeSquare=Values.memoryValue*Values.memoryValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue = "";
   Values.memoryValue = takeSquare
  }
  else if (Values.lastValue != "" &&Values.memoryValue != "" && Values.memoryOperator == "") {
    var takeSquare= Values.lastValue*Values.lastValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue = "";
   Values.memoryValue = takeSquare
  }
  else if (Values.lastValue != "" &&Values.memoryValue != "" && Values.memoryOperator != "") {
    var takeSquare= Values.lastValue*Values.lastValue;
    if (Values.memoryOperator == "+") {
     
      takeSquare= Number(Values.memoryValue) + Number(takeSquare);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+Values.lastValue+"x"+Values.lastValue+")"+"="+takeSquare
    }
    else if (Values.memoryOperator == "-") {
      takeSquare= Number(Values.memoryValue) - Number(takeSquare);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+Values.lastValue+"x"+Values.lastValue+")"+"="+takeSquare
    }
    else if (Values.memoryOperator == "x") {
      takeSquare= Number(Values.memoryValue) * Number(takeSquare);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+Values.lastValue+"x"+Values.lastValue+")"+"="+takeSquare
    }
    else if (Values.memoryOperator == "/") {
      takeSquare= Number(Values.memoryValue) / Number(takeSquare);
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+Values.lastValue+"x"+Values.lastValue+")"+"="+takeSquare
    }
    else if (Values.memoryOperator == "%") {
      takeSquare= (Number(Values.memoryValue)/100) * Number(takeSquare);
      console.log(takeSquare)
      document.querySelector('#totalId').innerHTML =Values.memoryValue+Values.memoryOperator+"("+Values.lastValue+"x"+Values.lastValue+")"+"="+takeSquare
    }
    document.querySelector('#inputId').innerHTML = "";
    Values.lastValue = "";
    Values.memoryOperator=""
   Values.memoryValue = takeSquare
  }
}
}



