import FormularioActores from "./FormularioActores";

export default function EditarAutores(){
    return (
        <>
            <h3>Editar Autores</h3>
            <FormularioActores modelo={{nombre: '', fechaNacimiento: undefined}} 
                onSubmit={valores => console.log(valores)}/>
        </>
    )
}