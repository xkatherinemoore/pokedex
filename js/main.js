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

//Close Button/Display button show/hide for About Section on index.html
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

//When Game Version is selected, various data is updated on page
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

//Adds image when badge item is clicked
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