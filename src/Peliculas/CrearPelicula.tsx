import { cineDTO } from "../Cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula() {

    const generos: generoDTO[] = [{id: 1, nombre: 'Accion'}, {id: 2, nombre: 'Suspenso'}, {id: 3, nombre: "Comedia"}]
    const cines: cineDTO[] = [{id: 1, nombre: 'Agora'}]

    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPeliculas
                actoresSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                 modelo={{titulo: '', enCines: false, trailer: ''}} 
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}