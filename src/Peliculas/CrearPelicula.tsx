import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula() {

    const generos: generoDTO[] = [{id: 1, nombre: 'Accion'}, {id: 2, nombre: 'Suspenso'}, {id: 3, nombre: "Comedia"}]

    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPeliculas
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                 modelo={{titulo: '', enCines: false, trailer: ''}} 
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}