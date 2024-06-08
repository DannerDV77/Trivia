import { showCategories } from "./scripts/consultaCategorias.js";
import { valor } from "./scripts/consultaPreguntas.js";

const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")


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
                console.log(data)

                const nodata = data.response_code

                if(nodata == 1){
                    modal1.showModal()
                }

            } catch (error) {

            }
        }
        opciones()
    }


})

document.querySelector("#closeModal").addEventListener("click", () => {
    window.location.reload()
})