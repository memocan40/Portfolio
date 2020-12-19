const click = document.querySelector("button");
const div = document.querySelector("body");
const a =document.querySelectorAll("div");


function animat(){
    div.style.marginLeft="3000px";
     div.style.transition="2s";
     setTimeout(() => {
        window.location.href="./Home/home.html"
     }, 1000);
    }


click.addEventListener("click",animat)
a.addEventListener("mousemove", (event)=>{
    event.target.style.color="red";
    event.target.style.transition="2s";
})