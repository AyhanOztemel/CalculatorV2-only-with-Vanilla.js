
var lastValue = "";
var memoryOperator = "";
var memoryValue = "";
var memory=[];
var percentTemporaryOperator="";
var percentTemporaryValue="";

//after this line calculations codes *****************************************
var changeValue=(value)=>{
  console.log("changeValue")
  if(lastValue != "" && memoryValue == "" && memoryOperator == ""&&lastValue !="0"){
  if (lastValue!=""&& lastValue>0) { lastValue=-1*lastValue }
  else { lastValue=-1*lastValue }
  document.querySelector('#inputId').innerHTML=lastValue;
  document.querySelector('#totalId').innerHTML=lastValue;
  //document.getElementById("icerik").value = lastValue;
 //document.getElementById("sonuc").innerHTML = lastValue;
}
 if (lastValue != "" && memoryValue != "" && memoryOperator != ""&&lastValue !="0" ) {
  if (lastValue!=""&& lastValue>0) { lastValue=-1*lastValue }
  else { lastValue=-1*lastValue }
  document.querySelector('#inputId').innerHTML=lastValue;
  document.querySelector('#totalId').innerHTML=memoryValue +memoryOperator+lastValue;
  // document.getElementById("icerik").value = lastValue;
  // document.getElementById("sonuc").innerHTML = memoryValue+memoryOperator+lastValue;
}
 if (lastValue == "" && memoryValue != "" && memoryOperator == ""&&memoryValue !="0") {
  if (memoryValue!=""&& memoryValue>0) { memoryValue=-1*memoryValue }
  else { memoryValue=-1*memoryValue }
  document.querySelector('#inputId').innerHTML="";
  document.querySelector('#totalId').innerHTML=memoryValue;
  // document.getElementById("icerik").value = lastValue;
  // document.getElementById("sonuc").innerHTML = memoryValue+memoryOperator+lastValue;
}
}
var equal=(value)=> {
  if(value == "="&& memoryOperator=="%"){ 
    console.log("epual)")
    console.log(memoryValue)   
    console.log(lastValue) 
    memoryValue=memoryValue*(lastValue/100)
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue ;
     memoryOperator="";
    value ="";
    lastValue ="";
  }
  else if (value == "=" && memoryOperator == "-" && lastValue != "" && 
       memoryValue != "") {
    memoryValue = (Number(memoryValue) - Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue; 
    memoryOperator="";
    value ="";
    lastValue = "";
  } 
  else if (value == "=" && memoryOperator == "x" && lastValue != "" &&
            memoryValue != "") {
    memoryValue = (Number(memoryValue) * Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue; 
    memoryOperator="";
    value ="";
    lastValue = "";
  } 
  else if (value == "=" && memoryOperator == "/" && lastValue != "" &&
           memoryValue != "") {
    memoryValue = (Number(memoryValue) / Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue;
    memoryOperator="";
    value ="";
    lastValue = "";
  }
  else if (value == "=" && memoryOperator == "+" && lastValue != "" &&
            memoryValue != "") {
    memoryValue = (Number(memoryValue) + Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue;
    memoryOperator="";
    value ="";
    lastValue = "";
  }
}
var addition=(value)=>{
  if (value=="+" && memoryOperator == "+" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = (Number(memoryValue) + Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (value == "+" && memoryOperator == "-" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) - Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  }
  else if (value == "+" && memoryOperator == "x" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) * Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value == "+" && memoryOperator == "/" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) / Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value=="+" && memoryOperator == "%" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = ((Number(memoryValue) /100)*Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (memoryOperator != "+" && memoryOperator != "" && lastValue == "") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator != "+" && memoryOperator == "" && lastValue == "" && memoryValue!="") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator == "" && memoryValue == "" && lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=lastValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = lastValue + value;
    memoryValue = lastValue;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }  
}
var subtraction=(value)=> {
  if (value=="-" && memoryOperator == "-" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = (Number(memoryValue) - Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (value == "-" && memoryOperator == "+" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) + Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  }
  else if (value == "-" && memoryOperator == "x" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) * Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value == "-" && memoryOperator == "/" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) / Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value=="-" && memoryOperator == "%" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = ((Number(memoryValue) /100)*Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (memoryOperator != "-" && memoryOperator != "" && lastValue == "") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator != "-" && memoryOperator == "" && lastValue == "" && memoryValue!="") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
  //   document.getElementById("sonuc").innerHTML = memoryValue + value;
   }
  else if (memoryOperator == "" && memoryValue == "" && lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=lastValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = lastValue + value;
    memoryValue = lastValue;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }  
}
var multiplication=(value)=>{
  if (value=="x" && memoryOperator == "x" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = (Number(memoryValue) - Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (value == "x" && memoryOperator == "+" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) + Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  }
  else if (value == "x" && memoryOperator == "-" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) * Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value == "x" && memoryOperator == "/" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) / Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value=="x" && memoryOperator == "%" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = ((Number(memoryValue) /100)*Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (memoryOperator != "x" && memoryOperator != "" && lastValue == "") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator != "-" && memoryOperator == "" && lastValue == "" && memoryValue!="") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator == "" && memoryValue == "" && lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=lastValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = lastValue + value;
    memoryValue = lastValue;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }  
}
var division=(value)=>{
  if (value=="/" && memoryOperator == "/" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = (Number(memoryValue) - Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (value == "/" && memoryOperator == "+" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) + Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  }
  else if (value == "/" && memoryOperator == "x" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) * Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value == "/" && memoryOperator == "-" && lastValue != "" && memoryValue != "") {
    memoryValue = (Number(memoryValue) / Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    lastValue = "";
  } 
  else if (value=="/" && memoryOperator == "%" && lastValue != "" &&  memoryValue 
  != "") {
    memoryValue = ((Number(memoryValue) /100)*Number(lastValue)).toString();
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }
  else if (memoryOperator != "/" && memoryOperator != "" && lastValue == "") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator != "/" && memoryOperator == "" && lastValue == "" && memoryValue!="") {
    memoryOperator = value;
    
    document.querySelector('#totalId').innerHTML=memoryValue + value;
    // document.getElementById("sonuc").innerHTML = memoryValue + value;
  }
  else if (memoryOperator == "" && memoryValue == "" && lastValue != "") {
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=lastValue + value;
    // document.getElementById("icerik").value = "";
    // document.getElementById("sonuc").innerHTML = lastValue + value;
    memoryValue = lastValue;
    memoryOperator = value;
    value = "";
    lastValue = "";
  }  
}
var sqrtOperation=(value)=>{
  console.log("square :"+value)
  if (lastValue != "" && memoryValue == "" && memoryOperator == "" && lastValue>=0 ) {
    var kareKok = Math.sqrt(lastValue);
    memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    lastValue ="";
    console.log("lastValue :"+lastValue)
    console.log("memoryValue :"+memoryValue)
    console.log("memoryOperator :"+memoryOperator)    
  }
  else if (lastValue == "" && memoryValue != "" && memoryOperator == "") {
    var kareKok = Math.sqrt(memoryValue);
    memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    lastValue ="";
    console.log("lastValue :"+lastValue)
    console.log("memoryValue :"+memoryValue)
    console.log("memoryOperator :"+memoryOperator)  
  }
  else if (lastValue != "" && memoryValue != "" && memoryOperator == "") {
    var kareKok = Math.sqrt(lastValue);
    memoryValue = kareKok;
    document.querySelector('#totalId').innerHTML = memoryValue;
    document.querySelector('#inputId').innerHTML = "";
    console.log("*****************") 
    lastValue ="";
    console.log("lastValue :"+lastValue)
    console.log("memoryValue :"+memoryValue)
    console.log("memoryOperator :"+memoryOperator)  
  }
  else if (lastValue != "" && memoryValue != "" && memoryOperator != "") {
    var kareKok = Math.sqrt(lastValue);
    if (memoryOperator == "+") {
      kareKok = Number(memoryValue) + Number( kareKok);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+"√¯"+lastValue+")"+"="+kareKok;
    }
    if (memoryOperator == "-") {
      kareKok = Number(memoryValue) - Number( kareKok);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+"√¯"+lastValue+")"+"="+kareKok;
    }
    if (memoryOperator == "x") {
      kareKok = Number(memoryValue) * Number( kareKok);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+"√¯"+lastValue+")"+"="+kareKok;
    }
    if (memoryOperator == "/") {
      kareKok = Number(memoryValue) / Number( kareKok);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+"√¯"+lastValue+")"+"="+kareKok;
    }
    if (memoryOperator == "%") {
      console.log("% kare")
      kareKok = Number(memoryValue/100) * Number( kareKok);
      document.querySelector('#totalId').innerHTML=memoryValue+memoryOperator+"("+"√¯"+lastValue+")"+"="+kareKok;
    }
  console.log("----------------")
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator :"+memoryOperator)
  document.querySelector('#inputId').innerHTML = "";
  lastValue = "";
  memoryOperator=""
  memoryValue = kareKok;
  console.log("----------------")
  console.log("new lastValue :"+lastValue)
  console.log(" new memoryValue :"+memoryValue)
  console.log("new memoryOperator :"+memoryOperator)
  }
  }
var percent=(value)=>{   
  console.log("percent calculate")
  console.log("value :"+value)
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator:"+memoryOperator) 
 
  if(value=="%" && lastValue!=""&&memoryOperator==""&& memoryValue==""){
    console.log("yüzde :01")
    document.querySelector('#totalId').innerHTML = lastValue+value;
    document.querySelector('#inputId').innerHTML = "";
      memoryValue=lastValue;
      lastValue = "";
      memoryOperator=value;
      
    }
  else if (value=="%"&& memoryValue!=""&& memoryOperator!="%" && lastValue==""){
    console.log("yüzde :02")
    memoryOperator=value;
    document.querySelector('#totalId').innerHTML = memoryValue+memoryOperator;
    value="";
  }
  
}
function exponentiation(){
  if (lastValue != "" &&memoryValue == "" && memoryOperator == "") {
    var takeSquare= lastValue*lastValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    lastValue = "";
   memoryValue = takeSquare
  }
  else if (lastValue == "" &&memoryValue != "" && memoryOperator == "") {
    var takeSquare=memoryValue*memoryValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    lastValue = "";
   memoryValue = takeSquare
  }
  else if (lastValue != "" &&memoryValue != "" && memoryOperator == "") {
    var takeSquare= lastValue*lastValue;
  
    document.querySelector('#totalId').innerHTML = takeSquare
    document.querySelector('#inputId').innerHTML = "";
    lastValue = "";
   memoryValue = takeSquare
  }
  else if (lastValue != "" &&memoryValue != "" && memoryOperator != "") {
    var takeSquare= lastValue*lastValue;
    if (memoryOperator == "+") {
     
      takeSquare= Number(memoryValue) + Number(takeSquare);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+lastValue+"x"+lastValue+")"+"="+takeSquare
    }
    else if (memoryOperator == "-") {
      takeSquare= Number(memoryValue) - Number(takeSquare);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+lastValue+"x"+lastValue+")"+"="+takeSquare
    }
    else if (memoryOperator == "x") {
      takeSquare= Number(memoryValue) * Number(takeSquare);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+lastValue+"x"+lastValue+")"+"="+takeSquare
    }
    else if (memoryOperator == "/") {
      takeSquare= Number(memoryValue) / Number(takeSquare);
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+lastValue+"x"+lastValue+")"+"="+takeSquare
    }
    else if (memoryOperator == "%") {
      takeSquare= (Number(memoryValue)/100) * Number(takeSquare);
      console.log(takeSquare)
      document.querySelector('#totalId').innerHTML =memoryValue+memoryOperator+"("+lastValue+"x"+lastValue+")"+"="+takeSquare
    }
    document.querySelector('#inputId').innerHTML = "";
    lastValue = "";
    memoryOperator=""
   memoryValue = takeSquare
  }
}
//after this line inputWite codes *********************************************
var numberWrite=(value)=> {
  console.log("numberWrite"+" "+value);
  if (value != "0" && value != "." && memoryOperator != "" && memoryValue != "" &&
     lastValue != "0" &&  value != "00") {
    console.log("numberWrite:01"+" "+value);
    if (memoryOperator == "=") {
      memoryValue = "";
      memoryOperator = "";
    }
    lastValue += value;
    //document.getElementById("sonuc").innerHTML =
    //memoryValue + memoryOperator + lastValue;
    document.querySelector('#totalId').innerHTML= memoryValue + memoryOperator + lastValue;
    document.querySelector('#inputId').innerHTML=lastValue;
    //document.getElementsByClassName("input").innerHTML = lastValue;
    } 
  else if (value != "." && value != "0" && lastValue != "0" && value != "00") {
    console.log("NumberWrite:02"+" "+value);
    lastValue += value;
    console.log("lastValue :"+lastValue)
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    //document.getElementById("icerik").value = lastValue;
    }
  }
var zeroWrite=(value)=> {
  console.log(value+"  :" +"welcome")
  if (value == 0 && memoryValue==""&& lastValue =="" &&memoryOperator=="") {
    console.log("zeroWrite:01");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("icerik").value = lastValue;
    // document.getElementById("sonuc").innerHTML =lastValue;
  }
  else if (value == 0 && lastValue == "." && memoryValue==""&&memoryOperator=="") {
    console.log("zeroWrite:02");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML = lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == 0 && lastValue !="0"&& memoryValue==""&&memoryOperator=="") {
    console.log("zeroWrite:03");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML=lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == 0 && lastValue !="0"&& memoryValue!=""&&memoryOperator!="") {
    console.log("zeroWrite:04");
    lastValue += value;
    document.querySelector('#totalId').innerHTML=memoryValue +memoryOperator + lastValue;
    document.querySelector('#inputId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML =
    //        memoryValue +memoryOperator + lastValue;
    // document.getElementById("icerik").value = lastValue;
  }

  else if (value == 0 && lastValue !="0"&& memoryValue!=""&& memoryOperator=="") {
    console.log("zeroWrite:05");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML = lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
}
var doubleZeroWrite=value=>{
  if (value == "00" && lastValue == "."&& memoryValue==""&&memoryOperator=="") {
    console.log("doubleZeroWrite:01");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML = lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == "00" && lastValue != ""&& memoryValue!=""& memoryOperator !=""&&lastValue!="0") {
    console.log("doubleZeroWrite:02");
    lastValue += value;
    document.querySelector('#totalId').innerHTML= memoryValue + memoryOperator + lastValue;
    document.querySelector('#inputId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML =
    //   memoryValue + memoryOperator + lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == "00" && lastValue != ""&& memoryValue!=""& memoryOperator !=""&&lastValue!="0") {
    console.log("doubleZeroWrite:022");
    lastValue += value;
    document.querySelector('#totalId').innerHTML=memoryValue + memoryOperator + lastValue;
    document.querySelector('#inputId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML =
    //   memoryValue + memoryOperator + lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == "00" && lastValue != ""&& memoryValue==""& memoryOperator ==""&& lastValue!="0") {
    console.log("doubleZeroWrite:03");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML =lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
  else if (value == "00" && lastValue != ""&& memoryValue!=""& memoryOperator ==""&&lastValue!="0") {
    console.log("doubleZeroWrite:04");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML =lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
}
var pointWrite=value=>{
  if (value == "." && lastValue==""&& memoryOperator != "" && memoryValue!=""
  ) {
    lastValue += value;
    document.querySelector('#totalId').innerHTML = memoryValue+memoryOperator+lastValue;
    document.querySelector('#inputId').innerHTML = lastValue;
  
}
else if (value == "." && lastValue!=""&& memoryOperator != "" && memoryValue!=""
  ) {
    lastValue += value;
    document.querySelector('#totalId').innerHTML = memoryValue+memoryOperator+lastValue;
    document.querySelector('#inputId').innerHTML = lastValue;
  
}
  
else if (value == "." && (lastValue == "0" || lastValue >= 0) && lastValue.indexOf(".") === -1 && memoryOperator != "=") {
    console.log("point:01");
    lastValue += value;
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("sonuc").innerHTML = lastValue;
    // document.getElementById("icerik").value = lastValue;
  }
}
//after this line clearOperations codes ****************************************
var fullClear=(value)=>{
  document.querySelector('#inputId').innerHTML="";
  document.querySelector('#totalId').innerHTML=""
  // document.getElementById("icerik").value = "";
  // sonDeger = "";
  // document.getElementById("sonuc").innerHTML = "";
  lastValue="",
  memoryOperator = "";
  memoryValue = "";
  memory=[];
}
var windowClose=(value)=>{
  document.querySelector('#inputId').innerHTML="";
  document.querySelector('#totalId').innerHTML=""
  // document.getElementById("icerik").value = "";
  // sonDeger = "";
  // document.getElementById("sonuc").innerHTML = "";
  lastValue="",
  memoryOperator = "";
  memoryValue = "";
  memory=[];
  window.close()
}
var lastInputClear=(value)=> {
     console.log("value :"+value)
    console.log("lastValue :"+lastValue)
    console.log("memoryValue :"+memoryValue)
    console.log("memoryOperator :"+memoryOperator) 
  if(value="<--" && memoryValue==""&& memoryOperator=="" && lastValue!=""){
    var str = lastValue.length - 1;
    lastValue = lastValue.substr(0, str);
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=lastValue;
    // document.getElementById("icerik").value = lastValue;
    // document.getElementById("sonuc").innerHTML =lastValue
  }
  else if(value="<--" && memoryValue!=""&& memoryOperator !=""&& lastValue!=""){
    var str = lastValue.length - 1;
    lastValue = lastValue.substr(0, str);
    document.querySelector('#inputId').innerHTML= lastValue;
    document.querySelector('#totalId').innerHTML=memoryValue+memoryOperator+lastValue
  }
  else if(value="<--" && memoryValue!=""&& memoryOperator ==""&& lastValue!=""){
    var str = lastValue.length - 1;
    lastValue = lastValue.substr(0, str);
    memoryValue=lastValue;
    document.querySelector('#inputId').innerHTML = lastValue;
    document.querySelector('#totalId').innerHTML =memoryValue
  }
  else if(value="<--" && memoryValue!=""&& memoryOperator !=""&& lastValue==""){
    memoryOperator="";
    document.querySelector('#inputId').innerHTML = "";
    document.querySelector('#totalId').innerHTML =memoryValue
  }
   
  
}
//after this line memoryOperations codes****************************************
function positiveMemoryAdd(value){ 
  console.log("*****************") 
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator :"+memoryOperator)
if(value=="M+"&& memoryOperator!="" && memoryValue!=""&&lastValue!=""){
  console.log("1111111111111111111111111")
  if(memoryOperator=="+"){
    console.log("1-2222222222222222222222")
      memoryValue=Number(memoryValue)+Number(lastValue)
      memory.push(memoryValue);
      for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }   
    }
  else if(memoryOperator=="-"){
    console.log("1-3333333333333333333333")
    memoryValue=Number(memoryValue)-Number(lastValue)
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }
    }       
  else if(memoryOperator=="x"){
    console.log("1-44444444444444444444444444444444")
    memoryValue=Number(memoryValue)*Number(lastValue)
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }
    }         
  else if(memoryOperator=="/"){
    console.log("1-555555555555555555555555555555555555")
    memoryValue=Number(memoryValue)/Number(lastValue)
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }             
    }  
    else if(memoryOperator=="%"){
      console.log("1-655555555555555555555555555555555555")
      memoryValue=(Number(memoryValue)/100)*Number(lastValue)
      memory.push(memoryValue);
      for (let index = 0; index < memory.length; index++) {
          console.log(memory[index]); }             
      }  

  document.querySelector('#totalId').innerHTML =memoryValue;
  document.querySelector('#inputId').innerHTML = "";
  lastValue=""; 
  memoryOperator="";
  console.log("******EXIT********") 
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator :"+memoryOperator)
    } 
else if(value=="M+"&& memoryOperator=="" && memoryValue!=""&&lastValue==""){
  console.log("77777777777777777777777777777777777777")
  memory.push(memoryValue);
  for (let index = 0; index < memory.length; index++) {
    console.log(memory[index]); } 
  document.querySelector('#totalId').innerHTML = memoryValue;
  document.querySelector('#inputId').innerHTML = "" 
  lastValue=""; 
  memoryOperator=""     
 }
else if(value=="M+"&& memoryOperator=="" && memoryValue!=""&&lastValue!=""){
console.log("66666666666666666666666666666666666666666")
  memory.push(lastValue);
  memoryValue=lastValue;
  for (let index = 0; index < memory.length; index++) {
      console.log(memory[index]); }  
  document.querySelector('#totalId').innerHTML = memoryValue;
  document.querySelector('#inputId').innerHTML = ""     
  memoryOperator="" 
  lastValue="";
    }    
else if (value=="M+" && memoryOperator=="" && memoryValue=="" && lastValue!="" ){  
console.log("???????????????????????") 
console.log("lastValue :"+lastValue)
console.log("memoryValue :"+memoryValue)
console.log("memoryOperator :"+memoryOperator)
memory.push(lastValue);
memoryValue=lastValue;
for (let index = 0; index < memory.length; index++) {
     console.log(memory[index]); } 
document.querySelector('#totalId').innerHTML = memoryValue;
document.querySelector('#inputId').innerHTML = "";
lastValue="";
memoryOperator="";
console.log("lastValue :"+lastValue)
console.log("memoryValue :"+memoryValue)
 }

}
function negativeMemoryAdd(value){
console.log("*****************") 
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator :"+memoryOperator)
if(value=="M-"&& memoryOperator!="" && memoryValue!=""&&lastValue!=""){
  console.log("1111111111111111111111111")
  if(memoryOperator=="+"){
    console.log("1-2222222222222222222222")
      memoryValue=Number(memoryValue)+Number(lastValue)
      //memory=[];
      memory.push(memoryValue);
      for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }   
    }
  else if(memoryOperator=="-"){
    console.log("1-3333333333333333333333")
    memoryValue=Number(memoryValue)-Number(lastValue)
    //memory=[];
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }
    }       
  else if(memoryOperator=="x"){
    console.log("1-44444444444444444444444444444444")
    memoryValue=Number(memoryValue)*Number(lastValue)
   
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }
    }         
  else if(memoryOperator=="/"){
    console.log("1-555555555555555555555555555555555555")
    memoryValue=Number(memoryValue)/Number(lastValue)
    
    memory.push(memoryValue);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); }             
    } 
   else if(memoryOperator=="%"){
      console.log("1-655555555555555555555555555555555555")
      memoryValue=(Number(memoryValue)/100)*Number(lastValue)
      
      memory.push(memoryValue);
      for (let index = 0; index < memory.length; index++) {
          console.log(memory[index]); }             
      }

  document.querySelector('#totalId').innerHTML =memoryValue;
  document.querySelector('#inputId').innerHTML = "";
  lastValue=""; 
  memoryOperator="";
      
    } 
    else if(value=="M-"&& memoryOperator=="" && memoryValue!=""&&lastValue==""){
      console.log("77777777777777777777777777777777777777")
      memory.push(-1*memoryValue);
      
      for (let index = 0; index < memory.length; index++) {
        console.log(memory[index]); } 
        document.querySelector('#totalId').innerHTML = memoryValue;
        document.querySelector('#inputId').innerHTML = "" 
      lastValue=""; 
        
      memoryOperator=""     
     }
   else if(value=="M-"&& memoryOperator=="" && memoryValue!=""&&lastValue!=""){
    console.log("66666666666666666666666666666666666666666")
      memory.push(-1*lastValue);
      memoryValue=lastValue;
      for (let index = 0; index < memory.length; index++) {
          console.log(memory[index]); }  
          document.querySelector('#totalId').innerHTML = memoryValue;
          document.querySelector('#inputId').innerHTML = ""     
      memoryOperator="" 
      lastValue="";
        }    
  else if (value=="M-" && memoryOperator=="" && memoryValue=="" && lastValue!="" ){  
  console.log("???????????????????????") 
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
  console.log("memoryOperator :"+memoryOperator)
  memory.push(-1*lastValue);

  memoryValue=lastValue;
  for (let index = 0; index < memory.length; index++) {
         console.log(memory[index]); } 
  document.querySelector('#totalId').innerHTML = memoryValue;
  document.querySelector('#inputId').innerHTML = "";
  lastValue="";
  memoryOperator="";
  console.log("lastValue :"+lastValue)
  console.log("memoryValue :"+memoryValue)
     }
    
}
function  memorySum(value){
console.log("-----------------")  
var memoryAdd=0;
if (value=="MR" && memory.length>0 ){
for (let index = 0; index < memory.length; index++) {
  console.log(memory[index]);
  memoryAdd += Number(memory[index])
    }
memoryValue=memoryAdd; 
  
document.querySelector('#totalId').innerHTML = "MR="+ memoryValue 
memoryAdd==""
lastValue="";


console.log("MR sum :"+memoryAdd); 
console.log("memoryValue :"+memoryValue) 
console.log("memoryOperator :"+memoryOperator)
console.log("lastvalue  :"+lastValue)

}
}
function memoryClear(value){
if (value=="MC" && memory.length>0){
  memory=[]
  document.querySelector('#totalId').innerHTML =""; 
  document.querySelector('#inputId').innerHTML = "";
  memoryValue=="" 
  memoryOperator==""
}
console.log("*****MEMORY CLEAR***********")
}
export {changeValue,equal, addition, subtraction, multiplication, division,sqrtOperation, percent, exponentiation,numberWrite,zeroWrite,doubleZeroWrite,pointWrite,fullClear,lastInputClear,positiveMemoryAdd,negativeMemoryAdd,memorySum,memoryClear,windowClose}
