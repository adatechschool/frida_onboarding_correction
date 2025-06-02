// 🏁 Échauffement

const prenom = "Ada";
const nom = "Lovelace";

console.log(`Je m’appelle ${prenom} ${nom}`);

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

function equal(a, b) {
  return a === b;
}

console.log(equal(2, 3)); // false
console.log(equal(3, 3)); // true

// 🔹 Étape 1 – Fonction

function annoncerChoix(nombre) {
    // Bonus niveau avancé: vérification du type de la variable
  if (typeof nombre !== "number") {
    console.log("Erreur : tu dois entrer un nombre !");
    return;
  }
  console.log(`Tu as choisi le numéro ${nombre}`);
}

annoncerChoix(3);

// 🔹 Étape 2 – Conditions

function servirBoisson(nombre) {
  if (nombre === 1) {
    console.log("Voici un jus de mangue 🥭");
  } else if (nombre === 2) {
    console.log("Voici un jus de pomme 🍏");
  } else if (nombre === 3) {
    console.log("Voici un jus de pastèque 🍉");
  } else {
    console.log("Désolé, je n’ai pas cette boisson 😢");
  }
}

servirBoisson(1);
servirBoisson(5);

// 🔹 Étape 3 – Boucle et tableau

const boissons = [
  "jus de mangue 🥭",
  "jus de pomme 🍏",
  "jus de pastèque 🍉",
  "jus d'orange 🍊",
  "jus de myrtille 🫐",
  "jus de raisin 🍇",
  "jus d’ananas 🍍",
  "jus de citron vert 🍈",
  "jus de fraise 🍓"
];

// Affichage de la liste
for (let i = 0; i < boissons.length; i++) {
  console.log(`Boisson ${i + 1}: ${boissons[i]}`);
}

// 🔥 Bonus – Ajouter une boisson

boissons.push("jus de kiwi 🥝");

for (let i = 0; i < boissons.length; i++) {
  console.log(`Boisson ${i + 1}: ${boissons[i]}`);
}

// 🔹 Étape 4 – Avancé-fonction

// 1- Correction avec une boucle:
function choisirBoisson(liste, numero) {
  for (let i = 0; i < liste.length; i++) {
    if (i === numero - 1) {
      console.log(`Voici un ${liste[i]} !`);
      return;
    }
  }
  console.log(`Le numéro choisi est invalide. Essaie entre 1 et ${liste.length} 😢`);
}

choisirBoisson(boissons, 1);
choisirBoisson(boissons, 11);

// 2- Correction sans passer par une boucle et avec une vérification de l'index:
function choisirBoisson(liste, numero) {
  if (numero < 1 || numero > liste.length) {
    console.log(`Le numéro choisi est invalide. Essaie entre 1 et ${liste.length} 😢`);
  } else {
    console.log(`Voici un ${liste[numero - 1]} !`);
  }
}

choisirBoisson(boissons, 1);
choisirBoisson(boissons, 11);

// 🔹 Étape 5 – Appel de fonction dans une autre fonction

function distributeurDeBoissons(liste, numero) {
  annoncerChoix(numero);
  choisirBoisson(liste, numero);
}

distributeurDeBoissons(boissons, 9);
distributeurDeBoissons(boissons, 15);
