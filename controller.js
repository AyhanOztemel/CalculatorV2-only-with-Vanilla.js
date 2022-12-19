
import Calculate from './operations/calculation.js';
import DisplayWrite from './operations/displayWrite.js';
import DisplayClear from './operations/displayClear.js';
import MemoryOperations from './operations/memoryOperations.js';
var dis=new DisplayWrite()
var cal=new Calculate()
var dispClear=new DisplayClear()
var memOperations=new MemoryOperations()
document.querySelectorAll('.btn').forEach((v) => {
    v.addEventListener('click', (e) => {
      console.log(e.target.innerHTML)
      const numberList=[1,2,3,4,5,6,7,8,9,11]
      if (e.target.innerHTML in numberList){
      dis.numberWrite(e.target.innerHTML)
         }
      if (e.target.innerHTML=="0"){
        dis.zeroWrite(e.target.innerHTML)
         }
      if (e.target.innerHTML=="+/-"){
        console.log(e.target.innerHTML)
        cal.changeValue()
         }
      if (e.target.innerHTML=="00"){
        console.log(e.target.innerHTML)
        dis.doubleZeroWrite(e.target.innerHTML)
        }
      if (e.target.innerHTML=="."){
        console.log(e.target.innerHTML)
        dis.pointWrite(e.target.innerHTML)
        }    
      if (e.target.innerHTML=="="){
          console.log(e.target.innerHTML)
          cal.equal(e.target.innerHTML)
        }   
      if (e.target.innerHTML=="+"){
          console.log(e.target.innerHTML)
          cal.addition(e.target.innerHTML)
        }    
      if (e.target.innerHTML=="-"){
           console.log(e.target.innerHTML)
           cal.subtraction(e.target.innerHTML)
        } 
      if (e.target.innerHTML=="x"){
           console.log(e.target.innerHTML)
           cal.multiplication(e.target.innerHTML)
        }   
      if (e.target.innerHTML=="/"){
            console.log(e.target.innerHTML)
            cal.division(e.target.innerHTML)
        } 
      if (e.target.innerHTML=="OFF"){
            console.log(e.target.innerHTML)
            dispClear.windowClose(e.target.innerHTML)
          } 
      if (e.target.innerHTML=="ON/C"){
            console.log(e.target.innerHTML)
            dispClear.fullClear(e.target.innerHTML)
            } 
      if (e.target.innerHTML=="&lt;--"){
            console.log(e.target.innerHTML)
            dispClear.lastInputClear(e.target.innerHTML)
            } 
      if (e.target.innerHTML=="√¯"){
            console.log(e.target.innerHTML)
            cal.sqrtOperation(e.target.innerHTML)
            }       
      if (e.target.innerHTML=="%"){
            console.log(e.target.innerHTML)
            cal.percent(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="x2"){
            console.log(e.target.innerHTML)
            cal.exponentiation(e.target.innerHTML)
              }      
      if (e.target.innerHTML=="M+"){
          console.log(e.target.innerHTML)
         memOperations.positiveMemoryAdd(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="M-"){
          console.log(e.target.innerHTML)
          memOperations.negativeMemoryAdd(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="MR"){
          console.log(e.target.innerHTML)
          memOperations.memorySum(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="MC"){
          console.log(e.target.innerHTML)
          memOperations.memoryClear(e.target.innerHTML)
              }         
      e.preventDefault();                                         
    });
  });
  