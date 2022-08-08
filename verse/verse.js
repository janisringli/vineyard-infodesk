function dailyVerseRequest() {
  fetch(
    "https://beta.ourmanna.com/api/v1/get?format=json&order=daily&language=de",
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      this.verse = response.verse.details.text;
      this.reference = response.verse.details.reference;
      document.getElementById("verse").innerHTML = response.verse.details.text;
      document.getElementById("reference").innerHTML =
        response.verse.details.reference;
    })

    .catch((err) => {
      document.getElementById("verse").innerHTML =
        "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me;";
      document.getElementById("reference").innerHTML = "Psalm 23:1-4";
    });
}
dailyVerseRequest();

setInterval(function () {
  dailyVerseRequest();
}, 50000000);

function reload() {
  setTimeout(function () {
    console.log("waiting for reload");
    location.reload();
  }, 200);
}
