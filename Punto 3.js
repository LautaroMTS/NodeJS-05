function contarCiclos(cuadrantes) {
    let ciclos = ['N', 'E', 'S', 'O'];
    let contador = 0;
    let indice = 0;

    for (let i = 0; i < cuadrantes.length; i++) {
        if (cuadrantes[i] === ciclos[indice]) {
            indice++;
            if (indice === 4) {
                contador++;
                indice = 0;
            }
        } else {
            indice = 0;
        }
    }
    return contador;
}

let senales = "N E S O N E S O N E S O";
let cuadrantes = senales.split(' ');
let numCiclos = contarCiclos(cuadrantes);
console.log(`Número de ciclos: ${numCiclos}`);
