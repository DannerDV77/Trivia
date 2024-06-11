import { questions } from "../main.js";


const pregunta = document.querySelector("#datoPregunta")
const contAnsowers = document.querySelector("#contAnsowers")

let contador = 0

export function imprimir() {
    let question = questions[contador].question
        .replace(/&quot;/g, '\"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')

    let correct_answer = questions[contador].correct_answer
    let incorrect_answers = questions[contador].incorrect_answers
    let tipoPregunta = questions[0].type

    console.log(questions)

    pregunta.innerHTML = `${question}`

    if (tipoPregunta == "multiple") {
        console.log("son preguntas multiples");
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

        console.log(respuestas, botones);

        /* const btn1 = document.querySelector("#btn1")
        const btn2 = document.querySelector("#btn2")
        const btn3 = document.querySelector("#btn3")
        const btn4 = document.querySelector("#btn4")

        btn1.innerHTML = `${correct_answer}`
        btn2.innerHTML = `${incorrect_answers[0]}`
        btn3.innerHTML = `${incorrect_answers[1]}`
        btn4.innerHTML = `${incorrect_answers[2]}` */


    } else if (tipoPregunta == "boolean") {
        console.log("son preguntas Boolean");
        const contendorBtn = document.createElement("div")
        contendorBtn.id = "respuestas"
        contendorBtn.innerHTML = `<button id="btn1">True</button>
                    <button id="btn2">False</button>`

        contAnsowers.appendChild(contendorBtn)

        const btn1 = document.querySelector("#btn1")
        const btn2 = document.querySelector("#btn2")


    }

}
