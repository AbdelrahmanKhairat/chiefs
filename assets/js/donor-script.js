
function changeDiv(){
    const val = document.getElementById("category").value;
    const allDivs = ["clothes", "toys", "food", "medical supplies", "school supplies", "blood donations"];
            
    for(var i =0; i<allDivs.length;i++){
        document.getElementById(allDivs[i]).classList.add("hide");
    }

    document.getElementById(val).classList.remove("hide");
}