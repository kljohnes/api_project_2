
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/`
const apiKey = "xOrJfZFoQ1hDnmbCCR3Qdj3TJUod3N7b8o1UUHtQ"
let searchUrl;
let manifestUrl;
let roverArr = ['spirit', 'opportunity', 'curiosity','perseverance']



function fetchManifest () {
    for(let i = 0; i < roverArr.length; i++){
    manifestUrl = baseUrl + 'manifests/' + `${roverArr[i]}` + '/' + '?api_key=' + apiKey
    fetch (manifestUrl)
   .then (res => res.json())
   .then (json => displayManifest(json))
   }
   
}

function displayManifest(json){
const table = document.querySelector(".table")
const tableRow = document.createElement('tr')
const tableHead = document.createElement('th')
const launchDate = document.createElement('td')
const landingDate = document.createElement('td')
const status = document.createElement('td') 
const maxDate = document.createElement('td')
const totalPhotos = document.createElement('td')
tableHead.innerText = json.photo_manifest.name
launchDate.innerText = json.photo_manifest.launch_date
landingDate.innerText = json.photo_manifest.landing_date
status.innerText = json.photo_manifest.status
maxDate.innerText = json.photo_manifest.max_date
totalPhotos.innerText = json.photo_manifest.total_photos
tableRow.appendChild(tableHead)
tableRow.appendChild(launchDate)
tableRow.appendChild(landingDate)
tableRow.appendChild(status)
tableRow.appendChild(maxDate)
tableRow.appendChild(totalPhotos)
table.appendChild(tableRow)

}

fetchManifest()


const searchForm = document.querySelector('form')
const section = document.querySelector('.card-group')

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
    searchUrl = baseUrl + 'rovers/' + rover + '/' + "photos?earth_date=" + earthDate.value + "&api_key=" + apiKey
    fetch (searchUrl)
    
    .then (res => res.json())
   
    .then(json => displayPhotos(json))
}

function displayPhotos(json){
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let photos = json.photos
    {for(let i = 0; i < photos.length; i++){
       
    let image = document.createElement('img');
    image.src = json.photos[i].img_src;
    section.appendChild(image)}
    }
}





    //     else {
    //         console.log("error")}
        // let div = document.createElement('div');
        // div.innerText = "No photos available for this date";
        // section.appendChild(div)}
  
    // }
    // }














// let start = "2021-04-07"
// let end = "2021-04-08"

// const url = "https://api.nasa.gov/neo/rest/v1/"

// const query = `feed?start_date=${start}&end_date=${end}&api_key=`


// const url = "https://images-api.nasa.gov/search?q="
// let query = "apollo"

// fetch (url + query)
// .then (res=> res.json())
// .then (json => {console.log(json.collection.items[0])})