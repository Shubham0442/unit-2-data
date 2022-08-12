var data = 
[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},

	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},

	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
console.log(data);


function markAdd (arr)
{
    var sum = 0;
    for(var i=0;i<arr.length; i++)
    {
         sum = sum + arr[i];
    }
    return sum;
}

function heigthestMarks (info)
{
    var max = -Infinity;
    var name;
    var grade = info.grade
    for(var i=0; i<info.students.length;i++)
    {
        var total = markAdd (info.students[i].marks);

        if(total>max)
        {
            max=total;
            name = info.students[i].name;
        }
    }
   console.log(grade+"-"+name+"-"+max);
}


for(var i=0;i<data.length; i++)
{
    heigthestMarks (data[i]);
}
