// Assigning Images To Tiles
const items = document.querySelectorAll('.item')
let i = 0
items.forEach(item => {
     i++
     item.style.backgroundImage = `url(assets/imgsvg/p${i}.jpg)`
});
//
// Search

function save(cnt){
     window.localStorage.setItem('search', cnt)
}

const searchBar = document.getElementById('inp')

searchBar.addEventListener('keyup', function(event) {
     if (event.key === 'Enter') {
       save(searchBar.value)
       window.location.href = 'search.html'
       let search = window.localStorage.getItem('search')
     }
});

//