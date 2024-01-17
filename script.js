//Esto agrega a la pantalla el valor del boton que presionemos en la calculadora

function Agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Esta accion vacia la pantalla

function Borrar() {
    document.getElementById('pantalla').value = " "
}

//Esta accion realiza los calculos correspondientes de la calculadora.

function Calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}