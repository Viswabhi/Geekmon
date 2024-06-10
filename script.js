let pokemonCardContainer = document.getElementById("pokemon-card-container");
pokemonCardContainer.classList.add('pokemonCardContainer');
let searchInput = document.getElementById("search");
let filterBtn = document.getElementById("filter"); 
let allPokemonData = [];


filterBtn.addEventListener("click", function(){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let pokemonType = card.children[0].children[0].children[3].innerText;
         console.log(pokemonType);
        if(pokemonType === type.value){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
})

function createPokemonCard(details){
    let type = details.types[0].type.name
    let color = type === "water" ? "#0190FF" : (type ==="grass") ? "green" :""
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-inner" style="background-color:${color};">
            <div class="card-front">
            <div class = "wrap">
                <div class="id">${details.id}</div>
                <div class = "hp">HP${details.stats[0].base_stat}</div>
             </div>   
                <img src="${details.sprites.front_default}" alt="${details.name}" class= "img">
                <div class="name">${details.name}</div>
            <div class = "name-type">    
                <div class="type">${details.types[0].type.name}</div>
            </div>    
            </div>
      
         </div>
    `;
    return card;
}

function renderPokemonCards(pokemonData) {
    pokemonCardContainer.innerHTML = ''; // Clear existing cards
    pokemonData.forEach(pokemon => {
        let card = createPokemonCard(pokemon);
        pokemonCardContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", function() {
    let searchValue = searchInput.value.toLowerCase();
    let filteredPokemon = allPokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchValue)
    );
    renderPokemonCards(filteredPokemon);
});

async function fetchPokemon(i) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await response.json();
    console.log(result);
    return result;
}

async function fetchMaindata() {
    for (let i = 1; i <= 151; i++) {
        let pokemon = await fetchPokemon(i);
        allPokemonData.push(pokemon);
    }
    renderPokemonCards(allPokemonData);
}

fetchMaindata();






//sir's part

// console.log("helllo world!!");
// let pokemonCardContainer = document.getElementById("pokemon-card-container");
// let searchInput = document.getElementById("serach");
// let filterBtn = document.getElementById("filter");


// filterBtn.addEventListener("click", function(){
//     let allCards = document.querySelectorAll(".card");
//     allCards.forEach(function(card){
//         let pokemonType = card.children[0].children[0].children[3].innerText;
//         // console.log(pokemonType);
//         if(pokemonType === type.value){
//             card.style.display = "block";
//         }else{
//             card.style.display = "none";
//         }
//     })
// })

// function createPokemonCard(details) {
// //   console.log(details);
//   let card = document.createElement("div");
//   card.classList.add("card")
//   card.innerHTML = `
//     <div class="card-inner">
//     <div class="card-front">
//     <div class="id">${details.id}</div>
//     <img src='${details.sprites.front_default}'/>
//     <div class="name">${details.name}</div>
//     <div class="type">${details.types[0].type.name}</div>
//     </div>

//     <div claas="back-card">
//     <img src='${details.sprites.back_default}'/>
//     <div class="name">${details.name}</div>
//     <div class="ability">${details.abilities[0].ability.name}
//     </div>
//     </div>
//     `;

//     // console.log(card);
//     return card;
// }

// searchInput.addEventListener("input", function(){
//     let searchValue = searchInput.value;
//     // console.log(searchValue);
//     let allCards = document.querySelectorAll(".card");
//     // console.log(allCards);
//     allCards.forEach(function(card){
//         // console.log(card);
//         let pokemonName = card.children[0].children[0].children[2].innerText;
//         console.log(pokemonName);

//         if(pokemonName.startsWith(searchValue)){
//             card.style.display = "block";
//         }else{
//             card.style.display = "none";
//         }
//     })
// })


// async function fetchPokemon(i) {
//   let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//   let result = await data.json();
//   return result;
// }

// async function fetchMaindata() {
//   for (let i = 1; i <= 50; i++) {
//     let pokemon = await fetchPokemon(i);
//     // console.log(pokemon);
//     let card = createPokemonCard(pokemon);
//     pokemonCardContainer.appendChild(card);
//   }
// }

// fetchMaindata();

  //     <div class="back-card">
        //         <img src="${details.sprites.back_default}" alt="${details.name}">
        //         <div class="name">${details.name}</div>
        //         <div class="ability">${details.abilities[0].ability.name}</div>
        //     </div>




