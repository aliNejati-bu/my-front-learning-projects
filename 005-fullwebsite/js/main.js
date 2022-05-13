document.querySelectorAll(".collapsible").forEach(node=>{
    node.addEventListener("click",function () {
        this.classList.toggle("expanded")
    });
})