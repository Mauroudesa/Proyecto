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

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&page=1')
.then(function(respuesta){
  return respuesta.json();
})
.then(function(datos){
  console.log(datos);
  var seriesArray = datos.results;
  var lista = document.querySelector(".todas");

  for(var i=0; i<seriesArray.length; i++){
    var li = '<li>'
    li += '<a href="series.html?id='+seriesArray[i].id +'">'
    li += '<img src="https://image.tmdb.org/t/p/original'+ seriesArray[i].poster_path +'">'
    li+= '</a>'
    li+= '</li>'
    lista.innerHTML += li
  }
})

  fetch('https://api.themoviedb.org/3/tv/popular?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&page=1')
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
        document.querySelector("button.btn-log").style.display = "none"
        document.querySelector("li.prefes").style.display = "block"
        document.querySelector("li.saludop").style.display = "block"
        document.querySelector("p.saludo").innerHTML = "Hola " + usuario
        document.querySelector("li.lg").style.display = "block"
        document.querySelector(".addfav").style.display = "block"
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
  })

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
   .then(res => res.json())
   .then(data => {
   var generos = data.genres
   for (var i = 0; i < generos.length; i++) {
     var nombre = generos[i].name
     var idGenero = generos[i].id
     document.querySelector('#generos').innerHTML += '<li><a href=genero.html?id='+ idGenero +'>'+ nombre +'</a></li>'
   }
     })







}
