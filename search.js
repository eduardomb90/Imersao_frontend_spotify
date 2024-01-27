const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then(response => response.json())
    .then(result => displayResults(result));

    console.log(searchTerm);
}

function displayResults(result) {
  hidePlaylists();
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');

    console.log(result);
}

document.addEventListener('input', (e) => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    playlistContainer.classList.add('hidden');
    resultArtists.classList.remove('hidden');
    return;
  }

  requestApi(searchTerm);
});

function hidePlaylists() {
  console.log("hidePlaylists");
  playlistContainer.classList.add("hidden");
}