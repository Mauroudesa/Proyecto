window.onload = function() {
var params = (new URL(document.location)).searchParams;
var id = params.get('id');


//API : deebcdef6efa3e1f329224d7c1ce98a9

// INFO SERIE

fetch("https://api.themoviedb.org/3/tv/"+ id +"?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=es-ES")
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
      <p>${serieDetalle.name}</p>
        <p>Genero</p>
      <p>Lenguaje</p>
        <p>Descripcion
      sdaaaborum Lorem ipsum  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.dolor c</p>
    </article>
      `;
    }

  })
  .catch(function(errores){
   console.log(errores)
 });

// TRAILER

fetch("https://api.themoviedb.org/3/tv/"+ id +"/videos?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=es-ES")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var serie = informacion.results
    var nombre = serie.name
    var id = serie[0].key
    var url = 'https://www.youtube.com/embed/' + id
    contenedorTrailer = document.querySelector(".main")
    contenedorTrailer.innerHTML +=`
    <article class="video">
      <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    `;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

}
