import React, { useState } from "react"
import Titulo from "./Components/Titulo"
import Campo from "./Components/Campo"
import Conteudo from "./Components/Conteudo"
import Entrada from "./Components/Entrada"

export default function Inicio(props) {
    const [lista, definirLista] = useState([])

    function Adicionar(evento) {
        const valor = evento.target.conteudo.value
        definirLista([...lista, valor])
        evento.preventDefault()
    }

    return <>
        <Titulo nome="Velejando em React" />
        <Campo id="1">
            <form onSubmit={Adicionar}>
                <Entrada />
            </form>
        </Campo>
        <Campo id="2">
            {
                lista.map(function (item) {
                    return <Conteudo key={item} texto={item} />
                })
            }
        </Campo>
    </>
}