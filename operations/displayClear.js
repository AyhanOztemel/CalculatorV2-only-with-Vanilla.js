
import Values from './Values.js';

export default class DisplayClear{
  fullClear=(value)=>{
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=""
    // document.getElementById("icerik").value = "";
    // sonDeger = "";
    // document.getElementById("sonuc").innerHTML = "";
    Values.lastValue="",
    Values.memoryOperator = "";
   Values.memoryValue = "";
    Values.memory=[];
  }
  windowClose=(value)=>{
    document.querySelector('#inputId').innerHTML="";
    document.querySelector('#totalId').innerHTML=""
    // document.getElementById("icerik").value = "";
    // sonDeger = "";
    // document.getElementById("sonuc").innerHTML = "";
    Values.lastValue="",
    Values.memoryOperator = "";
    Values.memoryValue = "";
    Values.memory=[];
    window.close()
  }
  lastInputClear=(value)=> {
       console.log("value :"+value)
      console.log("Values.lastValue :"+Values.lastValue)
      console.log("memoryValue :"+Values.memoryValue)
      console.log("Values.memoryOperator :"+Values.memoryOperator) 
    if(value="<--" &&Values.memoryValue==""&& Values.memoryOperator=="" && Values.lastValue!=""){
      var str = Values.lastValue.length - 1;
      Values.lastValue = Values.lastValue.substr(0, str);
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.lastValue;
      // document.getElementById("icerik").value = Values.lastValue;
      // document.getElementById("sonuc").innerHTML =Values.lastValue
    }
    else if(value="<--" &&Values.memoryValue!=""&& Values.memoryOperator !=""&& Values.lastValue!=""){
      var str = Values.lastValue.length - 1;
      Values.lastValue = Values.lastValue.substr(0, str);
      document.querySelector('#inputId').innerHTML= Values.lastValue;
      document.querySelector('#totalId').innerHTML=Values.memoryValue+Values.memoryOperator+Values.lastValue
    }
    else if(value="<--" &&Values.memoryValue!=""&& Values.memoryOperator ==""&& Values.lastValue!=""){
      var str = Values.lastValue.length - 1;
      Values.lastValue = Values.lastValue.substr(0, str);
     Values.memoryValue=Values.lastValue;
      document.querySelector('#inputId').innerHTML = Values.lastValue;
      document.querySelector('#totalId').innerHTML =Values.memoryValue
    }
    else if(value="<--" &&Values.memoryValue!=""&& Values.memoryOperator !=""&& Values.lastValue==""){
      Values.memoryOperator="";
      document.querySelector('#inputId').innerHTML = "";
      document.querySelector('#totalId').innerHTML =Values.memoryValue
    }
     
    
  }
}
 // export {fullClear,lastInputClear,windowClose}