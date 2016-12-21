<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numberseparation = {
    printevennumber: function() {
	  for (i=0; i<=100; i++){
	    if (i%2==0){
		    document.write(i +" ");
        }
      }
    },
   
    printoddnumber: function(){
     for (i=0; i<=100; i++){
	    if (i%2!==0){
		    document.write(i +" ");
        }
      }
    }
}

numberseparation.printevennumber();
  document.write("Odd number");
numberseparation.printoddnumber();
 
</script>
</body>
</html>