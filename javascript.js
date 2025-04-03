const container = document.getElementById("container")
const btns = Array.from(document.querySelectorAll(".color-selector"))
let bgColor = "red"
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        bgColor = btn.value
    })
})
console.log(btns)

createGrid(16)

function createGrid(num){
for(let i = 1; i <=num; i++){
    let column = document.createElement("div")
    column.classList.add("column")
    container.appendChild(column)
    for(let j = 1; j <= num; j++){
        let row = document.createElement("div")
        row.classList.add("row")
        column.appendChild(row)
        row.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = bgColor
        })
    }
}
}
