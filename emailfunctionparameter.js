<!DOCTYPE html>
<html>
<body>
<p>Send Email</p>
<script>
var email = {
    sendEmailFrom : "", //variable from
    sendEmailTo  : "",  //variable to 
    sendEmailBody : "", //variable body
    
    /* This function set a value of sendEmailFrom
        @param from
    */
    setEmailFrom: function(from){
        this.sendEmailFrom = from;
    },
    
    /* This function set a value of sendEmailTo
       @param to
    */
   setEmailTo: function(to){
        this.sendEmailTo =  to;
    },
    
    /* This function set a value of sendEmailBody
       @param body
    */
    setEmailBody: function(body){
        this.sendEmailBody =  body;
    }
   };
   email.setEmailFrom ("Ram");
   email.setEmailTo ("Shyam");
   email.setEmailBody("Hello Buddy");
   
   document.write(" From ") + document.write(email.sendEmailFrom);
   document.write(" To ") + document.write(email.sendEmailTo);
   document.write(" Message ") + document.write(email.sendEmailBody);
   document.write('<br>')
   document.write('<br>')
  
   email.setEmailFrom ("Gita");
   email.setEmailTo ("Sita");
   email.setEmailBody("Happy New Year");
   
   document.write(" From ") + document.write(email.sendEmailFrom);
   document.write(" To ") + document.write(email.sendEmailTo);
   document.write(" Message ") + document.write(email.sendEmailBody);
</script>
</body>
</html>
