var todoitems = JSON.parse(localStorage.getItem("todoData"))

//var completed = JSON.parse(localStorage.getItem("completed")) || []

if(localStorage.getItem("completedTodo")==null)
{
    completed = [];
}
else{
 completed = JSON.parse(localStorage.getItem("completedTodo"))
}

// console.log(todoitems)

todoitems.map(function (elem){
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.item;

    var td2 = document.createElement("td")
    td2.innerText = elem.itemPrio;

    var td3 = document.createElement("td")
    td3.innerText = elem.itemQuantity;

    var td4 = document.createElement("td")
    td4.textContent = "completed";
    td4.style.color = "red"
    td4.style.cursor = "pointer";
    td4.addEventListener("click",function ()
    {
        markCompleteFunction(elem)
    });


    tr.append(td1,td2,td3,td4)

    document.querySelector("tbody").append(tr)


});

function markCompleteFunction(elem)
{
    completed.push(elem);
   localStorage.setItem("completedTodo1", JSON.stringify(completed))

}