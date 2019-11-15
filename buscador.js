window.onload = function () {
    var menuBtn = $('.menu-icon'),
    menu = $('.navegacion ul');

    menuBtn.click(function()  {
      if ( menu.hasClass('visible') ) {
        menu.removeClass('visible');

      } else{
        menu.addClass('visible');
      }
    });


    var queryString = new URLSearchParams(location.search);
    var busquedaUser = queryString.get("busqueda");
    document.querySelector(".prox").innerHTML += busquedaUser;


    fetch("https://api.themoviedb.org/3/search/tv?api_key=deebcdef6efa3e1f329224d7c1ce98a9&language=en-US&query="+ busquedaUser)


        .then(function(respuesta) {
        return respuesta.json()

        })
        .then(function(informacion) {

var resultadoDeBusqueda = informacion.results;
console.log(resultadoDeBusqueda);
for (var i = 0; i < resultadoDeBusqueda.length; i++) {
  var img = resultadoDeBusqueda[i].poster_path;
  var id = resultadoDeBusqueda[i].id;
  document.querySelector(".fotoswrap").innerHTML+= "<li class="+"li-item"+ "tabindex="+"0"+"><a href=series.html?id=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +img+"></a>"

}
})

  }
