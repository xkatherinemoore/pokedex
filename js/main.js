/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/16/2023
FINAL PROJECT
*/

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