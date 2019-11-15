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
  var genero = queryString.get("genero")
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
                document.querySelector(".fotoswrap").innerHTML+= "<li class="+"li-item"+ "tabindex="+"0"+"><a href=series.html?idSeries=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +img+"></a>"
                cont++;


          }

        })
  }
 // }
}
