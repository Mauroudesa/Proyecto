window.onload = function() {
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
      <p>${serieDetalle.name}</p>
        <p>${serieDetalle.genres}</p>
      <p>${serieDetalle.languages}</p>
        <p>${serieDetalle.overview}</p>
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
    contenedorTrailer = document.querySelector(".main")
    contenedorTrailer.innerHTML +=`
    <article class="video">
      <iframe width= 470rem height= 300rem src="${url}" frameborder="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
}
