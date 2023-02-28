async function foo() {
    const res = await fetch('CV.json')
    const obj = await res.json();
    return obj;
  }

    foo().then(data => {
    document.getElementById("nombre").innerHTML=data.datos_personales.nombre +" "+ data.datos_personales.apellido;
  });
  
  
    foo().then(data => {
    document.getElementById("info_personal_ul1").insertAdjacentHTML('beforebegin',`<img src="${data.datos_personales.imagenes.larga}" alt="texto que aparece si no carga la imagen"></img>`);}
    );
    foo().then(data => {
    document.getElementById("info_personal_ul1").insertAdjacentHTML('beforeend',`<li class="info_personal">${data.datos_personales.nacimiento}</li>`);}
    );
    foo().then(data => {
    document.getElementById("info_personal_ul1").insertAdjacentHTML('beforeend',`<li class="info_personal">D.N.I ${data.datos_personales.documento}</li>`);}
    );
    foo().then(data=>{
        document.getElementById("info_personal_ul1").insertAdjacentHTML('beforeend',`<li class="info_personal">${data.datos_personales.calle}, ${data.datos_personales.localidad}, ${data.datos_personales.provincia}, ${data.datos_personales.pais}</li>`);}
    );
    foo().then(data => {
        document.getElementById("info_personal_ul1").insertAdjacentHTML('beforeend',`<li class="info_personal">${data.datos_personales.telefono}</li>`);}
        );
    foo().then(data => {
        document.getElementById("info_personal_ul1").insertAdjacentHTML('beforeend',`<li class="info_personal">${data.datos_personales.mail}</li>`);}
            );

    document.getElementById("info_personal_ul1").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Idiomas</p>`);
    foo().then(data => {
        (data.datos_personales.idiomas).forEach(post => {document.getElementById("info_personal_ul2").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

    document.getElementById("info_personal_ul2").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Habilidades</p>`);

    foo().then(data => {
        (data.datos_personales.habilidades).forEach(post => {document.getElementById("info_personal_ul3").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

        document.getElementById("info_personal_ul3").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Aptitudes</p>`);

    foo().then(data => {
        (data.datos_personales.aptitudes).forEach(post => {document.getElementById("info_personal_ul4").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

        document.getElementById("info_personal_ul4").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Cursos y certificados</p>`);

    foo().then(data => {
        (data.datos_personales.cursos).forEach(post => {document.getElementById("info_personal_ul5").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

        document.getElementById("nombre").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Resumen Profesional</p>`);

        foo().then(data => {
            document.getElementById("info_carrera_ul1").insertAdjacentHTML('beforeend',`<p class="info_personal">${data.datos_carrera.resumen}</p>`);}
            );

            document.getElementById("info_carrera_ul1").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Experiencias</p>`);

        foo().then(data => {
            document.getElementById("info_carrera_ul2").insertAdjacentHTML('beforeend',`<p class="info_personal">${data.datos_carrera.resumen}</p>`);}
            );

            document.getElementById("info_carrera_ul2").insertAdjacentHTML('afterend',`<p  class="info_personal linea">Formación</p>`);

            foo().then(data => {
                document.getElementById("info_carrera_ul3").insertAdjacentHTML('beforeend',`<p class="info_personal">${data.datos_carrera.resumen}</p>`);}
                );

    /*
    foo().then(data => {
            document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p  class="info_personal">${data.datos_personales.idiomas[0]}</p>`);}
            );
    foo().then(data => {
        document.getElementById("info_personal").insertAdjacentHTML('beforeend',`<p  class="info_personal">${data.datos_personales.idiomas[1]}</p>`);}
            );
           
       
 */


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
            
