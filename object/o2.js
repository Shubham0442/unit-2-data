
var products = ["macbook", "iphone", "ipad"];
var prices = [500000, 40000, 50000];

var data = [];


     for(var i=0; i<products.length; i++)
     {
        var obj = {};
          obj["name"]= products[i];
          obj["prices"]= prices[i];
          data.push(obj);

     }
   
   


console.log(data);
