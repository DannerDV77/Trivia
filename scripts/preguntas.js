import { questions } from "../main.js";

const pregunta = document.querySelector("#datoPregunta")
const contAnsowers = document.querySelector("#contAnsowers")

let aciertos = 0
let contador = 0



export function imprimir() {

    let question = questions[contador].question
        .replace(/&quot;/g, '\"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')

    let correct_answer = questions[contador].correct_answer
    let incorrect_answers = questions[contador].incorrect_answers
    let tipoPregunta = questions[0].type

    pregunta.innerHTML = `${question}`

    if (tipoPregunta == "multiple") {
        const contendorBtn = document.createElement("div")
        contendorBtn.id = "respuestas"
        contendorBtn.innerHTML = `
        <button id="btn1"></button>
        <button id="btn2"></button>
        <button id="btn3"></button>
        <button id="btn4"></button>`

        contAnsowers.appendChild(contendorBtn)

        const respuestas = [
            correct_answer,
            ...incorrect_answers
        ].sort(() => Math.random() - 0.5)

        const botones = contendorBtn.querySelectorAll("button")
        botones.forEach((button, Index) => {
            button.textContent = respuestas[Index]
        })

        console.log(respuestas, botones, correct_answer);
        console.log(correct_answer);

        const btn1 = document.querySelector("#btn1")
        const btn2 = document.querySelector("#btn2")
        const btn3 = document.querySelector("#btn3")
        const btn4 = document.querySelector("#btn4")

    } else if (tipoPregunta == "boolean") {
        const contendorBtn = document.createElement("div")
        contendorBtn.id = "respuestas"
        contendorBtn.innerHTML = `<button id="btn1">True</button>
                    <button id="btn2">False</button>`

        contAnsowers.appendChild(contendorBtn)

        const btn1 = document.querySelector("#btn1")
        const btn2 = document.querySelector("#btn2")


    }

}

function nextquestion() {
   for (let i = 1; i < 10; i++) {
        console.log(i);
    } 
}