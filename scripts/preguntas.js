import { valor } from "./consultaPreguntas.js";
 import { questions } from "../main.js";       
let categoria = valor.categoria
let dificultad = valor.dificultad
let tipoPregunta = valor.tipoPregunta
console.log(questions);

async function opciones() {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipoPregunta}`)
        const data = await response.json()
        questions.push(...data.results)
        console.log(questions);
    }catch(error){
        console.log(error);
    } 
    
}
opciones()  






    