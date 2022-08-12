
document.querySelector("form").addEventListener("submit", myBozaz)

function myBozaz()
{
    event.preventDefault()

    var category1 = document.querySelector("#category").value;
    var product1 =  document.querySelector("#name").value;
    var price1 = document.querySelector("#price").value;

       console.log(category1,product1,price1)
    var tr = document.createElement("tr")
    

    var td1 = document.createElement("td")
    td1.innerText = category1;

    var td2 = document.createElement("td")
    td2.innerText = product1;

    var td3 = document.createElement("td")
    td3.innerText = price1;

    tr.append(td1, td2, td3)
    document.querySelector("tbody").append(tr);
}