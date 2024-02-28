//1. sin parámetros, genere un número aleatorio entre 1 y 100 y determina si es par o impar
const determinarParidad = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const esPar = numeroAleatorio % 2 === 0;
    console.log("El número aleatorio generado es: ${numeroAleatorio}");
    console.log(esPar ? "Es par" : "Es impar");
  };
  
  // Llamada a la función
  determinarParidad();


//2. un parámetro que reciba un arreglo de números y calcule e promedi
  const calcularPromedio = (numeros) => {
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / numeros.length;
    return promedio;
  };
  
  // Llamada a la función
  const numeros = [5, 10, 15, 20];
  console.log("El promedio de ${numeros} es: ${calcularPromedio(numeros)}");
  
//3.con más de dos parámetros que reciba una cadena y una letra, y 
//cuente cuántas veces aparece la letra en la cadena
  const contarLetra = (cadena, letra) => {
    const regex = new RegExp(letra, "gi"); // Expresión para buscar la letra
    const coincidencias = cadena.match(regex);
    return coincidencias ? coincidencias.length : 0;
  };
  
  // Llamada a la función
  const cadena = `Profe si lee esto sepa que en la entrega de la primera tarea 
  cometi el error de no subir todo dentro de una sola carpeta, ya que no sabia 
  como se subia y no lo corrijo por eso cambiaria la fecha en la que lo subi
  `;
  const letra = "e";
  console.log(`La letra '${letra}' aparece ${contarLetra(cadena, letra)} veces en la cadena.`);  