/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/16/2023
FINAL PROJECT
*/

//Global variables
let totalPokemon = 150;
let count;

//Close Button/Display button show/hide for About Section on index.html
$(document).ready(function(){
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

});