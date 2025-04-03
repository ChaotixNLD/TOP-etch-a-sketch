const container = document.getElementById("container")
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
    }
}
}