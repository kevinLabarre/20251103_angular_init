// Ici , renvoie 'undefined' psq on n'a pas de return
const hello = () => {
  'Hello world !';
};

console.log(hello());

// Renvoie 'Hello world !' car sans les '{}', nous avons un return implicite (on ne le voit pas, mais c'est comme si on l'avait écrit)
const hello2 = () => 'Hello world !';
console.log(hello2());
