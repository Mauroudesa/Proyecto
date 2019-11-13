window.onload = function(){

var menuBtn = $('.menu-icon'),
menu = $('.navegacion ul');

menuBtn.click(function()  {
  if ( menu.hasClass('visible') ) {
    menu.removeClass('visible');

  } else{
    menu.addClass('visible');
  }
});

var queryString = new URLSearchParams(location.search)
var idSerie = busqueda.get("id")

  fetch("https://api.themoviedb.org/3/tv/popular?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&page=1")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
    var seriesArray = datos.results;
    var lista = document.querySelector(".lista");

    for(var i=0; i<seriesArray.length; i++){
      var li = '<li>'
      li += '<a href="series.html?id='+seriesArray[i].id +'">'
      li += '<img src="https://image.tmdb.org/t/p/original'+ seriesArray[i].poster_path +'">'
      li+= '</a>'
      li+= '</li>'
      lista.innerHTML += li
    }
  })

  fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&page=1')
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
    var seriesArray = datos.results;
    var lista = document.querySelector(".aire");

    for(var i=0; i<seriesArray.length; i++){
      var li = '<li>'
      li += '<a href="series.html?id='+seriesArray[i].id +'">'
      li += '<img src="https://image.tmdb.org/t/p/original'+ seriesArray[i].poster_path +'">'
      li+= '</a>'
      li+= '</li>'
      lista.innerHTML += li
    }
  })

  fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&page=1')
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
    var seriesArray = datos.results;
    var lista = document.querySelector(".puntuadas");

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
