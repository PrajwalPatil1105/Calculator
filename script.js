
let input = document.getElementById("inp")

function on(){
    input.value+='1';
}

function tw(){
    input.value+='2';
}
function th(){
    input.value+='3';
}
function fo(){
    input.value+='4';
}
function fi(){
    input.value+='5';
}
function si(){
    input.value+='6';
}
function se(){
    input.value+='7';
}
function ei(){
    input.value+='8';
}
function ni(){
    input.value+='9';
}
function ze(){
    input.value+='0';
}
function pl(){
    input.value+='+';
}
function mi(){
    input.value+='-';
}
function mu(){
    input.value+='*';
}
function di(){
    input.value+='/';
}
function po(){
    input.value+='.';
}

function de(){   
    if(input.value=="Error"){
     input.value="";
    }
    else {
        input.value=input.value.slice(0,-1);
    }
}

function re(){
   input.value='';
}

function eq(){
    try{
    let result=eval(input.value);
    if(Number.isInteger(result)){
        input.value=result;
    }
    else{
        result=parseFloat(result).toFixed(3);
        input.value=result;
    }
        }
    catch(error){
        input.value="Error"
    }    
}
