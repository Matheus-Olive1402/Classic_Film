var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/240px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/7/71/Chef%C3%A3o.jpg/250px-Chef%C3%A3o.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d5/Psycho_-_%281960%29.jpg/230px-Psycho_-_%281960%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/230px-12_Angry_Men_%281957_film_poster%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/7/73/Dr._Strangelove.jpg/230px-Dr._Strangelove.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    "<a href=" + listaFilmes[i] + "><img src=" + listaFilmes[i] + "></a>"
  );
}