//import { numberWrite,sonDeger} from "./calculation";
//import('./calculation.js')
let divContainer= document.createElement("div");
divContainer.className='container'
divContainer.style.height="490px"
divContainer.style.width="390px"
divContainer.style.border="2px solid blue"
divContainer.style.borderRadius="5px"
divContainer.style.backgroundColor="#EDE7F6"
divContainer.style.display="flex"
divContainer.style.flexWrap="wrap"
document.body.appendChild(divContainer);

let h1= document.createElement("h1");
h1.innerHTML='CALCULATOR'
h1.style.display="block"
h1.style.height="40px"
h1.style.color="blue"
h1.style.marginLeft="85px"
h1.style.width="227px"
h1.style.backgroundColor="#B39DDB"
h1.style.border="2px solid blue"
divContainer.appendChild(h1);

let total= document.createElement("div");
//total.innerHTML='Total'
total.className='total'
total.id="totalId"
total.style.color="#311B92"
total.style.display="block"
total.style.fontWeight="bold"
total.style.fontSize="16px"
total.style.paddingBottom="1px"
total.style.marginBottom="1px"
total.style.marginLeft="57px"
total.style.height="25px"
total.style.width="275px"
divContainer.appendChild(total)

let divInput= document.createElement("div");
//divInput.innerHTML='input display'
divInput.className='input'
divInput.id="inputId"
divInput.style.fontWeight="bold"
divInput.style.display="block"
divInput.style.marginLeft="57px"
divInput.style.marginTop="1px"
divInput.style.padding="auto"
divInput.style.height="35px"
divInput.style.fontSize="30px"
divInput.style.width="275px"
divInput.style.color="#311B92"
divInput.style.textAlign="center"
divInput.style.backgroundColor="#B39DDB"
divInput.style.border="2px solid blue"
divInput.style.borderRadius="5px"
divContainer.appendChild(divInput)

let spanText=["OFF",7,8,9,"<--","x2","MC","%",4,5,6,"-","/","MR","+/-",1,2,3,"+","x","M-","ON/C",0,"00",".","√¯","=","M+"]

    
    for (let j = 0; j < 28; j++) {
   
    let btn="btn";
    btn=btn+j
    btn= document.createElement("button");
    btn.className='btn'
    btn.innerHTML=spanText[j]
    btn.style.marginLeft="2px"
    btn.style.height="40px"
    btn.style.width="53px"
    btn.style.color="blue"
    btn.style.fontWeight="bold"
    btn.style.border="2px solid blue"
    btn.style.backgroundColor="#B39DDB"; 
    btn.style.borderRadius="2px"
    divContainer.appendChild(btn)
    }
    document.querySelectorAll('.btn').forEach((v) => {
      v.addEventListener('mouseover', (e) => {
        e.target.style.background = 'blue';
        e.target.style.color="yellow"
        e.preventDefault();
      });
      v.addEventListener('mouseout', (e) => {
        e.target.style.background = '#B39DDB';
        e.target.style.color="blue"
        e.preventDefault();
      });
    });
