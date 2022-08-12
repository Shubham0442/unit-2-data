var completedItems = JSON.parse(localStorage.getItem("completedTodo1"))

completedItems.map(function (elem)
{
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.item;

    var td2 = document.createElement("td");
    td2.innerText=elem.itemQuantity;


    var td3 = document.createElement("td");
    td3.innerText = elem.itemPrio;
  
    tr.append(td1,td2,td3)

    document.querySelector("tbody").append(tr);

})