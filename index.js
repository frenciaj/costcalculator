function ready() {

    // Any time an element with the class of "tagline" is clicked
    var option;
    var monto;
    var radio;
    var gralOption = " <div class='row' id='option2'> <div class='col-xs-6'>Por favor ingrese el costo de su o sus productos en dolares: </div><div class='col-xs-6'><form class='form-inline'><div class='form-group'><label class='sr-only' for='exampleInputAmount'>Amount (in dollars)</label><div class='input-group'><div class='input-group-addon'>$</div><input type='text' class='form-control' id='costoproducto' placeholder='Monto'><div class='input-group-addon'>.00</div></div></div><div id='validacioncosto'></div></form></div></div><hr> ";
    var celOption = " <div class='row' id='option2'> <div class='col-xs-6'>Por favor ingrese el costo de cada celular en dolares: </div><div class='col-xs-6'><form class='form-inline'><div class='form-group'><label class='sr-only' for='exampleInputAmount'>Amount (in dollars)</label><div class='input-group'><div class='input-group-addon'>$</div><input type='text' class='form-control' id='costoproducto' placeholder='Monto'><div class='input-group-addon'>.00</div></div></div><div id='validacioncosto'></div></form></div></div><hr> ";
    var measureOption = "<div class='row' id='option3'><div class='col-xs-12 col-md-12'>Por favor seleccione la unidad de medida:</div><br><br><form id='radio'><div class='col-xs-6'><input type='radio'  name='unidad' aria-label='cm' value='Centimetros'> Centimetros</input></div><div class='col-xs-6'><input type='radio' name='unidad' aria-label='Inch' value='Pulgadas'> Pulgadas</input></form></div></div><hr><div id='2ndstep'></div>";
    var botonOption = "<div class='row' id='option6'><div class='col-xs-6' id='resultado'></div><div class='col-xs-6'><button type='button' id='calculo' class='btn btn-warning'>Calcular</button></div></div><div class='row' id='result'></div> ";
    var inchOption = '<div class="row" id="optioninch"><div class="col-xs-12 col-md-12">Por favor ingrese las medidas en pulgadas:</div><br><br><div class="col-xs-6 col-sm-3"><form><input type="text" id="alto" name="medidas" /> Alto x</div><div class="col-xs-6 col-sm-3"><input type="text" id="ancho" name="medidas" /> Ancho x</div><div class="col-xs-6 col-sm-3"><input type="text" id="largo" name="medidas" /> Largo</form></div><div class="col-xs-6 col-sm-3"><button type="button" id="calculocm" class="btn btn-warning">Calcular</button></div></div><hr>';
    var cmOption = '<div class="row" id="optioncm"><div class="col-xs-12 col-md-12">Por favor ingrese las medidas en centimetros:</div><br><br><div class="col-xs-6 col-sm-3"><form><input type="text" id="alto" name="medidas" /> Alto x</div><div class="col-xs-6 col-sm-3"><input type="text" id="ancho" name="medidas" /> Ancho x</div><div class="col-xs-6 col-sm-3"><input type="text" id="largo" name="medidas" /> Largo</form></div><div class="col-xs-6 col-sm-3"><button type="button" id="calculocm" class="btn btn-warning">Calcular</button></div></div><hr>';
    var precioProducto = '<div class="row" id="option5"><div class="col-xs-6">Por ultimo ingrese el valor del metro cubico:</div><div class="col-xs-6"><form class="form-inline"><div class="form-group"><label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label><div class="input-group"><div class="input-group-addon">$</div><input type="text" class="form-control" id="valormetro" placeholder="Monto"><div class="input-group-addon">.00</div></div></div></form></div></div><br><br><hr>'
    var celCosto;


    $("select").change(function() {

                option = $("#opcion").val();

                if (option == "celulares") {
                    $(".insert").html(celOption + botonOption)
                }
                else if (option == "electronica" || option == "juguetes" || option == "repuestos" || option == "otro") {
                    $(".insert").html(measureOption);

                }
                $("#costoproducto").change(function() {
                    celCosto = Number($("#costoproducto").val());

                    if (celCosto < 400) {
                        monto = "<h4>Su costo es U$S 150</h4>"
                    }
                    else if (celCosto > 401) {
                        monto = "<h4>Su costo es U$S 200</h4>"
                    };

                    $("#calculo").click(function() {
                        $("#result").html(monto)
                    });
                });


                //$("#confmedida").click(function(){
                $(":radio").click(function() {

                    var radio = $("#radio input[type='radio']:checked").val();


                    if (radio == "Centimetros") {
                        $("#2ndstep").html(cmOption);
                    }
                    else if (radio == "Pulgadas") {
                        $("#2ndstep").html(inchOption);
                    }

                    $("#calculocm").click(function() {
                        var alto = Number($("#alto").val());
                        var ancho = Number($("#ancho").val());
                        var largo = Number($("#largo").val());
                        if (radio == "Centimetros") {
                            var m3 = (alto / 100) * (ancho / 100) * (largo / 100);
                        }
                        else {
                            m3 = (((alto * ancho * largo) / 1728) / 35.314);
                        }

                        if (isNaN(m3)) {
                            $(".m3").html("<p class='error'>Por favor verifique que haya puesto la medida correcta y vuelva a intentar</p>")

                        }
                        else {
                            $(".m3").html(gralOption + precioProducto + botonOption)

                        }
                                                    console.log(m3);

                        $("#costoproducto").change(function() {
                            var costoVal = (Number($("#costoproducto").val()) * 0.20);
                            
                        $("#valormetro").change(function() { 
                            var costoM3 = (Number($("#valormetro").val()) * m3);
                        

                            $("#calculo").click(function() {
                                if (costoVal < costoM3) {
                                monto = "<h4>Su costo aproximado es U$S " + costoM3.toFixed(0) + "</h4><br><p>Muchas gracias por usar nuestra calculadora, si quiere calcular otro producto por favor haga click en el boton</p><div><button type='button' id='reload' class='btn btn-warning'>Volver a Empezar</button></div>";
                            console.log(costoM3);
                                
                            }
                            else {
                                monto = "<h4>Su costo aproximado es U$S " + costoVal.toFixed(0) + "</h4><br><p>Muchas gracias por usar nuestra calculadora, si quiere calcular otro producto por favor haga click en el boton</p><div><button type='button' id='reload' class='btn btn-warning'>Volver a Empezar</button></div>";
                                                       console.log(costoVal);

                            }
                                $("#result").html(monto)
                                $("#reload").click(function() {
                                    location.reload();
                                });
                            });
                        });
                        });
                    });

                });

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
