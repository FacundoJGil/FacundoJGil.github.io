fetch('CV.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre").innerHTML=data.nombre;  
        });

//document.getElementById("nombre").innerHTML=nombre;