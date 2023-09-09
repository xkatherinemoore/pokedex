/* 
    POKEDEX.HTML
*/

//W3Schools sort table function with edits - https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    let table = document.getElementById("pokedex");
    let switching = true;
    let sortDirection = "asc";
    let switchCount = 0;
    let shouldSwitch, value1, value2;

    //While loop 
    while (switching) {
        switching = false;
        let rows = table.rows;
        //Iterates through each row and compares values
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            let row1 = rows[i].getElementsByTagName("td")[n]
            let row2 = rows[i + 1].getElementsByTagName("td")[n]
            
            //How to handle sort (number, string)
            switch (n) {
                case 1:
                    value1 = parseInt(row1.innerHTML);
                    value2 = parseInt(row2.innerHTML);
                    break;
                case 2: 
                    value1 = row1.innerHTML.toLowerCase();
                    value2 = row2.innerHTML.toLowerCase();
                    break;
                case 3:
                    value1 = row1.innerHTML.toLowerCase();
                    value2 = row2.innerHTML.toLowerCase();
                    break;
            }
            
            //String sort
            if (sortDirection === "asc") {
                if (value1 > value2) {
                    shouldSwitch = true;
                    break;
                }
            } else if (sortDirection === "desc") {
                if (value1 < value2) {
                    shouldSwitch = true;
                    break;
                }
            }

        }
        //Switches rows if needed; if rows are sorted in asc order, change to desc
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && sortDirection === "asc") {
                sortDirection = "desc";
                switching = true;
            }
        }
    }
}

//Sort table by header when clicked
$(document).ready(function () {
    $("#pokedex th").click((e) => {
        e.preventDefault();
        let th = e.target;

        switch (th.textContent) {
            case "No.":
                sortTable(1);
                break;
            case "Name":
                sortTable(2);
                break;
            case "Type":
                sortTable(3);
                break;
            default:
                break;
        }

    })
});

//Search table
$(document).ready(function () {
    $("#clear-search").hide();

    $("#pokedex-search").on("keyup", function() {
        $("#clear-search").show();

        let value = $(this).val().toLowerCase();
        $("#pokedex tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#clear-search").click(() => {
        $("#pokedex-search").val("");
        $("#pokedex tr").show();
        $(this).hide();
    });
});


//Update Caught? picture when clicked
$(document).ready(function () {
    $(".caughtPic").click((e) => {
        e.preventDefault();
        
        let notCaughtURL = "./images/pokeball_icon_gs.svg";
        let caughtURL = "./images/pokeball_icon_color.svg";
        let img = e.target
        let src = img.getAttribute("src")
        if (src == notCaughtURL) {
            img.setAttribute("src", caughtURL);
        }
        if (src == caughtURL) {
            img.setAttribute("src", notCaughtURL);
        }
    })
});

//Click to see more about pokemon with API Data - NOT COMPLETED!
/* $(document).ready(function () {
    $(".show-more").click((e) => {
        e.preventDefault();

        let tr = e.target.parentElement.parentElement;
        let pokedexNumber = tr.children[1].textContent;
        
        //API Functions (from apidata.js)
        getPokemonData(pokedexNumber);

        //Create HTML elements to display
        
    })
}); */