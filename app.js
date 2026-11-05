function validarCedula() {

    const cedula =
        document
        .getElementById("cedula")
        .value
        .trim();

    const resultado =
        document.getElementById("resultado");

    if (!/^\d{11}$/.test(cedula)) {

        resultado.textContent =
            "La cédula debe contener exactamente 11 dígitos.";

        resultado.className =
            "invalida";

        return;
    }

    let suma = 0;

    for (let i = 0; i < 10; i++) {

        let numero =
            parseInt(cedula[i]);

        if (i % 2 === 0) {

            numero *= 1;

        } else {

            numero *= 2;

            if (numero > 9) {
                numero -= 9;
            }
        }

        suma += numero;
    }

    let digitoVerificador =
        (10 - (suma % 10)) % 10;

    if (
        digitoVerificador ===
        parseInt(cedula[10])
    ) {

        resultado.textContent =
            "✅ Cédula válida";

        resultado.className =
            "valida";

    } else {

        resultado.textContent =
            "❌ Cédula inválida";

        resultado.className =
            "invalida";
    }
}
