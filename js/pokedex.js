/* 
    POKEDEX.HTML
*/
//W3Schools sort table function with edits - https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    let table = document.getElementById("pokedex");
    let switching = true;
    let sortDirection = "asc";
    let switchCount = 0;

    //While loop 
    while (switching) {
        switching = false;
        let rows = table.rows;
        //Iterates through each row and compares values
        for (i = 1; i < (rows.length - 1); i++) {
            let shouldSwitch = false;
            let row1 = rows[i].getElementsByTagName("td")[n];
            let row2 = rows[i + 1].getElementsByTagName("td")[n];
            //Determine if rows need to be switched; if yes, break for loop and make switch
            if (sortDirection === "asc") {
                if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (sortDirection === "desc") {
                if (row1.innerHTML.toLowerCase() < row2.innerHTML.toLowerCase()) {
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

$(document).ready(function () {
    $("#pokedex th").click((e) => {
        e.preventDefault();
        console.log(e);
    })
})