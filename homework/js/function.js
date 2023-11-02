const node_for_click = document.getElementById("for_click")

function find_edit(){
const p1 = document.getElementsByTagName('p')[1]
console.log(p1.innerHTML)
p1.innerHTML = "новое значение"

const p2 = document.getElementsByTagName('p')[2]
console.log(p2.innerHTML)
p2.innerHTML = "мяу"
}
node_for_click.addEventListener("click",find_edit)
