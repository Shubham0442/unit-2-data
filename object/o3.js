
var details =
{
    data : [],

    addStudents: function (name1 ,m1, sci1, eng1)
                    {
                        var obj= {};

                        obj["name"]=name1;
                        obj["maths"] = m1;
                        obj["science"]=sci1;
                        obj["english"]=eng1;
                        
                        this.data.push(obj);
                    },

    lowStudentsMarks: function ()
                    {
                        var low_student = null;
                        var min_total = Infinity;
                        var low_Total = null;

                        for(var i=0; i<this.data.length; i++)
                        {
                            
                            current_total = this.data[i].maths + this.data[i].science + this.data[i].english;
                            
                            if(current_total<min_total)
                            {
                                min_total=current_total;
                                low_student = this.data[i].name;
                                
                            }

                        }
                       console.log(low_student,min_total);
                    }                

}

details.addStudents("Shubham",10,15,20);
details.addStudents("Rajesh",12,17,20);
details.addStudents("Suraj",15,20,20);
console.log(details);

console.log(details.data);
details.lowStudentsMarks();