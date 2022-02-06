let show = document.querySelectorAll(".btn");
let para = document.querySelectorAll("p");

show.forEach((e) => {
    
    e.addEventListener("click" , () => {
        e.style.fontWeight = "500" ;
        e.style.color = "black" ;
        para.forEach((z) =>{
            z.style.display = "block" ;
        })
    })
})