function nextEvents() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data.data.attributes.flyer.data.attributes.formats.large.url);
      document.getElementById("eventImage").src =
        data.data.attributes.flyer.data.attributes.formats.large.url;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:1337/api/flyers/2?populate=*", true);
  xhttp.send();
}
