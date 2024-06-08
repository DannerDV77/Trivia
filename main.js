import { showCategories } from "./scripts/consultaCategorias.js";
import { valor } from "./scripts/consultaPreguntas.js";

showCategories()

document.querySelector("#start").addEventListener("click", (e) =>{
    e.preventDefault()
    valor()

    let categoria = valor.categoria
    let dificultad = valor.dificultad
    let tipoPregunta = valor.tipoPregunta

    async function opciones() {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipoPregunta}`)
            const data = await response.json()
            console.log(data)
            
        } catch (error) {

        }
    }
    opciones()
})

