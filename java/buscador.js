window.onload = function () {

var search = queryString.get("srch")
var urlFija = ""
var article = ""

fetch("https://api.themoviedb.org/3/search/movie?api_key=deebcdef6efa3e1f329224d7c1ce98a9&query="+search+"&page=1 &include_adult=true")
  .then(function(response){
    return response.json()
    console.log(response);
  })
  .then(function(search){
    var arrayObject = search.results
    for (var i = 0; i < arrayObject.length; i++) {
      var title = arrayObject[i].title
      var url = arrayObject[i].poster_path;
      var id = arrayObject[i].id

      console.log(arrayObject);
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })










}
