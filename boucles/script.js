
// Exercice 1 : Boucle for
// Créez un tableau contenant les noms de 4 fruits
// et affichez chaque fruit avec son indice dans le tableau.
let fruits = ['banane', 'ananas', 'mangue', 'pasteque'];

//console.log(typeof fruits) => afficher le type de la variable fruits
// console.log(fruits[3]) => afficher le fruit à l'indice 3
// console.log(fruits.length) => afficher la longueur du tableau fruits
//fruits.push("poire") => ajouter un fruit à la fin du tableau
//console.log(fruits.length);
// console.log(fruits)
// console.log(fruits[4])

for (let i = 0; i < fruits.length; i++) {
  console.log(`le fruit à l‘indice ${i} est ${fruits[i]}`);
}

// Exercice 2 : Boucle for avec condition
// Créez un tableau contenant les noms des 3 promos Ada
// et affichez le nom de l‘encadrante de chaque promo aujourd‘hui.
let ada = ['Frida', 'Fatoumata', 'Frances'];
for (let i = 0; i < ada.length; i++) {
  //console.log(ada[i])

  if (ada[i] === 'Frida') {
    console.log(`Pour la promo ${ada[i]}, l'encadrante est Laure`);
  } else if (ada[i] === 'Fatoumata') {
    console.log(`Pour la promo ${ada[i]}, l'encadrante est Laila`);
  } else if (ada[i] === 'Frances') {
    console.log(`Pour la promo ${ada[i]}, l'encadrante est Vi`);
  }
}

