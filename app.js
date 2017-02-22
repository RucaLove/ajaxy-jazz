// $(document).ready(function() {
//   // console.log('Hey!');
//   //get dat button
//   $('button').click(function() {
//     // console.log('i am clicked');
//     //look at API docs (rules to get their data)
//     //think about what you want to do with the data
//     //http://www.omdbapi.com/?s=''
//     //s is the key and in the '' is the user search
//     //want to return movies that are relevant to the user search
//     let movieSearch = $('#search').val();
//     let movieSearch2 = movieSearch.replace(/\s+/g, '+');
//
//     // console.log($('#search').val());
//     $.ajax({
//       //method for the HTTP request e.g. GET, POST, ..
//       method: 'GET',
//       //url is the place where the data lives
//       // url: 'http://www.omdbapi.com/?s=' + movieSearch,
//       url: `http://omdbapi.com/?s=${movieSearch}`,
//       // url: `http://omdbapi.com/?s=${movieSearch2}`,
//       dataType: 'json',
//       //stuff that happens if I get the data I want back
//       success: function(data) {
//             // select the 'collections' element
//         let collections = $('.collection');
//
//         collections.show();
//         collections.text('');
//         let movie = data.Search;
//             // go through each movie in the data returned from the API
//
//         for (let i = 0; i < movie.length; i++) {
//               // console.log(x[i].Title);
//           collections.append(`<li class="collection-item">${movie[i].Title} (${movie[i].Year})</li>`);
//         }
//         collections.css('display', 'inline-block');
//             // console.log(collections[0]); to the collection element
//               //add event listner
//         $('.collection').click(function(event) {
//               // console.log(event.target);
//           let film = event.target;
//               // console.log(data);
//           // console.log(film);
//           //select for the movie box
//           // console.log('.movie');
//           let movieDivs = $('.movie')
//
//           for (let i = 0; i < movieDivs.length; i++) {
//             if(movieDivs[i].innerText === '')
//             movieDivs[i].innerHTML = `${movie.innerText}`;
//             break
//           }
//         })
//       //what to do if I don't get what I want
//       },
//       error: function() {
//         // console.log('error');
//       }
//     })
//   })
// });

$(document).ready(function(){
  //get dat button
  $('button').click(function(){
    var userSearch = $('#search').val();
    $.ajax({
      //method for the HTTP request e.g. GET, POST, ..
      method: 'GET',
      //url is the place where the data lives
      url: `http://omdbapi.com/?s=${userSearch}`,
      //the format of data you want to get back
      dataType: 'json',
      //stuff that happens if I get the data I want back
      success: function(data){
        //select the "collections" element
        let collection = $('.collection');
        // collection[0].innerHTML = '';
        collection.show();
        //go through each movie in the data returned from the API
        //display them each as li-collection elements
        var ds = data.Search;
        console.log(ds);
        for(var i = 0; i < ds.length; i++){
          let movie = ds[i];
          let title = movie.Title
          let year = movie.Year
          $(collection).append(`<li class="collection-item">${title} (${year})</li>`)
        }
        //add event listener to the collection element
        $('.collection').click(function(event){
          //movie that was selected
          var movie = event.target;
          //select for the movie box
          var movieDivs = $('.movie');
          for(var i = 0; i < movieDivs.length; i++){
            if(movieDivs[i].innerText === ''){
              movieDivs[i].innerHTML = `${movie.innerText}`;
              break;
            }
          }

        })
      },
      //what to do if I don't get what I want
      error: function(){
        console.log('error');
      }
    })
  })
});
