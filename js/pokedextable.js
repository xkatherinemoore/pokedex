/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/16/2023
FINAL PROJECT
*/

/* This code was used to initially create the pokedex.html table data. However, to allow for better page loading, the HTML rendered with this code was copied to the pokedex.html file. This script is no longer loaded on any page */

function renderTable() {
    let tbody = document.querySelector("#pokedex tbody");
    
    pokedex.forEach( (pokemon) => {
        let tr = document.createElement("tr");
        let td_img = document.createElement("td");
        let td_num = document.createElement("td");
        let td_name = document.createElement("td");
        let td_type = document.createElement("td");
        let td_version = document.createElement("td")
        let td_caught = document.createElement("td");
        let td_seeMore = document.createElement("td");

        //add pokemon image
        td_img.innerHTML = `<img src="${pokemon.imageURL}" alt="" class="pokeImg">`;
        tr.appendChild(td_img);
        //add pokemon number
        td_num.textContent = pokemon.number;
        tr.appendChild(td_num);
        //add pokemon name
        td_name.textContent = pokemon.name;
        tr.appendChild(td_name);
        //add pokemon type (iterate through type array)
        for (let i = 0; i < pokemon["type"].length; i++) {
            let span = document.createElement("span");
            span.setAttribute("class", "type type-" + pokemon.type[i]);
            span.textContent = pokemon.type[i];
            td_type.appendChild(span);
        }
        tr.appendChild(td_type);
        
        //add pokemon version availability (array contains booleans for version)
        function addVersion(version) {
            let span = document.createElement("span");
            span.setAttribute("class", "version version-" + version)
            span.textContent = version;
            td_version.appendChild(span);
        }
        //create span element if available in version
        if (pokemon.version[0]) {
            addVersion("red");
        }
        if (pokemon.version[1]) {
            addVersion("blue");
        }
        if (pokemon.version[2]) {
            addVersion("yellow")
        }
        if (pokemon.version[3]) {
            addVersion("leafgreen")
        }
        if (pokemon.version[3]) {
            addVersion("firered")
        }
        if (pokemon.version[3]) {
            addVersion("lgpikachu")
        }
        if (pokemon.version[3]) {
            addVersion("lgeevee")
        }

        tr.appendChild(td_version);
        
        //add caught data based on pokedex
        let pokeballURL;
        if(pokemon.isCaught === true) {
            pokeballURL = "./images/pokeball_icon_color.svg";
        } else {
            pokeballURL = "./images/pokeball_icon_gs.svg";
        }
        
        td_caught.innerHTML = `<img src="${pokeballURL}" alt="" class="caughtPic" width="35" height="35">`;
        tr.appendChild(td_caught);

        //Add see more toggle
        td_seeMore.innerHTML = '<i class="bi bi-caret-down-fill show-more"></i>';
        tr.appendChild(td_seeMore);

        //add row to table
        tbody.appendChild(tr);
    })
}

document.onload(renderTable());