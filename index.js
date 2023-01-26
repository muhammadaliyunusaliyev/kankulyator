function calculate(equation) {
     try {
       var result = eval(equation);
       document.getElementById("result").value = result;
     }
     catch(err) {
       document.getElementById("result").value = "Error";
     }
   }