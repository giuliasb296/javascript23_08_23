/* 
    Atividade checkpoint: "Iteradores"
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 23/08/2023
*/

//Atividade 1

const hobbies = ['jogar vôlei', 'comer', 'ver filme', 'andar de bike', 'cozinhar'];
hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
});
//Atividade 2 

const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
});
console.log(bookTitles);
const catalogos = ['O Que Tem na Geladeira?', 'Chef profissional', 'Básico: Enciclopédia de receitas do Brasil Livro'];
const myCatalogo = catalogos.map(function(title) {
    return "Meu catálogo tem: " + title;
})
console.log(myCatalogo)
//Atividade 3 

const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'd';
});
const filterHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'c';
});
console.log(dHobbies + ' ' + filterHobbies);
//Atividade 4 

const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'correr';
});
const comerPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'comer';
});
console.log("Correr está na posição: " + runningPosition + " e " + "comer está na posição: " + comerPosition);
//Atividade 5 

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " , " + hobby; },);
console.log("Meus hobbies são: " + allHobbies);
const juntosHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " , gosto de " + hobby; },);
console.log("Eu gosto de " + juntosHobbies);
//Atividade 5[2] 

const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; 
});
console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);
const maiorqoito = hobbies.some(function(hobby) {
    return hobby.length > 8;
})
console.log("Eu tenho um hobby maior que 8 letras? " + maiorqoito)
//Atividade 6 

const allShort = hobbies.every(function(hobby) { 
    return hobby.length < 15; 
});
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);
const minusculo = hobbies.every(function(hobby) {
    return hobby === hobby.toLowerCase()
})
console.log('Meus hobbies começam com letra minúscula: ' + minusculo)
//Atividade 7 

const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);
const zLetra = hobbies.find(function(hobby){
    return hobby[0] === 'z';
})
console.log('Alguma palavra começa com z? ' + zLetra)
//Atividade 8 

const firstThreeHobbies = hobbies.slice(0, 3); 
console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);
const segquaHobbies = hobbies.slice(2, 4); 
console.log("Meus três primeiros hobbies são: ", segquaHobbies);