var countryJson = fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');

    countryJson.then(data=>data.json()).then(data2=>countryList=data2);

      function filtered() { 
           var inputs=document.getElementById("countries").value;
          
          if (inputs) {
          var x = countryList.filter(data => { 
         if (((data.city).toLowerCase()).includes(inputs))
      return data;   
     });
         
          var text="<ul>";
          var resultDom= x.map(data => data="<li>"+data.city +"<span>"+data.population +"</span>" + "</li>");
          for(i=0; i<resultDom.length; i++)
          text += resultDom[i];
          text+= "</ul>";
    
        document.getElementById("result").innerHTML=text; 
        } 
          else {
            document.getElementById("result").style.display = "none";
     location.reload();
        }   
    };  
       
       