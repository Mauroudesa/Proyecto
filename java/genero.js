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
  var queryString = new URLSearchParams(location.search)
  var idGenero = queryString.get("id")
  var genero = queryString.get("nombre")
  var cont = 2
  document.querySelector(".prox").innerHTML += genero
  // window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=deebcdef6efa3e1f329224d7c1ce98a9&page="+cont+"&with_genres="+idGenero)
            .then(function(respuesta) {
            return respuesta.json()
            })
            .then(function(informacion) {
              console.log(informacion);
              var seriesArray = informacion.results
              console.log(seriesArray);
              for (var i = 0; i < seriesArray.length; i++) {
                var img = seriesArray[i].poster_path;
                var id = seriesArray[i].id
                document.querySelector(".fotoswrap").innerHTML+= "<li class="+"li-item"+ "tabindex="+"0"+"><a href=series.html?id=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +img+"></a>"

          }

        })

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
      document.querySelector('#generos').innerHTML += '<li class="liGenero"><a href="genero.html?id='+ idGenero +'&nombre='+nombre+'">'+ nombre + '</a></li>'
    }
      })
      .catch(function(error) {
        var contenido2 = document.querySelector(".liGenero")
        contenido2.innerHTML +='<img src="img/tmdb.png" alt="" class="logo-tmdb">'
        console.log(error);
      })

















}
