import { useParams } from "react-router-dom"
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero() {
    const {id}: any = useParams();
    return (
        <>
            <h3>Editar Genero</h3>
            <FormularioGeneros modelo={{nombre: ''}}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                }}
            />
        </>
    )
}