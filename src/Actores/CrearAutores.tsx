import FormularioActores from "./FormularioActores";

export default function CrearAutores() {
    return (
        <>
            <h3>Crear Autores</h3>
            <FormularioActores modelo={{nombre: '', fechaNacimiento: undefined}}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                 }} />
        </>
    )
}