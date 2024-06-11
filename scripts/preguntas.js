import { questions } from "../main.js";

const pregunta = document.querySelector("#datoPregunta")
const contAnsowers = document.querySelector("#contAnsowers")
const modalGood = document.querySelector("#modal_correct_answer")
const modalBad = document.querySelector("#modal_incorrect_answer")
const modalFinal = document.querySelector("#modal_final")
const contResult = document.querySelector("#contResult")

let aciertos = 0
let contador = 0

export function imprimir() {

    if (contador === 10) {
        console.log(`fin de la trivia. puntuacion: ${aciertos}`)
        const reultado = document.createElement("p")
        reultado.innerHTML = `Puntaje: ${aciertos}`
        contResult.appendChild(reultado)
        modalFinal.showModal()
        document.querySelector("#finalTrivia").addEventListener("click", () => {
            window.location.reload()
        })
    } else {
        let question = questions[contador].question
            .replace(/&quot;/g, '\"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')

        let correct_answer = questions[contador].correct_answer
            .replace(/&quot;/g, '\"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
        let incorrect_answers = questions[contador].incorrect_answers

        let tipoPregunta = questions[0].type

        pregunta.innerHTML = `Question: ${question}`

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

            let indiceRespuestaCorrecta;

            
            indiceRespuestaCorrecta = respuestas.findIndex(respuesta => respuesta === correct_answer);

            const botones = contendorBtn.querySelectorAll("button");
            botones.forEach((button, index) => {
                button.textContent = respuestas[index];
                
                if (respuestas[index] === correct_answer) {
                    button.dataset.correcta = true;
                } else {
                    button.removeAttribute('data-correcta');
                }
            });

            botones.forEach(button => {
                button.addEventListener('click', function () {
                    if (this.dataset.correcta) {
                        aciertos++
                        contador++
                        modalGood.showModal()

                        setTimeout(() => {
                            pregunta.innerHTML = ``
                            contendorBtn.innerHTML = ``

                            contAnsowers.appendChild(contendorBtn)
                            const removecontendorBtn = document.querySelector("#respuestas")
                            removecontendorBtn.remove()
                            modalGood.close()

                            imprimir()
                            return
                        }, 2000);

                    } else {
                        contador++

                        modalBad.showModal()

                        setTimeout(() => {
                            pregunta.innerHTML = ``
                            contendorBtn.innerHTML = ``

                            contAnsowers.appendChild(contendorBtn)
                            const removecontendorBtn = document.querySelector("#respuestas")
                            removecontendorBtn.remove()
                            modalBad.close()

                            imprimir()
                            return
                        }, 3000);

                    }
                });
            });


            console.log(correct_answer);

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



}

