

var string = "what are you doing";


    console.log(string);
function change (first, second, str)
{
    var b = "";
    var arr =[];
    
    
    for(var i=0; i<str.length; i++)
    { 
        if(str[i]!=" ")
        {
            b = b+str[i];
        }
        else
        {
            arr.push(b);
            b = "";
        }
    }
    arr.push(b);

     for (var j=0; j<arr.length; j++)
     {
         if(arr[j]==first)
         {
             arr[j]=second;
         }

     }
     console.log(arr);

     //var x = arr.toString();

    //  console.log(x);

     var b1 = "";

    //  for(var k = 0; k<x.length; k++)
    // {
    //   if(x[k]==",")
    //   {
    //     b1 = b1 + " ";
    //   }
    //   else
    //   {
    //     b1 = b1 + x[k];
    //   }
    // }
  
    for(var s=0; s<arr.length-1;s++)
    {
         b1 = b1 + arr[s] +" ";
    }
    b1 = b1 + arr[arr.length-1];
  console.log(b1);
}
   
change ("what", "how", string);

    
        
