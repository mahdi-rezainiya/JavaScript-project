// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a0814a81d9e0ea8e164320078c18b3cb&page=1';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a0814a81d9e0ea8e164320078c18b3cb&query="';

// const main = document.getElementById('main');
// const form = document.getElementById('form');
// const search = document.getElementById('search');

// // getMovie(API_URL)
// const movies = getMovie(API_URL) ;
// showMovies(movies)

// function showMovies(movies){
//     main.innerHTML = '' ;
//     movies.forEach(movie => {
//         const {title , poster_path , vote_average , overview} = movie ;
//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie')
//         movieEl.innerHTML = `
//         <img src="${IMG_PATH + poster_path}" alt="${title}">

//         <div class="movie-info">
//             <h3>${title}</h3>
//             <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//         </div>
        
//         <div class="overview">
//             <h3>Overview</h3>
//             ${overview}
//         </div>`
//         // 
//         main.appendChild(movieEl)
//     })
// }

// function getClassByRate(vote){
//     if(vote >= 8){
//         return 'green'
//     }
//     else if(vote < 8 && vote >= 5){
//         return 'orange'
//     }
//     else{
//         return 'red'
//     }
// }



// async function getMovie(url){
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log(data.results);
//     // const movie = data.results ;
//     // showMovies(movies)
//     showMovies(data.results)
// }

// form.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     const searchTerm = search.value ;
//     if(searchTerm && searchTerm !== ''){
//         getMovie(SEARCH_API + searchTerm)
//         search.value = ''
//     }
//     else{
//         window.location.reload();
//     }
// })