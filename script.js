const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const dict= [
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
]
let result=[];
const convertToRoman = (num)=>{
    dict.forEach((dictArr)=>{
        while(num >= dictArr[1]){
            result.push(dictArr[0]);
            num -= dictArr[1];
           
        }
    })
    console.log(result.join(""))
   return result.join("")
}

const inputValidation = () => {
    result=[];
    output.innerText='';
    const num= numberInput.value;
  if(num===""){
    output.innerText="Please enter a valid number";
}  else if(num < 1){
    output.innerText="Please enter a number greater than or equal to 1 ";
} else if (num>3999){
      output.innerText="Please enter a number less than or equal to 3999";
      
    } else {
      output.innerText=convertToRoman(num);
  }
  
  

}

convertBtn.addEventListener("click",inputValidation)