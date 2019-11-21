window.onload = function() {
  var menuBtn = $('.menu-icon'),
  menu = $('.navegacion ul');

  menuBtn.click(function()  {
    if ( menu.hasClass('visible') ) {
      menu.removeClass('visible');

    } else{
      menu.addClass('visible');
    }
  });





var params = (new URL(document.location)).searchParams;
var id = params.get('id');


//API : deebcdef6efa3e1f329224d7c1ce98a9

// INFO SERIE

fetch("https://api.themoviedb.org/3/tv/"+ id +"?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-en")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    console.log(informacion);
    var serieDetalle = informacion
    var contenedorSeries = document.querySelector(".main")
    for (var i = 0; i < 1; i++){
      contenedorSeries.innerHTML +=`
      <img class="img-series3" src="https://image.tmdb.org/t/p/original/${serieDetalle.poster_path}" alt="">

       <article class="txt">
      <p class="eep">${serieDetalle.name}</p>

      <p>Género: ${serieDetalle.genres[1].name}</p>
      <p>Idioma: ${serieDetalle.languages}</p>
        <p>Descripción: ${serieDetalle.overview}</p>
        <div class="trailer">

        </div>
    </article>
      `;
    }

  })
  .catch(function(errores){
   console.log(errores)
 });

// TRAILER
console.log(id);
fetch("https://api.themoviedb.org/3/tv/"+ id +"/videos?api_key=deebcdef6efa3e1f329224d7c1ce98a9")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    console.log(informacion);
    var serie = informacion.results
    var nombre = serie.name
    var id = serie[0].key
    var url = 'https://www.youtube.com/embed/' + id
    contenedorTrailer = document.querySelector(".trailer")
    contenedorTrailer.innerHTML +=`
    <article class="video">
      <iframe width= 400rem height= 300rem src="${url}" frameborder="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    `;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  fetch("https://api.themoviedb.org/3/tv/"+ id +"/recommendations?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
    var seriesArray = datos.results;
    var lista = document.querySelector(".relacionadas");

    for(var i=0; i<seriesArray.length; i++){
      var li = '<li>'
      li += '<a href="series.html?id='+seriesArray[i].id +'">'
      li += '<img src="https://image.tmdb.org/t/p/original'+ seriesArray[i].poster_path +'">'
      li+= '</a>'
      li+= '</li>'
      lista.innerHTML += li
    }
  })



       document.querySelector("form.login").onsubmit = function(e) {

         var usuario = document.login.user.value;
         localStorage.setItem('user', usuario);
         var mail = document.login.mail.value;
         var genero= document.login.genero.value;
         var formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if (usuario== '' || mail== '' && mail.value.match(formatEmail)== null  || genero== '') {
           e.preventDefault()
           UIkit.notification({message: 'Porfavor, complete el formulario', status: 'warning',  timeout: 2000})
         }else {
           e.preventDefault()
           UIkit.notification().close()
           localStorage.setItem("user", usuario)
           document.querySelector("button.login-button").style.display = "none"
           document.querySelector("li.prefes").style.display = "block"
           document.querySelector("li.saludop").style.display = "block"
           document.querySelector("p.saludo").innerHTML = "Hola " + usuario
           document.querySelector("li.lg").style.displindexay = "block"
           document.querySelector(".uk-modal-close-default").click()
           var nombre = document.querySelector("input.name").value

         }

       }
       document.querySelector("a.logout").onclick = function(e) {

         localStorage.clear()
         document.querySelector("li.prefes").style.display = "none"
         document.querySelector("li.saludop").style.display = "none"
         document.querySelector("button.btn-log").style.display = "block"

       }



   // listadp de generos

     fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
      .then(res => res.json())
      .then(data => {
      var generos = data.genres
      for (var i = 0; i < generos.length; i++) {
        var nombre = generos[i].name
        var idGenero = generos[i].id
        document.querySelector('#generos').innerHTML += '<li class="liGenero"><a href=genero.html?id='+ idGenero +'>'+ nombre +'</a></li>'
      }
        })

















}
