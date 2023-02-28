async function foo() {
    const res = await fetch('CV.json')
    const obj = await res.json();
    return obj;
  }

    foo().then(data => {
    document.getElementById("nombre").innerHTML=data.datos_personales.nombre +" "+ data.datos_personales.apellido;
  });
  
  
    foo().then(data => {
    document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<img src="${data.datos_personales.imagenes.larga}" alt="texto que aparece si no carga la imagen"></img>`);}
    );
    foo().then(data => {
    document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p>${data.datos_personales.nacimiento}</p>`);}
    );
    foo().then(data => {
    document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p>D.N.I ${data.datos_personales.documento}</p>`);}
    );
    foo().then(data=>{
        document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p>${data.datos_personales.calle}, ${data.datos_personales.localidad}, ${data.datos_personales.provincia}, ${data.datos_personales.pais}</p>`);}
    );
    foo().then(data => {
        document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p>${data.datos_personales.telefono}</p>`);}
        );
    foo().then(data => {
        document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p>${data.datos_personales.mail}</p>`);}
            );
 


/*var info;

fetch('CV.json')
    .then(response => response.json())
   // .then(data => {const informacion=data});
    .then(data => {info=data;})
    .then(()=>{console.log(info);})
    .then(()=>document.getElementById("nombre").innerHTML=info.nombre);


//const obj = JSON.parse(informacion);
      console.log(info);
//document.getElementById("nombre").innerHTML=info.nombre;*/

