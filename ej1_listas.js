    // Crea una lista de números pares del 2 al 20 utilizando un bucle while.
var numeros = [];
var i= 0;
while(i<=20){
    numeros.push(i);
    i = i + 2;
}
console.log ("lista de numeros: "+ numeros ) 
    // Crea una lista de números impares del 1 al 19 utilizando un bucle for.
var numerosImpar = [];
var index = 1;
for (var index = 1; index <= 19; index++) {
    if(index %2== 1){
    numerosImpar.push(index);
}
}
console.log ("lista de numerosImpar: "+ numerosImpar)
    
    // Crea una lista de comida.

var listacomida =["pasta","hamburguesa","salmorejo","pisto"] 
console.log ("listacomida: "+ listacomida)
    
    // Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
listacomida.unsift ("papa con carne")
    console.log ("listacomida")

    // Accede al segundo elemento de la lista de comida y cambia su valor por otro diferente.
    
listacomida[1] = "pasta";
console.log(listacomida);
    // Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.

var i=0;
while(1<listacomida.length){
    console.log(listacomida[i])
    i=i+1
}
    // Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.

function verultimoelementodelalista(lista){
    return lista.length;
}

// crea una función que nos devuelva si aparece un elemento en la lista o no

function busqueda(lista, numeros){
    for(var index=0; index<=lista.length;index++)
    if(lista[index] ==numeros){
        return true;
        {}
    }
    return false;
}
    // Crea una función que reciba una lista y un elemento como parámetros y agregue el elemento a la lista si no se encuentra en ella.
function suma(num1,num2){
    return num1+num2;
    function busquedaoagregar(lista, numeros){
        for(var index=0; index<=lista.length;index++)
        if(lista[index] ==numeros){
            return lista+Element;
            {}
        }
        return false;
}
    // Crea una función que reciba una lista como parámetro y devuelva una nueva lista con los elementos de la lista original en orden inverso.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la media de todos los números de la lista.
