
const key ="d54d9738ca6243d63a057b201428c506"
const formulario  = document.getElementById("formularioClima");
const input =  document.getElementById("inputCiudad");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    var ciudad  = input.value
    querieApi(ciudad)
        .then(data => {
            if(data.cod == 404){
                //en  el caso que  no encuentre la ciudad
                document.getElementById("conteiner-info").style.display="none"
                document.getElementById("conteiner-error").style.display="flex"
            }else{
                document.getElementById("conteiner-error").style.display="none"
                mostrarInformacion(data)
                console.log("enntre")
        }
    })
    
})


function mostrarInformacion(data){
    document.getElementById("conteiner-info").style.display="flex";
    console.log(data.main.temp_max)
    document.getElementById("conteinerTemp").textContent = (data.main.temp)
    document.getElementById("conteinerTempMax").textContent = (data.main.temp_max)
    document.getElementById("conteinerTempMin").textContent = (data.main.temp_min)
    document.getElementById("conteinerH").textContent = (data.main.humidity)
    document.getElementById("conteinerW").textContent = (data.wind.speed)
}

function querieApi(ciudad){
    //Tenemos la url de la API
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    return fetch(url)
    .then(req => req.json()).catch(err => console.log(err)) //recibimos el dato y lo convertimos a JSON

    

}