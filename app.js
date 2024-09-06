btnAcOnAction
btnDelOnAction
btnPiOnAction
btnFacOnAction
btn7OnAction
btn8OnAction
btn9OnAction
btnDivisionOnAction
btn4OnAction
btn5OnAction
btn6OnAction
btnMultiplicationOnAction
btnAdditionOnAction
btnSubtractionOnAction

let number1 = 0;
let number2 = 0;
let finalNumber;
let action = "";
function calculate(){
    switch(action){
        case "D" : finalNumber = number1/number2; break;
        case "M" : finalNumber = number1*number2; break;
        case "A" : finalNumber = number1+number2; break;
        case "S" : finalNumber = number1-number2; break;
    }
    
}
function setNumber1(){
    number1 = Number(document.getElementById("display").value);
    document.getElementById("display").value = "";
}
function setNumber2(){
    number2 = Number(document.getElementById("display").value);

    
    document.getElementById("display").value = "";
}
function setfinalNumber(){
    document.getElementById("display").value = finalNumber;
}
//==================================================resalt btn
function btnEnter(){
    setNumber2();
    calculate();
    setfinalNumber();
}
//==========================================================================btn calc
function btnDivision(){
    setNumber1();
    action = "D";
}
function btnMultiplication(){
    setNumber1();
    action = "M";
}
function btnAddition(){
    setNumber1();
    action = "A";
}
function btnSubtraction(){
    setNumber1();
    action = "S";
}
//=====================================================================btn Ac Del 
function btnAc(){
    document.getElementById("display").value = "";
}
function btnDel(){
    let text = document.getElementById("display").value;
    document.getElementById("display").value = text.substr(0,text.length-1);    
}
//========================================================================btn num
function setNum9(){
    document.getElementById("display").value += 9;
}
function setNum8(){
    document.getElementById("display").value += 8;
}
function setNum7(){
    document.getElementById("display").value += 7;
}
function setNum6(){
    document.getElementById("display").value += 6;
}
function setNum5(){
    document.getElementById("display").value += 5;
}
function setNum4(){
    document.getElementById("display").value += 4;
}
function setNum3(){
    document.getElementById("display").value += 3;
}
function setNum2(){
    document.getElementById("display").value += 2;
}
function setNum1(){
    document.getElementById("display").value += 1;
}
function setNum0(){
    document.getElementById("display").value += 0;
}
function setNum00(){
    document.getElementById("display").value += "00";
}
function setDot(){
    document.getElementById("display").value += ".";
}
function setNumpi(){
    document.getElementById("display").value += "\u03C0";
}
