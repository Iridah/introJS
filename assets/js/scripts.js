//    var n1 = prompt("Ingrese el primer numero: ");
//    var n1 = parseInt(n1);
//    var n2 = prompt("ingrese el segundo numero: ");
//    var n2 = parseInt(n2);
//    document.write("La suma es: ");
//    document.write(parseInt(n1)+parseInt(n2));
//    document.write("La resta es: ");
//    document.write(parseInt(n1)-parseInt(n2));
//    document.write("La multiplicacion es: ");
//    document.write(parseInt(n1)*parseInt(n2));
//    document.write("La division es: ");
//    document.write(parseInt(n1)/parseInt(n2));

//const pi = 3.1415;
//var num;
//console.log(num);
//num = prompt("Ingrese el numero: ");
//document.write("La suma es: ");
//document.write(pi+num);
//document.write("La resta es: ");
//document.write(pi-num);
//document.write("La multiplicacion es: ");
//document.write(pi*num);
//document.write("La division es: ");
//document.write(pi/num);

//var dato = prompt("Ingrese un pato");
//document.write(typeof dato);


// PREGUNTA 2 //
var n1 = prompt("Ingrese el primer numero - distinto de 0 -: ");
var n1 = parseInt(n1);
var n2 = prompt("Ingrese el segundo numero - distinto de 0 -: ");
var n2 = parseInt(n2);
document.write("<p>La suma es: </p>");
document.write(parseInt(n1)+parseInt(n2));
document.write("<br>")
document.write("<p>La resta es: </p>");
document.write(parseInt(n1)-parseInt(n2));
document.write("<br>")
document.write("<p>La multiplicacion es: </p>");
document.write(parseInt(n1)*parseInt(n2));
document.write("<br>")
document.write("<p>La division es: </p>");
document.write(parseInt(n1)/parseInt(n2));
document.write("<br>")
document.write("<p>El modulo es: </p>");
document.write(parseInt(n1)%parseInt(n2));
document.write("<br>")
document.write("<br>")
document.write("<hr>")

// PREGUNTA 3 //
var n3 = prompt("Ingrese la temperatura en grados celsius ");
var n3 = parseInt(n3);
document.write("<p>La temperatura en grados Kelvin - o absolutos - son: </p>");
document.write(parseInt(n3)+273.15);
document.write("<br>")
document.write("<p>La temperatura en grados Farenheit son: </p>");
document.write((parseInt(n3)* 9/5)+32);
document.write("<hr>")

// PREGUNTA 4 //
// se supone, por san google, que https://www.lawebdelprogramador.com/foros/JavaScript/1788483-Ingresar-un-numero-y-que-te-indique-su-equivalente-en-anos-meses-semanas-dias.html tendria la respuesta, pero tiene html, css y js integrados.//
// finalmente, tome https://es.stackoverflow.com/questions/148127/como-conseguir-sacar-los-a%C3%B1os-meses-d%C3%ADas-entre-fechas como base para editar el codigo
var msegMinuto = 1000 * 60;
var msegHora = msegMinuto * 60;
var msegDia = msegHora * 24;

var tiempo = prompt("ingrese dias a calcular ")
var parseInt = (tiempo)

//calcular dias 
var dias = Math.floor(tiempo / msegDia)
tiempo = tiempo - (dias * msegDia)

//calcula horas
var horas = Math.floor(tiempo / msegHora)
tiempo = tiempo - (horas * msegHora)

//calcula minutos
var minutos = Math.floor(tiempo /msegMinuto)
tiempo = tiempo - (minutos * msegMinuto)

document.write("<p>La cifra ingresada equivale a " + dias + " días, " + horas +" horas, y "+  minutos + "minutos.</p>");

document.write("<br>")
document.write("<br>")
document.write("<hr>")

// PREGUNTA 5 //
var n6 = prompt("Ingrese el primer numero a promediar: ");
var n6 = parseInt(n6);
var n7 = prompt("Ingrese el segundo numero a promediar: ");
var n7 = parseInt(n7);
var n8 = prompt("Ingrese el tercer numero a promediar: ");
var n8 = parseInt(n8);
var n9 = prompt("Ingrese el cuarto numero a promediar: ");
var n9 = parseInt(n9);
var n10 = prompt("Ingrese el quinto numero a promediar: ");
var n10 = parseInt(n10);
var n11 = prompt("Ingrese el sexto numero a promediar: ");
var n11 = parseInt(n11);
document.write("<p>La suma de los numeros ingresados son: </p>");
document.write(parseInt(n6)+parseInt(n7)+parseInt(n8)+parseInt(n9)+parseInt(n10)+parseInt(n11));
document.write("<br>")
document.write("<p>El promedio de los numeros ingresados es: </p>");
document.write((parseInt(n6)+parseInt(n7)+parseInt(n8)+parseInt(n9)+parseInt(n10)+parseInt(n11))/6);