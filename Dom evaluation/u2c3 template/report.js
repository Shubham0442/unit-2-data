// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myFunction)

var th1 = document.createElement("input")
    th1.setAttribute("id","percent")
    th1.setAttribute("type","number")

    var th2 = document.createElement("input")
    th2.setAttribute("id","status")
    th2.setAttribute("type","text")

    document.querySelector("#image").setAttribute("src","")

    document.querySelector("form").append(th1,th2)
function myFunction ()
{
    event.preventDefault()
     
    


     var studentImg = document.querySelector("#image").value
     var name1 = document.querySelector("#name").value
     var batch = document.querySelector("#batch").value
     var dsa = document.querySelector("#dsa").value
     var skill = document.querySelector("#cs").value
     var code = document.querySelector("#coding").value
     var percent = document.querySelector("#percent").value
     var status = document.querySelector("#status").value

     var tr = document.createElement("tr")


     var td1 = document.createElement("td")
     td1.src = studentImg
     
     


     var td2 = document.createElement("td")
     td2.innerText = name1


     var td3 = document.createElement("td")
     td3.innerText = batch
     

     var td4 = document.createElement("td")
     td4.innerText = dsa
     td4.setAttribute("id","dsa")

     var td5 = document.createElement("td")
     td5.innerText = skill
     td4.setAttribute("id","skilla")
     
     var td6 = document.createElement("td")
     td6.innerText = code
     td4.setAttribute("id","codee")

     var td7 = document.createElement("td")
     
     var per = dsa*0.1 + skill*0.1 + code*0.1;
     var total = per/30
    td7.innerText = total*100*10
     
     var td8 = document.createElement("td")
     

  tr.append(td1,td2,td3,td4,td5,td6,td7,td8)

  document.querySelector("tbody").append(tr)

    


}

