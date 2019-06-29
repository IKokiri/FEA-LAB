var sucesso = document.getElementById('sucesso');
var error = document.getElementById('error');
var latitudeS = document.getElementById('latitude');         
var longitudeS = document.getElementById('longitude');  

document.querySelector('#btn-localizacao').addEventListener('click', function (event) {
    
        
    if (navigator.geolocation) {
        /* geolocation is available */
      
           navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    

    function showPosition(position){
        
        sucesso.innerHTML = "Você está:";
        latitudeS.innerHTML = "Latitude "+position.coords.latitude;
        longitudeS.innerHTML = "Longitude "+position.coords.longitude;
        error.innerHTML = "";
    }

    function showError(){

        navigator.permissions.query({name:'geolocation'}).then(function() {
            error.innerHTML = "Para ter acesso, é necessário permitir 'Saber sua localização'!";
            latitudeS.innerHTML = "";
            longitudeS.innerHTML = "";
            sucesso.innerHTML = "";

    });
          
        
    }


  
});