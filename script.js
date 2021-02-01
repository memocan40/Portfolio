const click = document.querySelector("button");
const div = document.querySelector("body");
const a =document.querySelectorAll("div");
const text=document.getElementById("text");
const section =document.querySelector("section");

function animat(){
    div.style.marginLeft="3000px";
     div.style.transition="2s";
     setTimeout(() => {
        window.location.href="./Home/home.html"
     }, 1000);
    }



function appear(){
    setTimeout(() => {
        section.animate({
        "opacity":"4"
    },4000)
    }, 5000);
    
    setTimeout(() => {
        section.style.opacity="4"
    }, 9000);
    
}

function slide(){

    setTimeout(() => {
        text.animate({"opacity":"4"},3000)
        
    }, 4000);
    
    setTimeout(() => {
        text.style.opacity="4";
        
    }, 7000);
}

function butto(){
    setTimeout(() => {
        click.animate({
            "opacity":"4"
        },2000)
        
    }, 5000);

    setTimeout(() => {
        click.style.opacity="4"
        
    }, 7000);
}








click.addEventListener("click",animat);
a.addEventListener("mousemove", (event)=>{
    event.target.style.color="red";
    event.target.style.transition="2s";
})
