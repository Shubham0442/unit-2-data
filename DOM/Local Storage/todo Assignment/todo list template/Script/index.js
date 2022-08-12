
document.querySelector("#form").addEventListener("submit",mytodo)

// var todo =JSON.parse(localStorage.getItem("tododata")) ;

if(localStorage.getItem("tododata")==null)
{
    todo = []
}
else{
    todo = JSON.parse(localStorage.getItem("tododata"))
}



function mytodo()
{
    event.preventDefault()

    var item  = document.querySelector("#name").value
    var quantity = document.querySelector("#qty").value
    var prio = document.querySelector("#priority").value

    var obj = {
        item: item,
        itemQuantity:quantity,
        itemPrio: prio
    };
    // console.log(obj)
    todo.push(obj);
    // console.log(todo)
    localStorage.setItem("todoData", JSON.stringify(todo));
}