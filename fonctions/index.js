// Exercice 1 : afficher l'âge d'une personne
function display_age(number){
    //console.log("number:", number)
    return `tu as ${number} ans`;
}

//console.log(display_age(18));


// Exercice 2 : créer une fonction hello() qui affiche le nom et l'âge d'une personne
function hello(name, age) {
    return `Bonjour ${name}, tu as ${age} ans`;
}

//console.log(hello("Ada", 25));

// Definir des variables pour le nom et l'âge, puis appeler la fonction hello() avec ces variables
let my_name = "Alice";
let my_age = 30;
//console.log(hello(my_name, my_age));

// Exercice 3: créer une fonction addition qui prend deux nombres en paramètres et retourne leur somme.
function addition(number1, number2) {
    return number1 + number2;
}
//console.log(addition(5, 10)); 