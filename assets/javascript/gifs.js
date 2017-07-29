 var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var spIndex;
 $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      spIndex = response.data[0].images.downsized.url;
      $("#hans").attr("src", spIndex);
      })

    