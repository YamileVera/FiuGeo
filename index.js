document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("ladocuadrado").value

    document.getElementById("respuesta1").innerHTML =(`El área del cuadro es : ${lado* lado}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("ladorectangular").value
    var num = document.getElementById("alturarectangular").value
    document.getElementById("respuesta2").innerHTML =(`El área del rectangulo es: ${base*altura}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("radiocircular").value

    document.getElementById("respuesta3").innerHTML =(`El área del círculo es ${Math.PI * Math.pow(radio,2)}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("ladotriangular").value
    var num = document.getElementById("alturatriangular").value
    document.getElementById("respuesta4").innerHTML =(`El área del triangulo es: ${base*altura/2}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("diagonalrombo1").value
    var num = document.getElementById("diagonalrombo2").value
    document.getElementById("respuesta5").innerHTML =(`El área del rombo es: ${base*altura/2}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("basetrapecio").value
    var num = document.getElementById("alturatrapecio").value
    document.getElementById("respuesta6").innerHTML =(`El área del trapecio es: ${base*altura/2}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("perimetrohexagonal").value
    var num = document.getElementById("apotemahexagonal").value
    document.getElementById("respuesta7").innerHTML =(`El área del hexágono es: ${base*altura/2}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("baseparalelogramo").value
    var num = document.getElementById("alturaparalelogramo").value
    document.getElementById("respuesta8").innerHTML =(`El área del paralelogramo es: ${base*altura}`)
})

document.getElementById("boton").addEventListener("click", 
function(){
    var num = document.getElementById("perimetropentagono").value
    var num = document.getElementById("alturapentagono").value
    document.getElementById("respuesta9").innerHTML =(`El área del Pentágono es: ${base*altura/2}`)
})

let figure = prompt("Ingresa que figura es:")

let base; 
let altura;
let radio;
let lado;
let area

switch(figure){
    case "Círculo" , "circulo":
        radio =prompt(`¿Cuánto de radio tienes?`)
        //math.pow()-->crear la potencia y el pi
        //document.write(`El área del círculo es ${Math.PI * Math.pow(radio,2)}`)
    break
    case "Cuadrado" , "cuadrado":
        lado =prompt(`¿cual es su lado?`);
        //document.write(`El área del cuadro es : ${lado* lado}`)
    break
    case "Triángulo" , "trinagulo":
            base =prompt(`Ingresar la base del triangulo`)
            altura= prompt(`Ingresar la altura del triangulo`)
            //document.write(`El área del triangulo es: ${base*altura/2}`)
    break
    case "Rectángulo" ,"rectangulo" :
            base =prompt(`Ingresar la base del rectángulo`)
            altura= prompt(`Ingresar la altura del rectángulo`)
            //document.write(`El área del rectangulo es: ${base*altura}`)
    break
    case "Rombo" ,"rombo" :
        base =prompt(`Ingresar el diagonal mayor del rombo`)
        altura= prompt(`Ingresar la diagonal menor  del rombo`)
        //document.write(`El área del rombo es: ${base*altura/2}`)
    break
    case "Pentágono" ,"pentágono" :
        base =prompt(`Ingresar el perimetro  del pentágono`)
        altura= prompt(`Ingresar el apotema del pentágono`)
        //document.write(`El área del Pentágono es: ${base*altura/2}`)
    break
    case "Hexágono" ,"hexagono" :
        base =prompt(`Ingresar el perimetro  del hexágono`)
        altura= prompt(`Ingresar el apotema del hexágono`)
        //document.write(`El área del hexágono es: ${base*altura/2}`)
    break
    case "Trapecio" ,"trapecio" :
        base =prompt(`Ingresar la base del trapecio`)
        altura= prompt(`Ingresar la altura del trapecio`)
        document.write(`El área del trapecio es: ${base*altura/2}`)
    break
    case "Paralelogramo" ,"paralelogramo" :
        base =prompt(`Ingresar la base del paralelogramo`)
        altura= prompt(`Ingresar la altura del paralelogramo`)
        //document.write(`El área del paralelogramo es: ${base*altura}`)
    break

    default:
        document.write("No escribio correctamente el nombre de la figura geometrica")
}
