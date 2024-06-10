import { showCategories } from "./scripts/consultaCategorias.js";
import { valor } from "./scripts/consultaPreguntas.js";

const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")
const questions = []

showCategories()

document.querySelector("#start").addEventListener("click", (e) => {
    e.preventDefault()
    valor()

    const nodata = valor.categoria
    if (nodata == 0) {


        modal2.showModal()
        setTimeout(() => {
            window.location.reload()
        }, 2400);

    } else {

        let categoria = valor.categoria
        let dificultad = valor.dificultad
        let tipoPregunta = valor.tipoPregunta


        async function opciones() {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipoPregunta}`)
                const data = await response.json()
                questions.push(...data.results)
                console.log(questions);


                const nodata = data.response_code

                if (nodata >= 1) {
                    modal1.showModal()
                }else {
                    const hideOptions = document.querySelector("#options")
                    hideOptions.id.style.remove("display: flex")

                    hideOptions.classList.add("ocultar")
                    hideOptions.id.remove("options")

                    console.log("si funciono :)");
                }

            } catch (error) {
                console.log(error);
            }
        }
        opciones()
    }
})

document.querySelector("#closeModal").addEventListener("click", () => {
    window.location.reload()
})