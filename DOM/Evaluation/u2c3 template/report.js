// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myfunction)




function myfunction()
{
    event.preventDefault()
    var percent = document.createElement("div")
    percent.setAttribute("id","percent")

    var status1 = document.createElement("div")
    status1.setAttribute("id", "status")
    document.querySelector("form").append(percent, status1)

    var image = document.querySelector("#image").value
    var name =  document.querySelector("#name").value
    var batch = document.querySelector("#batch").value
    var dsa = +document.querySelector("#dsa").value
    var skill = +document.querySelector("#cs").value
    var coding = +document.querySelector("#coding").value
    var per = document.querySelector("#percent").value
    var status = document.querySelector("#status").value

    var tr = document.createElement("tr")
    
    var td1 = document.createElement("td")
    
    var picture = document.createElement("img");
    picture.src = image
    td1.append(picture)
    

    var td2 = document.createElement("td")
    td2.textContent = name;

    
    var td3 = document.createElement("td")
    td3.textContent = batch;

    var td4 = document.createElement("td")
    td4.textContent = dsa;

    var td5 = document.createElement("td")
    td5.textContent = skill;

    var td6 = document.createElement("td")
    td6.textContent = coding;

    var td7 = document.createElement("td")
    
    per = Math.floor((( dsa  + coding + skill)/30)*100)
    
    td7.textContent = per

    var td8 = document.createElement("td")

    if(per >=50)
    {
        
        td8.textContent = "Regular";
        td8.style.backgroundColor = "green";
    }
    else
    {
        
        td8.textContent = "Async";
        td8.style.backgroundColor = "red";
    }
    
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(tr)





    
    

}