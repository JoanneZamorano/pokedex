const baseUrl$$ = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`; //base url
let id = 1;
//limite150 = '?offset=0   empieza en 0   &limit=151 limite de 151

const llamarApi = ()=>{
        fetch (baseUrl$$)
        .then(res => res.json())
        .then(res => {pintarPokemons(res.results)});
}
llamarApi();

const llamarApiImagenes = ()=>{
        fetch ('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(res => res.json())
        .then(pokemon => {pintarPokemon(pokemon)})
}

const pokedex$$ = document.querySelector("#pokedex"); //busco la ol del html con el id 'pokedex'

//div de TODAS las cartas pokemon
const allCardsPokemon$$ = document.createElement("div");
        allCardsPokemon$$.classList.add("allCardsPokemon");
        pokedex$$.appendChild(allCardsPokemon$$);

const pintarPokemons = (allPokemon)=> {
        //pokedex$$.innerHTML = ""; //para borrar los pokemons al llamarlos y que quede solo uno.
        for (const pokemon of allPokemon) {
                llamarApiImagenes();
        id++;
        };
}

const pintarPokemon =(pokemon)=>{
        //para cada pokemon creamos una carta con su id, img, nombre, y 
        const pokemonCard$$ = document.createElement("div");
        pokemonCard$$.classList.add("pokemonCard");

        const pokemonID$$ = document.createElement("h3");
        pokemonID$$.classList.add("pokemonID");
        pokemonID$$.textContent = pokemon.id;
//img div
        const pokemonImgDiv$$ = document.createElement("div");
        pokemonImgDiv$$.classList.add("pokemonImgDiv");
//img
        const pokemonImg$$ = document.createElement("img");
        pokemonImg$$.classList.add("img");
        pokemonImg$$.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
        console.log(pokemon)
//nombre
        const pokemonName$$ = document.createElement("h2");
        pokemonName$$.classList.add("pokemonName");
        pokemonName$$.textContent = pokemon.name;
//datos div
        const pokemonDatosDiv$$ = document.createElement("div");
        pokemonDatosDiv$$.classList.add("pokemonDatosDiv");
// datos
        const pokemonDatos$$ = document.createElement("p");
        pokemonDatos$$.classList.add("pokemonDatos");
        //pokemonDatos$$.textContent = (["Peso:"= pokemon.height]; ["Altura:"= pokemon.weight"]);     --no me pinta el peso
//añado las constantes creadas a sus respectivos.
        allCardsPokemon$$.appendChild(pokemonCard$$);
        pokemonCard$$.appendChild(pokemonID$$);
        pokemonCard$$.appendChild(pokemonImgDiv$$);
        pokemonImgDiv$$.appendChild(pokemonImg$$);
        pokemonCard$$.appendChild(pokemonName$$);

        pokemonDatosDiv$$.appendChild(pokemonDatos$$);
        pokemonCard$$.appendChild(pokemonDatosDiv$$);
}

const input$$ = document.querySelector("input"); //busco el input en el html
const button$$ = document.querySelector("button"); //busco el button en el html

button$$.addEventListener('click', ()=> searchPokemon(input$$.value.toLowerCase()));

function searchPokemon(nombre){
        allCardsPokemon$$.innerHTML = "";
        fetch ('https://pokeapi.co/api/v2/pokemon/' + nombre)
        .then(res => res.json())
        .then(pokemon => {pintarPokemon(pokemon)})
        console.log();
}