function ready() {

// Any time an element with the class of "tagline" is clicked
var option;
var monto;
var radio;
var celOption = " <div class='row' id='option2'> <div class='col-xs-6'>Por favor ingrese el costo de cada celular en dolares: </div><div class='col-xs-6'><form class='form-inline'><div class='form-group'><label class='sr-only' for='exampleInputAmount'>Amount (in dollars)</label><div class='input-group'><div class='input-group-addon'>$</div><input type='text' class='form-control' id='costoproducto' placeholder='Monto'><div class='input-group-addon'>.00</div></div></div><div id='validacioncosto'></div></form></div></div><hr> " ;
var measureOption = "<div class='row' id='option3'><div class='col-xs-12 col-md-12'>Por favor seleccione la unidad de medida:</div><br><br><form id='radio'><div class='.col-xs-6 .col-sm-4'><input type='radio'  name='unidad' aria-label='cm' value='Centimetros'> Centimetros</input></div><div class='.col-xs-6 .col-sm-4'><input type='radio' name='unidad' aria-label='Inch' value='Pulgadas'> Pulgadas</input></form></div><div class='.col-xs-6 .col-sm-4'><button id='confmedida' class='btn btn-warning'>Confirmar</button></div></div><hr><div id='2ndstep'></div>";
var botonOption = "<div class='row' id='option6'><div class='col-xs-6' id='resultado'></div><div class='col-xs-6'><button type='button' id='calculo' class='btn btn-warning'>Calcular</button></div></div><div class='row' id='result'></div> ";
var inchOption = '<div class="row" id="option4"><div class="col-xs-12 col-md-12">Por favor ingrese las medidas en pulgadas:</div><br><br><div class="col-xs-6 col-sm-4"><form><input type="text" name="medidas" /> Alto x</div><div class="col-xs-6 col-sm-4"><input type="text" name="medidas" /> Ancho x</div><div class="col-xs-6 col-sm-4"><input type="text" name="medidas" /> Largo</form></div></div><hr>';
var cmOption = '<div class="row" id="option4"><div class="col-xs-12 col-md-12">Por favor ingrese las medidas en centimetros:</div><br><br><div class="col-xs-6 col-sm-4"><form><input type="text" name="medidas" /> Alto x</div><div class="col-xs-6 col-sm-4"><input type="text" name="medidas" /> Ancho x</div><div class="col-xs-6 col-sm-4"><input type="text" name="medidas" /> Largo</form></div></div><hr>';

$("select").change(function() {
    
 option = $("#opcion").val();

 if(option == "celulares") {
    $(".insert").html(celOption + botonOption)
} else if(option == "electronica" || option == "juguetes" || option == "repuestos" || option == "otro") {
   $(".insert").html(measureOption);
  
}
 });

$("#costoproducto").keydown(function() {
 monto = this.value;
});


$("button").click(function(){
    alert("hola");
    console.log("prueba");
var radio = $("#radio input[type='radio']:checked").val();

     
  //   if(radio == "Centimetros") {
  //       $("#2ndstep").html(cmOption);
  //   } else if(radio == "Pulgadas") {
   //      $("#2ndstep").html(inchOption);
     //}
});


$("#calculo").click(function() {
    alert(monto);
});


//function myFunction() {
 //   var x, text;

    // Get the value of the input field with id="numb"
//    x = document.getElementById("costoproducto").value;

    // If x is Not a Number or less than one or greater than 10
 //   if (isNaN(x)) {
//        text = "Entrada Invalida";
//    } 
 //   document.getElementById("validacioncosto").innerHTML = text;
//}
}
 $(document).on('ready page:load', ready);
 
