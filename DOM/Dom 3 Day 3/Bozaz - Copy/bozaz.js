
document.querySelector("form").addEventListener("submit",bozaz)

function bozaz ()
{
    event.preventDefault()

    var  p  = document.querySelector("#category").value
    var name1 = document.querySelector("#name").value
    var price = document.querySelector("#price").value


    var tr = document.createElement("tr");

    var td1 = document.createElement("td")
    td1.innerText = p;

    var td2 = document.createElement("td")
    td2.innerText = name1;

    var td3 = document.createElement("td")
    td3.innerText = price;

    tr.append(td1, td2, td3)

    document.querySelector("tbody").append(tr)

}