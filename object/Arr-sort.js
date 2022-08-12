
var min = Infinity;
var arr=[-2,7,7,-1,-1,4,4,-1,-3,-2]
var arr1=[];
var arr2=[];
var obj1 = {};
for(var i=0; i<arr.length; i++)
{
    if(arr[i]>0)
    {
        arr1.push(arr[i])
    }
    else
    {
        arr2.push(arr[i])
    }
}
console.log(arr1, arr2)

arr.sort();
console.log(arr)
