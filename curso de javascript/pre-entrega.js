function calcular_prestamo(monto, cuotas) {
    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);
    let prestamo_final = 0;
    if (cuotas == 1 && monto > 0) {
        return monto
    }
    else if (cuotas == 12 && monto > 0) {
        prestamos_final = monto + (monto * 0.55);
        return prestamos_final
    }
    else if (cuotas == 24 && monto > 0) {
        prestamos_final = monto + (monto * 0.90);
        return prestamos_final
    }
    else if (cuotas == 32 && monto > 0) {
        prestamos_final = monto + (monto * 1.6);
        return prestamos_final
    }
    else if (cuotas == 72 && monto > 0) {
        prestamos_final = monto + (monto * 3.1);
        return prestamos_final
    }
}


function descuento_cliente(prestamo, cliente) {

    //si se dice si //

    if (cliente == "si") {
        let descuento_cliente = prestamo - (prestamo * 0.07); //descuento//

        return descuento_cliente
    }

    //si se dice no //


    else if (cliente == "no") {
        let descuento_cliente = prestamo
        console.log("No eres cliente hacete cliente para tener descuentos y beneficios");
        return descuento_cliente
    }


    //cuotas normales//

}
function precio_de_cuotas(prestamo, cuotas) {

    let precio_de_cuotas = prestamo / cuotas
    return precio_de_cuotas

}

//cuotas con descuentos//

function precio_de_cuotas_con_descuentos(resultado_descuento, cuotas) {

    let precio_de_cuotas_con_descuentos = resultado_descuento / cuotas
    return precio_de_cuotas_con_descuentos
}


//PRESTAMO//
console.log("Bienvenidos a BBVA");
let monto = 0;
while (monto !== "Fin") {

    monto = prompt("Ingrese el monto del préstamo que quiere solicitar o Fin");

    if (monto !== "fin") {
        let cuotas = prompt("Ingrese cantidad de cuotas Para cancelación: 1, 12, 24, 32 y 72");
        let cliente = prompt("¿Eres Cliente en BBVA?: Si o No");
        let resultado_del_prestamo = calcular_prestamo(monto, cuotas);

        console.log("Tu préstamo es de $:", monto);
        console.log("Cuotas para cancelación:", cuotas);

        //si se dice que si//

        if (cliente === "si") {
            let resultado_descuento = descuento_cliente(resultado_del_prestamo, cliente);
            let cuotas_valor = precio_de_cuotas(resultado_del_prestamo, cuotas);
            let cuotas_valor_descuentos = precio_de_cuotas_con_descuentos(resultado_descuento, cuotas);


            console.log("Importe total a abonar $:", resultado_del_prestamo);
            console.log("cantidas de cuotas:", cuotas);
            ; console.log("De $:", cuotas_valor);
            console.log("Tienes un Descuento del 0.07% por ser cliente ");
            console.log("Descuento Por ser cliente BBVA pagas $:", resultado_descuento);
            console.log("Cuotas para cancelación:", cuotas);
            console.log("De $:", cuotas_valor_descuentos);
            console.log("Para mas ayuda llamar al 0800-800")

            //si se dice que no//

        } else if (cliente === "no") {
            let cuotas_valor = precio_de_cuotas(resultado_del_prestamo, cuotas);
            console.log("Importe total a abonar $:", resultado_del_prestamo);
            console.log("cantidas de cuotas:", cuotas);
            console.log("De $:", cuotas_valor);
            console.log("No eres cliente? hacete cliente para tener descuentos y beneficios");
            console.log("Para mas ayuda llamar al 0800-800")

        }
    }

    // si se dice fin//
    else {
        console.log("Muchas Gracias por elegir BBVA");
    }
}
