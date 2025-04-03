const container = document.getElementById("container")
const btns = Array.from(document.querySelectorAll(".color-selector"))
//initial backgroundcolor //
let bgColor = "red"


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

btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        bgColor = btn.value
    })
})

function createNew(){
    let userInput = prompt("Please input a number between 2 and 100")
    if(userInput < 2 || userInput > 100){
        alert("Please enter a valid number")
        createNew()
    }
    else{
        container.innerHTML = ""
        createGrid(userInput)
    }
    
}