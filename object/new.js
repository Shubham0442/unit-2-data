
var name = ["Suman", "Rajat", "Abhinav", "Lakhan", "Santosh"]
var subject = ["Science", "History", "Maths", "English", "Hindi"];
var marks  = [75, 60, 85, 20, 30];

var details = 
{

   data:[],

   addStudents: function (name1 , sub1, mark)
               {
                      obj = {};
                   obj["name"]=name1;
                   obj["subject"]=sub1;
                   obj["marks"]=mark;
                  
                   this.data.push(obj);

               }
};
details.addStudents("Suman","Science",75);
details.addStudents("Rajat","History", 60);
details.addStudents("Abhinav","Maths",85);
details.addStudents("Lakhan","English",20);

console.log(details);




    // for(var i=0; i<details.data.length; i++)
    // {
    //     console.log(details.data[i].name);
    // }


var max = -Infinity;
var student = null;
var subjects = null;

for(var j=0; j<details.data.length;j++)
{
    if(details.data[j].marks>max)
    {
        max=details.data[j].marks;
        student = details.data[j].name;
        subjects=details.data[j].subject;
    }
    
}
console.log(student+"-"+subjects+"-"+max);



