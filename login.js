 function showinput(){
         
          var regemailid,regpassword;
          regemailid=document.getElementById("re").value;
          regpassword=document.getElementById("rp").value;
          if(regemailid=="" && regpassword==""){
            document.getElementById("msg").innerHTML="please enter the details";
            document.getElementById("space").style.display="none";
          }
          else{
          document.getElementById("space").style.display="none";
          document.getElementById("main").style.display="block"; 
          }
          }
            function openmsg(){
              var regemailid,regpassword,loginid,loginpassword;
              loginid=document.getElementById("lid").value;
              loginpassword=document.getElementById("lp").value;
              regemailid=document.getElementById("re").value;
              regpassword=document.getElementById("rp").value;
            document.getElementById("main").style.display="none";
              if(regemailid==loginid&&regpassword==loginpassword){
             document.getElementById("msg").innerHTML="Welcome";
            }
              else{
              document.getElementById("msg").innerHTML="invalid credentials";
              }
            }