
document.querySelector("#sidebar-ct").querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", (e) => {
        const page = document.querySelectorAll(".content-page>div")
        console.log(index);
        for (let i = 0; i <= 3; i++) {
            page[i].classList.remove("hide")
        }
        document.querySelectorAll(".content-page>div")[index].classList.add("hide")
    })
})