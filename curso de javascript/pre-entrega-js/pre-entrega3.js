let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let tieneOtrosPrestamos = prestamos.length > 0;

document.getElementById("startButton").addEventListener("click", function () {
});

document.getElementById("loanForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const monto = document.getElementById("monto").value;
    const cuotas = document.getElementById("cuotas").value;
    const cliente = document.getElementById("cliente").value;
    const dni = document.getElementById("dni").value;

    let nuevoPrestamo = new Prestamo(monto, cuotas, cliente, dni);

    prestamos.push(nuevoPrestamo);

    localStorage.setItem("prestamos", JSON.stringify(prestamos));

    tieneOtrosPrestamos = prestamos.length > 1;

    mostrarDetallesPrestamos();
});

document.getElementById("searchButton").addEventListener("click", function () {
    const dniFiltrado = document.getElementById("dniSearch").value;

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
    
    mostrarDetallesPrestamos();
});

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

function mostrarDetallesPrestamos() {
    const prestamoDetails = document.getElementById("prestamoDetails");
    
    if (prestamos.length === 0) {
        prestamoDetails.innerHTML = "No tiene préstamos registrados.";
    } else {
        let detallesHTML = "<h2>Detalles de Préstamos</h2>";
        detallesHTML += "<ul>";

        prestamos.forEach((prestamo, index) => {
            detallesHTML += `<li>Préstamo #${index + 1} - Monto: $${prestamo.monto}, Cuotas: ${prestamo.cuotas}, DNI: ${prestamo.dni}</li>`;
        });

        detallesHTML += "</ul>";

        if (tieneOtrosPrestamos) {
            detallesHTML += "<p>Ya tiene otros préstamos registrados.</p>";
        }

        prestamoDetails.innerHTML = detallesHTML;
    }
}
