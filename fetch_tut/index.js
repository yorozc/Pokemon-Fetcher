/*(fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/
//pass url into the fetch function (will resolve or reject)

/*create a table of facts using the json data
- show abilities
- display cry audio
- show which games they appear in (game_indices)
- show height
- show id
- show moves
- display all sprites
- display stats with their names
- display type
- display weight




create the box and button pop up and then switch to the table 
have a scrolling bar of pokemon
*/

let clicked = false;
fetchData();
async function fetchData(){
    clicked = true;
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);


        // accesses sprite
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
    
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //accesses one ability
        const pokemonAbilities = data.abilities;
        displayAbilities(pokemonAbilities);

        //create function that displays all available abilities
        function displayAbilities(pokemonAbilities){
            const ul = document.getElementById("pokemonAbilities");

            if(ul){
                ul.innerHTML = '';
            }

            //add new li for each ability
            for(let i=0; i < pokemonAbilities.length; i++){
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(pokemonAbilities[i].ability.name))
                ul.appendChild(li)
            }

            
        }
            

        //access cry files
        const pokemonCry = data.cries.latest;
        const audioElement = document.getElementById("pokemonCries");

        audioElement.src = pokemonCry;
        

        //access id
        const pokemonID = data.id;
        const idElement = document.getElementById("pokemonID");

        idElement.textContent = pokemonID;
        idElement.style.display = "block";
        
        //access weight
        const pokemonWeight = data.weight;
        const weightElement = document.getElementById("pokemonWeight");

        weightElement.textContent = pokemonWeight;
        weightElement.style.display = "block";


        if (clicked == true){
            const pokeTable = document.getElementById("poke-table");
            pokeTable.style.display = "block";
        }

    }
    catch(error){
        console.error(error);
    }
}