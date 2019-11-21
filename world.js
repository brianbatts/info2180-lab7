"use strict";

document.getElementById('lookup').addEventListener('click', countrySearch);


function countrySearch(){
    
    var query = document.getElementById("country").value;
    var httprequest = new XMLHttpRequest();
    
    httprequest.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("result").innerHTML = this.responseText;
            alert(this.responseText.replace(/<\/?[^>]+(>|$)/g, " "));  
        }
    };
    
    var url = "world.php?country="+ query;
    
    httprequest.open("GET",url,true);
    httprequest.send("");
}