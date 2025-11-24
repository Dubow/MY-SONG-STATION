// SONG DATABASE
const songs = [
    {
        title: "Unavailable",
        artist: "Davido ft. Musa Keys",
        image: "image/davido cover.png",
        file: "songs/Davido-Ft-Musa-Keys-Unavailable-(TrendyBeatz.com).mp3"
    },
    {
        title: "Blinding Lights",
        artist: "The Weekend",
        image: "image/The weeknd.png",
        file: "songs/The_Weeknd_-_Blinding_Lights_(mp3.pm).mp3"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa ft. DaBaby",
        image: "image/Dua Lipa ft Da Baby.png",
        file: "songs/Dua_Lipa_Dababy_-_Levitating_Featuring_(mp3.pm).mp3"
    },
    {
        title: "Calm Down",
        artist: "Rema",
        image: "image/Rema.png",
        file: "songs/Rema-Calm-Down-(TrendyBeatz.com).mp3"
    }
];

const songList = document.getElementById("songList");

// Display songs on page load
window.onload = () => displaySongs(songs);

function displaySongs(data) {
    songList.innerHTML = "";
    data.forEach(song => {
        songList.innerHTML += `
        <div class="song-card">
            <img src="${song.image}" alt="song cover">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <audio controls>
                <source src="${song.file}" type="audio/mp3">
            </audio>
        </div>
        `;
    });
}

// Search Function
function searchSongs() {
    const artist = document.getElementById("searchArtist").value.toLowerCase();
    const title = document.getElementById("searchTitle").value.toLowerCase();

    const result = songs.filter(song =>
        song.artist.toLowerCase().includes(artist) &&
        song.title.toLowerCase().includes(title)
    );

    displaySongs(result);
}

function resetSongs() {
    document.getElementById("searchArtist").value = "";
    document.getElementById("searchTitle").value = "";
    displaySongs(songs);
}

// Survey Submission
document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Thank you for your feedback!");
    this.reset();
});

// Sidebar Toggle (Mobile)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}
