var array = ["assignment", "problem", "media", "upload"];


var output = array.filter(function (el, i, arr) {
               //return el
        if(el[0]==="a" || el[el.length-1]==="a")
        {
          return el;
        }
})
console.log(output);