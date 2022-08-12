
// var items = [
//     ['A', 'B', 'C'],
//     ['D', 'E', 'F'],
//     ['G', 'H', 'I']
//   ];

// var row = items.length;
// var col = items[0].length;

// var left = [];
// var rigtht = [];
// for(var f=0; f<=row-1; f++)
// {
//     for(s=0; s<=col-1; s++)
//     {
//         if(f==s)
//         {
//             left.push(items[f][s]);
//         }
//     }
// }
// console.log(left);

// for(var f=0; f<=row-1; f++)
// {
//     for(s=0; s<=col-1; s++)
//     {
//         if(f+s==row-1)
//         {
//             rigtht.push(items[f][s]);
//         }
//     }
// }
// console.log(rigtht);

// // for(var f=0; f<=row-1; f++)
// // {     
// //      var b = "";

// //     if(f%2==0)
// //     {
// //         for(var s=0; s<=col-1; s++)
// //         {
// //              b = b + items[f][s] + " ";
// //         }
// //     }
// //     else
// //     {
// //         for(var s=col-1; s>=0; s--)
// //         {
// //              b = b + items[f][s] + " ";
// //         }
// //     }
// //     console.log(b);
// // }
var min = Infinity;
var arr=[-2,7,7,-1,-1,4,4]
var arr1=[]

for(var i=0; i<arr.length; i++)
{
    // console.log(arr[i])
    if(arr[i]<min)
    {
        min = arr[i];
        arr1.push(min);
        console.log(arr1)
    }
}
// console.log(min);

// for(var j = 0; j<arr.length; j++)
// {
//     if(arr[j]>=min)
//     {
//         arr1.push(arr[j]);
//         min = arr[j];
//     }
// }

console.log(arr1)