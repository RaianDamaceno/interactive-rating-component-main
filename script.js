function addClass(value) {
    var d = document.getElementById(value);
    d.id = "selected";
}


function setValue() {   
    var selectedRating = document.getElementById('selected').value;

    const span = document.getElementById('rating');
    span.textContent = `You selected ${selectedRating} out of 5`;
    
    document.getElementsByClassName("card-container")[0].style.display = "none";
    document.getElementsByClassName("card-container-end")[0].style.display = "flex";
}