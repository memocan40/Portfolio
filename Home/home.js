const link = document.querySelectorAll("img");
const css=  document.getElementById("css");
const skills=document.getElementById("skills");



link[1].onmouseover=()=>{
    link[1].style.transform="scale(1.5)";
    const section =document.getElementById("section");
    section.innerHTML="Hi there!";
    section.style.transform="scale(1.1)";
    section.style.transition="1s";
    
    setTimeout(() => {
         link[1].style.transform="scale(1.0)";
         link[1].style.transition="1s";
         
    }, 1000);
   
}

link[1].onmouseout=()=>{
  section.innerHTML="";
}

link[2].onmouseover=()=>{
    link[2].style.transform="rotate(360deg)";
    setTimeout(() => {
         link[2].style.transform="rotate(00deg)"
          link[2].style.transition="1s"
    }, 1000);
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};



css.onmouseover=()=>{
    
    skills.style.color="blue";
    skills.style.transform="scale(1.1)";
    skills.style.transition="1s";
    
}

css.addEventListener("mouseout",()=>{
    skills.style.color="white";
    skills.style.transform="scale(1.0)";
    skills.style.transition="1s";
})