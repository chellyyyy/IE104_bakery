var indexInit = 0
document.querySelector("#sidebar-ct").querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", (e) => {
        console.log(indexInit);
        document.querySelector("#sidebar-ct").querySelectorAll("li")[indexInit].classList.remove("active")
        item.classList.add("active");
        console.log(index);
        indexInit = index
        Page(index)

    })
})
const Page = (index) => {
    const page = document.querySelectorAll(".content-page>div")
    for (let i = 0; i <= 3; i++) {
        page[i].classList.remove("hide")
    }
    document.querySelectorAll(".content-page>div")[index].classList.add("hide")

}
document.querySelector(".btn-primary").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".popup").classList.add("show-popup")
})
document.querySelector(".popup").addEventListener("click", (e) => {
    e.stopPropagation()
    document.querySelector(".popup").classList.remove("show-popup")
})
Page(0)