var sucesso = document.getElementById('sucesso');
var error = document.getElementById('error');
var latitudeS = document.getElementById('latitude');
var longitudeS = document.getElementById('longitude');
var endereco = document.getElementById('endereco');

document.querySelector('#btn-localizacao').addEventListener('click', function(event) {
    sucesso.innerHTML = "";
    endereco.innerHTML = "";
    latitudeS.innerHTML = "";
    longitudeS.innerHTML = "";
    error.innerHTML = "";

    if (navigator.geolocation) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }

    async function showPosition(position) {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        sucesso.innerHTML = "Você está: ";
        latitudeS.innerHTML = `Latitude ${lat}`;
        longitudeS.innerHTML = `Longitude ${lon}`;
        error.innerHTML = "";

        local = await buscarEndereco(lat, lon)

        endereco.innerHTML = `Você está proximo de: ${local}`;
    }

    function showError() {
        navigator.permissions.query({ name: 'geolocation' }).then(function() {
            error.innerHTML = "Para ter acesso, é necessário permitir 'Saber sua localização'!";
            latitudeS.innerHTML = "";
            longitudeS.innerHTML = "";
            sucesso.innerHTML = "";

        });
    }

    async function buscarEndereco(lat, lon) {
        local = "";
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBUkoTXt1bL6oLyPUFFdVQXVlJpxbW-jWQ`)
            .then(function(response) {
                return response.json()
            }).then(function(data) {
                local = data.results[0].formatted_address;
            });
        return local;
    }


});

//acessibilidade
document.getElementById("btn-localizacao").focus();