import FormularioCines from "./FormularioCines";

export default function EditarCine() {
    return (
        <>
            <h3>Editar Cine</h3>
            <FormularioCines modelo={{nombre: '', latitud: 62.5, longitud: -62.5422}} 
                onSubmit={valores => console.log(valores)}/>
        </>
    )
}