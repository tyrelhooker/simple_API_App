let request = new XMLHttpRequest();

console.log({request});

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // console.log(request);
  // console.log(this.response)
  let data = JSON.parse(this.response);
  console.log({data});

  data.forEach(movie => {
    console.log(movie.title);
  })
}

request.send();

