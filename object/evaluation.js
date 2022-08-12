data = [
    {name: "Suman"   ,subject: "Science" ,marks: 75},
    {name: "Rajat"   ,subject: "History" ,marks: 60},
    {name: "Abhinav" ,subject: "Maths"   ,marks: 85},
    {name: "Lakhan"  ,subject: "English" ,marks: 20},
    {name: "Santosh" ,subject: "Hindi"   ,marks: 30},
];


function maxMarks (data1)
{
    var max = -Infinity;
    var maxStudent = null;
    var maxMarks1 = null;
    var maxsub = null;
    for(var i=0; i<data1.length;i++)
    {
        if(data1[i].marks>max)
        {
            max = data1[i].marks;
            maxStudent = data1[i].name ;
            maxMarks1 = data1[i].marks;
            maxsub = data1[i].subject;
        }
    }
   console.log(max);
   console.log(maxStudent+"-"+maxMarks1+"-"+maxsub);

}
maxMarks (data);