
import Values from './Values.js';
export default class DisplayWrite{
   
  numberWrite=(value)=> {
    console.log("numberWrite"+" "+value);
    if (value != "0" && value != "." &&Values.memoryOperator != "" && Values.memoryValue != "" &&
       Values.lastValue != "0" &&  value != "00") {
      console.log("numberWrite:01"+" "+value);
      if (Values.memoryOperator == "=") {
        Values.memoryValue = "";
       Values.memoryOperator = "";
      }
      Values.lastValue += value;
     
      document.querySelector('#totalId').innerHTML= Values.memoryValue +Values.memoryOperator + Values.lastValue;
      document.querySelector('#inputId').innerHTML=Values.lastValue;
      
      } 
      else if (value != "." && value != "0" && Values.lastValue != "0" && value != "00") {
      console.log("NumberWrite:02"+" "+value);
      Values.lastValue += value;
      console.log("Values.lastValue :"+Values.lastValue)
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
     
      }
    }
  zeroWrite=(value)=> {
    console.log(value+"  :" +"welcome")
    if (value == 0 && Values.memoryValue==""&& Values.lastValue =="" &&Values.memoryOperator=="") {
      console.log("zeroWrite:01");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
     
    }
    else if (value == 0 && Values.lastValue == "." && Values.memoryValue==""&&Values.memoryOperator=="") {
      console.log("zeroWrite:02");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
    }
    else if (value == 0 && Values.lastValue !="0"&& Values.memoryValue==""&&Values.memoryOperator=="") {
      console.log("zeroWrite:03");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
     
    }
    else if (value == 0 && Values.lastValue !="0"&& Values.memoryValue!=""&&Values.memoryOperator!="") {
      console.log("zeroWrite:04");
      Values.lastValue += value;
      document.querySelector('#totalId').innerHTML=Values.memoryValue +Values.memoryOperator + Values.lastValue;
      document.querySelector('#inputId').innerHTML=Values.lastValue;
      
    }
  
    else if (value == 0 && Values.lastValue !="0"&& Values.memoryValue!=""&&Values.memoryOperator=="") {
      console.log("zeroWrite:05");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
      
    }
  }
   doubleZeroWrite=value=>{
    if (value == "00" && Values.lastValue == "."&& Values.memoryValue==""&&Values.memoryOperator=="") {
      console.log("doubleZeroWrite:01");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
     
    }
    else if (value == "00" && Values.lastValue != ""&& Values.memoryValue!=""&Values.memoryOperator !=""&&Values.lastValue!="0") {
      console.log("doubleZeroWrite:02");
      Values.lastValue += value;
      document.querySelector('#totalId').innerHTML= Values.memoryValue +Values.memoryOperator + Values.lastValue;
      document.querySelector('#inputId').innerHTML=Values.lastValue;
     
    }
    else if (value == "00" && Values.lastValue != ""&& Values.memoryValue!=""&Values.memoryOperator !=""&&Values.lastValue!="0") {
      console.log("doubleZeroWrite:022");
      Values.lastValue += value;
      document.querySelector('#totalId').innerHTML=Values.memoryValue +Values.memoryOperator + Values.lastValue;
      document.querySelector('#inputId').innerHTML=Values.lastValue;
      
    }
    else if (value == "00" && Values.lastValue != ""&& Values.memoryValue==""&Values.memoryOperator ==""&& Values.lastValue!="0") {
      console.log("doubleZeroWrite:03");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
      
    }
    else if (value == "00" && Values.lastValue != ""&& Values.memoryValue!=""&Values.memoryOperator ==""&&Values.lastValue!="0") {
      console.log("doubleZeroWrite:04");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
      
    }
  }
  pointWrite=value=>{
    if (value == "." && Values.lastValue==""&&Values.memoryOperator != "" && Values.memoryValue!=""
    ) {
      Values.lastValue += value;
      document.querySelector('#totalId').innerHTML = Values.memoryValue+Values.memoryOperator+Values.lastValue;
      document.querySelector('#inputId').innerHTML = Values.lastValue;
    
  }
  else if (value == "." && Values.lastValue!=""&&Values.memoryOperator != "" && Values.memoryValue!=""
    ) {
      Values.lastValue += value;
      document.querySelector('#totalId').innerHTML = Values.memoryValue+Values.memoryOperator+Values.lastValue;
      document.querySelector('#inputId').innerHTML = Values.lastValue;
    
  }
    
  else if (value == "." && (Values.lastValue == "0" || Values.lastValue >= 0) && Values.lastValue.indexOf(".") === -1 &&Values.memoryOperator != "=") {
      console.log("point:01");
      Values.lastValue += value;
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
    
    }
  }
}
 