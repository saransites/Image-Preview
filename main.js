const img=document.querySelectorAll("img")
img.forEach(image=>{
    image.addEventListener("click",function(e){
        const div=document.createElement("div")
        const createimg=document.createElement("img")
        let button=document.createElement("button")
        button.textContent="X"
        button.classList.add("delbtn")
        div.classList.add("overlay")
        createimg.src=this.src
        createimg.classList.add("imageEl")
        document.body.appendChild(div)
        div.appendChild(createimg)
        div.appendChild(button)
        button.addEventListener("click",closePopup)
    })
})

function closePopup(e){
    console.log(e.target.parentElement.remove())
}