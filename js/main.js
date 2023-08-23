/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/16/2023
FINAL PROJECT
*/

//Global variables
let totalPokemon = 151;
let requireTrade;
let noTradeRequired;
let currentPokemonCount = 0;

//Close Button/Display button show/hide for About Section (index.html)
$(document).ready(function () {
    $('#show-about').hide(); //Hides the reload button upon page load

    $('#close-about').click((e) => {
        e.preventDefault();
        $('#about').hide();
        $('#show-about').show();
    });

    $('#open-about').click((e) => {
        e.preventDefault();
        $('#show-about').hide();
        $('#about').show();
    })

});

//When Game Version is selected, various data is updated on page (index.html)
document.querySelector('#game-version').addEventListener('change', (e) => {
    e.preventDefault();
    let version = e.target.value;

    //Adds an image of the game version to the document
    let imgDiv = document.querySelector('#game-photo');
    let imgURL = `images/game-versions/${version}.png`;
    let altText = `The box for the game Pokemon ${version}.`

    imgDiv.innerHTML = ""; //clear possible existing photo
    imgDiv.innerHTML = `<img src="${imgURL}" alt="${altText}">`; //Add in new photo to doc

    //Outputs total pokemon in game and total that require trade based on game version
    noTradeRequired = pokemonNamesByGameVersion[version].length;
    tradeRequired = totalPokemon - noTradeRequired;

    document.querySelector('#total-count').textContent = currentPokemonCount + " / " + totalPokemon;
    document.querySelector('#no-trade-count').textContent = currentPokemonCount + " / " + noTradeRequired;
    document.querySelector('#trade-count').textContent = currentPokemonCount + " / " + tradeRequired;

});

//Adds image when badge item is clicked (index.html)
$(document).ready(function () {
    $('.badge').click((e) => {
        e.preventDefault();

        //Checks if image is already displayed. If so, it removes it and exits function. (i.e. delete option)
        if (e.currentTarget.firstChild.nodeName === "IMG") {
            e.currentTarget.firstChild.remove();
            return;
        }


        let badge = e.currentTarget.id; //div id of clicked element
        let imgURL; //holds path to image

        switch (badge) {
            case 'badge-1':
                imgURL = "images/gym-badges/1_Boulder_Badge.png";
                break;
            case 'badge-2':
                imgURL = "images/gym-badges/2_Cascade_Badge.png";
                break;
            case 'badge-3':
                imgURL = "images/gym-badges/3_Thunder_Badge.png";
                break;
            case 'badge-4':
                imgURL = "images/gym-badges/4_Rainbow_Badge.png";
                break;
            case 'badge-5':
                imgURL = "images/gym-badges/5_Soul_Badge.png";
                break;
            case 'badge-6':
                imgURL = "images/gym-badges/6_Marsh_Badge.png";
                break;
            case 'badge-7':
                imgURL = "images/gym-badges/7_Volcano_Badge.png";
                break;
            case 'badge-8':
                imgURL = "images/gym-badges/8_Earth_Badge.png";
                break;
        }
        
        let img = document.createElement("img");
        img.setAttribute("src", imgURL);
        img.setAttribute("alt", "");
        e.currentTarget.insertBefore(img, e.currentTarget.firstChild); //Adds img element to clicked div
    })
});

//Add Pokemon to Current Pokedex Table (index.html)
let form = document.querySelector('#add-pokemon')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let pokemon = e.target.pokemon.value; //Value is string "### - PokemonName"
    pokemon = pokemon.split(" "); //Makes value an array ["###","-","PokemonName"]
    pokemon[0] = Number.parseInt(pokemon[0]); //Number (###) used for lookup in pokedex array
    
    let index = pokedex.findIndex((p) => {  //Returns the index - data validation in case pokedex array was not sorted by pokemon.number
        return p.number === pokemon[0];
    }); 
    pokedex[index].isCaught = true; 
    let pokemonObj = pokedex[index]; 

    let tbody = document.querySelector('#current-pokedex tbody');
    let tr = document.createElement("tr");
    let td_img = document.createElement("td");
    let td_num = document.createElement("td");
    let td_name = document.createElement("td");
    let td_type = document.createElement("td");
    let td_del = document.createElement("td");

    //Add image to tr
    let img = document.createElement("img");
    img.setAttribute('src', pokemonObj.imageURL);
    img.setAttribute('alt', "");
    img.setAttribute('class', "pokeImg");
    td_img.appendChild(img);
    tr.appendChild(td_img);

    //Add num to tr
    td_num.textContent = pokemonObj.number;
    tr.appendChild(td_num);

    //Add name to tr
    td_name.textContent = pokemonObj.name;
    tr.appendChild(td_name);

    //Add type to tr
    for (let i = 0; i < pokemonObj["type"].length; i++) {
        let span = document.createElement("span");
        span.setAttribute('class', "type type-" + pokemonObj.type[i]);
        span.textContent = pokemonObj.type[i];
        td_type.appendChild(span);
    }
    tr.appendChild(td_type);

    //Add delete button to tr
    let delButton = document.createElement("button");
    delButton.setAttribute('class', "delButton");
    delButton.innerHTML = '<img src="images/trash3.svg" width="25" height="25">';
    td_del.appendChild(delButton);
    tr.appendChild(td_del);
    
    //Add tr to tbody (HTML)
    tbody.appendChild(tr);

    //Clear form
    form.reset();
})