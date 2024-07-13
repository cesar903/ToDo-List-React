import React from "react"
import { createRoot } from "react-dom/client"
import Inicio from "./Inicio"

const contentor = document.getElementById("root")
const origem = createRoot(contentor)
origem.render(<Inicio />)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
)
