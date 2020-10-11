 /* Add "https://api.ipify.org?format=json" statement 
           this will communicate with the ipify servers in 
           order to retrieve the IP address $.getJSON will 
           load JSON-encoded data from the server using a 
           GET HTTP request */ 
  
           $.getJSON("https://api.ipify.org?format=json", 
           function(data) { 

 
            // Pass the ip to the hidden input field
            document.getElementById('ip').value = (data.ip); 
            });

