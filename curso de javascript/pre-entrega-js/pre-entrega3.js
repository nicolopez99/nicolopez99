class Prestamo {
    constructor(monto, cuotas, cliente, dni) {
      this.monto = parseFloat(monto);
      this.cuotas = parseInt(cuotas);
      this.cliente = cliente;
      this.dni = dni;
      this.resultadoDelPrestamo = this.calcularPrestamo();
    }
  
    calcularPrestamo() {
      let prestamo_final = 0;
      if (this.cuotas === 1 && this.monto > 0) {
        return this.monto;
      } else if (this.cuotas === 12 && this.monto > 0) {
        prestamo_final = this.monto + (this.monto * 0.55);
        return prestamo_final;
      } else if (this.cuotas === 24 && this.monto > 0) {
        prestamo_final = this.monto + (this.monto * 0.90);
        return prestamo_final;
      } else if (this.cuotas === 32 && this.monto > 0) {
        prestamo_final = this.monto + (this.monto * 1.6);
        return prestamo_final;
      } else if (this.cuotas === 72 && this.monto > 0) {
        prestamo_final = this.monto + (this.monto * 3.1);
        return prestamo_final;
      }
    }
  
    descuentoCliente() {
      if (this.cliente === "si") {
        return this.calcularPrestamo() - (this.calcularPrestamo() * 0.07);
      } else {
        return this.calcularPrestamo();
      }
    }
  
    precioDeCuotas() {
      return this.calcularPrestamo() / this.cuotas;
    }
  }
  
  // Array para almacenar todos los préstamos
  let prestamos = [];
  
  console.log("Bienvenidos a BBVA");
  let monto = 0;
  while (monto !== "Fin") {
    monto = prompt("Ingrese el monto del préstamo que quiere solicitar o Fin");
  
    if (monto.toLowerCase() !== "fin") {
      let cuotas = prompt("Ingrese cantidad de cuotas Para cancelación: 1, 12, 24, 32 y 72");
      let cliente = prompt("¿Eres Cliente en BBVA?: Si o No");
      let dni = prompt("Ingrese su número de DNI");
  
      // Crear un objeto Prestamo
      let nuevoPrestamo = new Prestamo(monto, cuotas, cliente, dni);
  
      // Agregar el nuevo préstamo al array de prestamos
      prestamos.push(nuevoPrestamo);
  
      console.log("Tu préstamo es de $:", nuevoPrestamo.monto);
      console.log("Cuotas para cancelación:", nuevoPrestamo.cuotas);
      console.log("Número de DNI:", dni);
  
      // Calcular descuento y precio de cuotas
      let resultado_descuento = nuevoPrestamo.descuentoCliente();
      let cuotas_valor = nuevoPrestamo.precioDeCuotas();
      let cuotas_valor_descuentos = nuevoPrestamo.precioDeCuotas() - (nuevoPrestamo.precioDeCuotas() * 0.07);
  
      // Mostrar resultados
      console.log("Importe total a abonar $:", nuevoPrestamo.calcularPrestamo());
      console.log("Cantidas de cuotas:", cuotas);
      console.log("De $:", cuotas_valor);
  
      if (cliente === "si") {
        console.log("Tienes un Descuento del 0.07% por ser cliente");
        console.log("Descuento Por ser cliente BBVA pagas $:", resultado_descuento);
      } else {
        console.log("No eres cliente? Hacete cliente para tener descuentos y beneficios");
      }
  
      console.log("Cuotas para cancelación:", cuotas);
      console.log("De $:", cuotas_valor_descuentos);
      console.log("Para más ayuda, llamar al 0800-800");
    }
  }
  
  console.log("Resultados de los préstamos por DNI:");
  let dniFiltrado = prompt("Ingrese el número de DNI para verificar los préstamos:");
  
  // Filtrar los préstamos por DNI usando el método filter
  let prestamosFiltrados = prestamos.filter(prestamo => prestamo.dni === dniFiltrado);
  
  if (prestamosFiltrados.length > 0) {
    console.log("Tiene préstamos registrados.");
    console.log("Préstamos realizados:");
  
    prestamosFiltrados.forEach((prestamo, index) => {
      console.log("Préstamo #" + (index + 1));
      console.log("Monto: $" + prestamo.monto);
      console.log("Cuotas: " + prestamo.cuotas);
  
    });
  } else {
    console.log("No tiene préstamos registrados.");
  }
  