// var amazon = [
//     {name : "Speaker", price : 5400, rating: 4},
//     {name : "cooker", price : 1400, rating: 3},
//     {name : "playstation", price : 20000, rating: 4},
//     {name : "sony", price : 10000, rating: 3},
//     {name : "Walkman", price : 10000, rating: 4},
//     {name : "sony", price : 20000, rating: 4}
  
//   ];
var e_commerce = 
{

    products : ["earphone", "headphone", "earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function()
                 {
                    var total =0;
                     for(var i=0; i<this.price.length; i++)
                     {
                        total  =  total + this.price[i]*this.quantity[i];
                        
                     }
                     return total; 
                 }
  };
  
  console.log(e_commerce.total_price());