const apiUrl = "http://localhost:3000/films";
fetch(apiUrl)
  .then((res) => res.json())
  .then((films) => films.forEach((films) => filmAltnernatives(films)));

function filmAltnernatives(films) {
  let wrapper = document.getElementById("film-wrapper");
  const divCard = document.createElement("div");
  divCard.className = "list";
  html = `
        
          <div>
          <button class="movies">Title: ${films.title}</Button>
          <div>
       
      
      `;
  divCard.innerHTML = html;
  wrapper.appendChild(divCard);
}

document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".movies");
  button.addEventListener("click", function () {
    console.log(`movie plot: ${films.description}`);
  });
});
