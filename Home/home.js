const link = document.querySelectorAll("img");



link[1].onmouseover=()=>{
    link[1].style.transform="scale(1.9)";
    setTimeout(() => {
         link[1].style.transform="scale(1.0)"
         link[1].style.transition="1s";
    }, 1000);
   
}

link[2].onmouseover=()=>{
    link[2].style.transform="rotate(360deg)";
    setTimeout(() => {
         link[2].style.transform="rotate(00deg)"
          link[2].style.transition="1s"
    }, 1000);
}
