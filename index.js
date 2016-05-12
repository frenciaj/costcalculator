// Any time an element with the class of "tagline" is clicked
$("#calculo").click(function() {
    alert("jQuery works!");
});


function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("costoproducto").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x)) {
        text = "Entrada Invalida";
    } 
    document.getElementById("validacioncosto").innerHTML = text;
}