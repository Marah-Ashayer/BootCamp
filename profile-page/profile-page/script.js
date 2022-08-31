var element1= document.querySelector("#h1");
function ChangName(){
    element1.innerText="Ahmed";
}
var element2=document.querySelector(".avatar-s");
var element3=document.querySelector(".todd");
var element4=document.querySelector(".badge");
var element5=document.querySelector(".avatar-s1");
var element6=document.querySelector(".phil");
var counter=2;
var counter1=500;
var element7=document.querySelector(".badge1");
function remove_user1(){
    element2.remove()
    element3.remove()
    counter--;
    counter1++;
    element7.innerText= counter1 + "+"
    
    element4.innerText=counter;

}
function remove_user2(){
    element5.remove()
    element6.remove()
    counter--;
    counter1++;
    element7.innerText= counter1 + "+"
    element4.innerText=counter;

}
function remove_user1_byfalse(){
    element2.remove()
    element3.remove()
    counter--;
    
    element4.innerText=counter;
    
}
function remove_user2_byfalse(){
    element5.remove()
    element6.remove()
    counter--;
    element4.innerText=counter;
}

