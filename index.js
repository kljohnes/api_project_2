
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/`
const apiKey = "xOrJfZFoQ1hDnmbCCR3Qdj3TJUod3N7b8o1UUHtQ"
let url;


// const earthDate = document.querySelector('.earth-date')
// const rover = document.querySelector()
const searchForm = document.querySelector('form')
const section = document.querySelector('#display')

searchForm.addEventListener('submit', submitSearch);
function submitSearch(e) {
    fetchResults(e);
  }

function fetchResults(e){
    e.preventDefault();
    let rover = document.querySelectorAll('input[name="gridRadios"]')
    for (let r of rover){
    if (r.checked){
        rover = r.value}
    }
    const earthDate = document.querySelector(".form-control")
    url = baseUrl + rover + '/' + "photos?earth_date=" + earthDate.value + "&api_key=" + apiKey
    fetch (url)
    
    .then (res => res.json())
   
    .then(json => displayPhotos(json))
}

function displayPhotos(json){
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let photos = json.photos
    for(let i = 0; i < photos.length; i++){
    let image = document.createElement('img');
    image.src = json.photos[i].img_src;
    section.appendChild(image);
  
    }
    }














// let start = "2021-04-07"
// let end = "2021-04-08"

// const url = "https://api.nasa.gov/neo/rest/v1/"

// const query = `feed?start_date=${start}&end_date=${end}&api_key=`


// const url = "https://images-api.nasa.gov/search?q="
// let query = "apollo"

// fetch (url + query)
// .then (res=> res.json())
// .then (json => {console.log(json.collection.items[0])})