import {changeValue, equal, addition, subtraction, multiplication, division,  sqrtOperation, percent, exponentiation,numberWrite,zeroWrite,doubleZeroWrite,pointWrite,fullClear,lastInputClear, positiveMemoryAdd,negativeMemoryAdd,memorySum,memoryClear, windowClose} from './calculation.js'

document.querySelectorAll('.btn').forEach((v) => {
    v.addEventListener('click', (e) => {
      console.log(e.target.innerHTML)
      const numberList=[1,2,3,4,5,6,7,8,9,11]
      if (e.target.innerHTML in numberList){
      numberWrite(e.target.innerHTML)
         }
      if (e.target.innerHTML=="0"){
         zeroWrite(e.target.innerHTML)
         }
      if (e.target.innerHTML=="+/-"){
        console.log(e.target.innerHTML)
        changeValue()
         }
      if (e.target.innerHTML=="00"){
        console.log(e.target.innerHTML)
        doubleZeroWrite(e.target.innerHTML)
        }
      if (e.target.innerHTML=="."){
        console.log(e.target.innerHTML)
        pointWrite(e.target.innerHTML)
        }    
      if (e.target.innerHTML=="="){
          console.log(e.target.innerHTML)
          equal(e.target.innerHTML)
        }   
      if (e.target.innerHTML=="+"){
          console.log(e.target.innerHTML)
          addition(e.target.innerHTML)
        }    
      if (e.target.innerHTML=="-"){
           console.log(e.target.innerHTML)
           subtraction(e.target.innerHTML)
        } 
      if (e.target.innerHTML=="x"){
           console.log(e.target.innerHTML)
           multiplication(e.target.innerHTML)
        }   
      if (e.target.innerHTML=="/"){
            console.log(e.target.innerHTML)
            division(e.target.innerHTML)
        } 
      if (e.target.innerHTML=="OFF"){
            console.log(e.target.innerHTML)
            windowClose(e.target.innerHTML)
          } 
      if (e.target.innerHTML=="ON/C"){
            console.log(e.target.innerHTML)
            fullClear(e.target.innerHTML)
            } 
      if (e.target.innerHTML=="&lt;--"){
            console.log(e.target.innerHTML)
            lastInputClear(e.target.innerHTML)
            } 
      if (e.target.innerHTML=="√¯"){
            console.log(e.target.innerHTML)
            sqrtOperation(e.target.innerHTML)
            }       
      if (e.target.innerHTML=="%"){
            console.log(e.target.innerHTML)
            percent(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="x2"){
            console.log(e.target.innerHTML)
            exponentiation(e.target.innerHTML)
              }      
      if (e.target.innerHTML=="M+"){
          console.log(e.target.innerHTML)
          positiveMemoryAdd(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="M-"){
          console.log(e.target.innerHTML)
          negativeMemoryAdd(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="MR"){
          console.log(e.target.innerHTML)
          memorySum(e.target.innerHTML)
              } 
      if (e.target.innerHTML=="MC"){
          console.log(e.target.innerHTML)
          memoryClear(e.target.innerHTML)
              } 
             
          e.preventDefault();                                         
    });
  });
  