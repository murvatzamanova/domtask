// const key = "4cc43c9591f08a993e37d3de55e50a72";
// fetch(
//   `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${key}`
// ).then((res) =>
//   res.json().then((data) => data.results.map((film) =>
//   console.log(`${film.name} | IMDB: ${film.vote_average.toFixed(1)}`)))
// );

// fetch(
//   `https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1&api_key=${key}`
// ).then((res) => res.json().then((data) => console.log(data.results)));

// DOM
// console.log(document);
// let paragraph = document.getElementById("paragraph")
// console.log(paragraph);
// console.log(paragraph.innerText);
// console.log(paragraph.innerHTML);
// console.log(paragraph.textContent);

// let paragraph = document.getElementsByClassName("demo")
// let paragraph = document.querySelector("#yoxlama");
// let paragraph = document.querySelectorAll(".demo");
// let check = true;
// let paragraph = document.getElementById("btn").addEventListener("click", () => {
//   btn.textContent = check ? "Clecked!!!" : "Click me";
//   check = !check;
// });
// console.log(paragraph);
  //   console.log("Hello world");
//   btn.textContent = `Click me ${count++}`





// .....TASK.....



// let span = document.getElementById("span");
// let paragraph = document.getElementById("btn").addEventListener("click", () => {

//   for (let a = 1; a <= 10 ; a++){
// console.log(`Click me ${a}`)
//   }

//   for (let a = 10; a >= 1 ; a--){
//     console.log(`Click me ${a}`)
//       }
    
// });


let span = document.getElementById("span");
let paragraph = document.getElementById("btn").addEventListener("click", () => {

  for (let a = 1; a <= 10 ; a++){
    btn.textContent = (`Click me ${a}`)
  }

  for (let a = 10; a >= 1 ; a--){
    btn.textContent = (`Click me ${a}`)
      }
    
});

