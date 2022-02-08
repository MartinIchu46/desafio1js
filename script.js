
var numero= parseInt(prompt("Ingrese un valor"));

var contador = 0
for(let i = 0; i< numero; i++) {
    contador = contador + i

}
if (contador%2 == 0) {
    
    console.log("El numero " + contador + " es par")
} else {
    console.log("Es impar")
}