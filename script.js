var def1=document.querySelector(".sw1");
var def2=document.querySelector(".sw2");
let and=document.getElementById("and");
var s1;
var s2;
b1="";
b2="";
b3="";
b4="";
document.getElementById("b1").innerHTML=b1;
document.getElementById("b2").innerHTML=b2;
document.getElementById("b3").innerHTML=b3;
document.getElementById("b4").innerHTML=b4;




and.addEventListener("click",()=>{
    clearInterval(or);
    clearInterval(nand);
    clearInterval(nor);
    clearInterval(xor);
    clearInterval(xnor);
    and=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if(s1&&s2){
        document.documentElement.style.cssText="--l-c: yellow;"
    }
    else{
        document.documentElement.style.cssText="--l-c: white";
    }
    },1)
    document.getElementById("b1").innerHTML="OFF";
    document.getElementById("b2").innerHTML='OFF';
    document.getElementById("b3").innerHTML="OFF";
    document.getElementById("b4").innerHTML="ON";
    document.getElementById("gate").innerHTML="The truth table of AND gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the AND logic gate visually here";

})
or.addEventListener("click",()=>{
    clearInterval(and);
    clearInterval(nand);
    clearInterval(nor);
    clearInterval(xor);
    clearInterval(xnor);
    or=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if(s1||s2){
        document.documentElement.style.cssText="--l-c: yellow;"
    }
    else{
        document.documentElement.style.cssText="--l-c: white";
    }
    },1)
    document.getElementById("b1").innerHTML="OFF";
    document.getElementById("b2").innerHTML='ON';
    document.getElementById("b3").innerHTML="ON";
    document.getElementById("b4").innerHTML="ON";
    document.getElementById("gate").innerHTML="The truth table of OR gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the OR logic gate visually here";


})
nor.addEventListener("click",()=>{
    clearInterval(and);
    clearInterval(or);
    clearInterval(nand);
    clearInterval(xor);
    clearInterval(xnor);
    nor=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if(!s1&&!s2){
        document.documentElement.style.cssText="--l-c: yellow;"
    }
    else{
        document.documentElement.style.cssText="--l-c: white";
    }
    },1)
    document.getElementById("b1").innerHTML="ON";
    document.getElementById("b2").innerHTML='OFF';
    document.getElementById("b3").innerHTML="OFF";
    document.getElementById("b4").innerHTML="OFF";
    document.getElementById("gate").innerHTML="The truth table of NOR gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the NOR logic gate visually here";

})
nand.addEventListener("click",()=>{
    clearInterval(and);
    clearInterval(or);
    clearInterval(nor);
    clearInterval(xor);
    clearInterval(xnor);
    nand=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if(s1&&s2){
        document.documentElement.style.cssText="--l-c: white;"
    }
    else{
        document.documentElement.style.cssText="--l-c: yellow";
    }
    },1)
    document.getElementById("b1").innerHTML="ON";
    document.getElementById("b2").innerHTML='ON';
    document.getElementById("b3").innerHTML="ON";
    document.getElementById("b4").innerHTML="OFF";
    document.getElementById("gate").innerHTML="The truth table of NAND gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the NAND logic gate visually here";

})
xor.addEventListener("click",()=>{
    clearInterval(and);
    clearInterval(or);
    clearInterval(nand);
    clearInterval(nor);
    clearInterval(xnor);
    xor=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if((s1&&!s2)||!s1&&s2){
        document.documentElement.style.cssText="--l-c: yellow;"
    }
    else{
        document.documentElement.style.cssText="--l-c: white";
    }
    },1)
    document.getElementById("b1").innerHTML="OFF";
    document.getElementById("b2").innerHTML='ON';
    document.getElementById("b3").innerHTML="ON";
    document.getElementById("b4").innerHTML="OFF";
    document.getElementById("gate").innerHTML="The truth table of XOR gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the XOR logic gate visually here";

})
xnor.addEventListener("click",()=>{
    clearInterval(and);
    clearInterval(or);
    clearInterval(nand);
    clearInterval(nor);
    clearInterval(xor);
    xnor=setInterval(()=>{
        if(def1.checked){
            s1=true;
            console.log(s1);
        } 
        else{
            s1=false;
            console.log(s1);
        }
        if(def2.checked){
            s2=true;
            console.log(s2);
        }
        else{
            s2=false;
            console.log(s2);
        }
    if((s1&&s2)||(!s1&&!s2)){
        document.documentElement.style.cssText="--l-c: yellow;"
    }
    else{
        document.documentElement.style.cssText="--l-c: white";
    }
    },1)
    document.getElementById("b1").innerHTML="ON";
    document.getElementById("b2").innerHTML='OFF';
    document.getElementById("b3").innerHTML="OFF";
    document.getElementById("b4").innerHTML="ON";
    document.getElementById("gate").innerHTML="The truth table of XNOR gate is as follows.";
    document.getElementById("realize").innerHTML="Realize the XNOR logic gate visually here";


})

