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

    document.getElementById("info_personal_ul1").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Idiomas</p>`);
    foo().then(data => {
        (data.datos_personales.idiomas).forEach(post => {document.getElementById("info_personal_ul2").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

    document.getElementById("info_personal_ul2").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Habilidades</p>`);

    foo().then(data => {
        (data.datos_personales.habilidades).forEach(post => {document.getElementById("info_personal_ul3").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

        document.getElementById("info_personal_ul3").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Aptitudes</p>`);

    foo().then(data => {
        (data.datos_personales.aptitudes).forEach(post => {document.getElementById("info_personal_ul4").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });

        document.getElementById("info_personal_ul4").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Cursos y certificados</p>`);

    foo().then(data => {
        (data.datos_personales.cursos).forEach(post => {document.getElementById("info_personal_ul5").insertAdjacentHTML('beforeend',`<li  class="info_personal">${post}</li>`)});
        });





        document.getElementById("nombre").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Resumen Profesional</p>`);

        foo().then(data => {
            document.getElementById("info_carrera_ul1").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.resumen}</p>`);}
            );

            document.getElementById("info_carrera_ul1").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Experiencias</p>`);


            foo().then(data => {
                const length1  = (data.datos_carrera.experiencia[0].fecha).length;
            for (let x = 0;x <= length1-1 ;x++) {
                document.getElementById("info_carrera_ul2").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.experiencia[0].fecha[x]}</p>`)
                document.getElementById("info_carrera_ul2").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.experiencia[1].trabajo[x]} ${data.datos_carrera.experiencia[2].empresa[x]}</p>`)
                for(let y = 0;y <= ((data.datos_carrera.experiencia[3].responsabilidades[x]).length)-1 ;y++){
                document.getElementById("info_carrera_ul2").insertAdjacentHTML('beforeend',`<li class="info_carrera_li">${data.datos_carrera.experiencia[3].responsabilidades[x][y]}</li>`)}
                document.getElementById("info_carrera_ul2").insertAdjacentHTML('beforeend',`<p class="tabulador"></p>`)
                            }});  

     
            document.getElementById("info_carrera_ul2").insertAdjacentHTML('afterend',`<p  class="info_personal linea_texto">Formaci??n</p>`);

            foo().then(data => {
                const length  = (data.datos_carrera.formacion[0].fecha).length;
            for (let x = 0;x <= length-1 ;x++) {
                document.getElementById("info_carrera_ul3").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.formacion[0].fecha[x]}</p>`)
                document.getElementById("info_carrera_ul3").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.formacion[1].carrera[x]}</p>`)
                document.getElementById("info_carrera_ul3").insertAdjacentHTML('beforeend',`<p class="info_carrera">${data.datos_carrera.formacion[2].instituto[x]}</p>`)
                document.getElementById("info_carrera_ul3").insertAdjacentHTML('beforeend',`<p class="tabulador"></p>`)
                            }});

            const collection = document.getElementsByClassName("linea_texto");
                for (let x = 0;x <= collection.length-1 ;x++) {
                    collection[x].insertAdjacentHTML('beforebegin',`<p  class="info_personal linea"></p>`)
                    }
  