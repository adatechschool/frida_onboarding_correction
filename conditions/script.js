// Exercice 1 : Vérifier si une personne est majeure
// Créez une fonction qui prend un nombre en paramètre
// et retourne true si le nombre est supérieur ou égal à 18, sinon false.


function isMajeur(number) {
    //console.log("paramètre",number);
  if (number >= 18) {
    return true;
  }
return false;

}

//console.log(isMajeur(15));
//let my_age = 19;
//console.log(isMajeur(my_age));


// Exercice 2 : FizzBuzz
// Créez une fonction qui prend un nombre en paramètre
// et retourne "Fizz" si le nombre est divisible par 3,
// "Buzz" si le nombre est divisible par 5,
// "FizzBuzz" si le nombre est divisible par 3 et 5,
// sinon "Ni Fizz, ni Buzz".
function fizzbuzz(number) {
    //console.log("paramètre", number);
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
  return "Ni Fizz, ni Buzz";
}
//console.log(fizzbuzz(15));
// console.log(fizzbuzz(9));
// console.log(fizzbuzz(10));
// console.log(fizzbuzz(7));


// Exercice 3 : Vérifier la météo
// Créez une fonction qui prend une chaîne de caractères en paramètre
// et retourne "Prends ton parapluie" si la chaîne est "pluie",
// "Prends ta crème solaire" si la chaîne est "soleil",
// "Bonne journée" pour tout autre cas.
function meteoCheck(meteo) {
    //console.log("paramètre", meteo);
  if (meteo === "pluie") {
    return "Prends ton parapluie";
  } else if (meteo === "soleil") {
    return "Prends ta crème solaire";
  }
  return "Bonne journée";
}
// let meteo_today = "pluie";
// console.log(meteoCheck(meteo_today));
// let meteo_today = "soleil";
// console.log(meteoCheck(meteo_today));        
// let meteo_today = "neige"

//Exercice 4 : Distributeur de boissons
// Créez une fonction qui prend un nombre en paramètre
// et retourne "voici un coca" si le nombre est 1,
// "voici un jus de pomme" si le nombre est 2,
// "voici un café" si le nombre est 3,
// sinon "votre choix n'est pas valide".

function distributeur(choix) {
  // console.log("paramètre", choix);
  if (choix === 1) {
    return "voici un coca";
  } else if (choix === 2) {
    return "voici un jus de pomme";
  } else if (choix === 3) {
    return "voici un café";
  }
  return "votre choix n'est pas valide";
}
// console.log(distributeur(2));
// console.log(distributeur(1));
// console.log(distributeur(3));
//console.log(distributeur(4));
