import FormularioPeliculas from "./FormularioPeliculas";
import { generoDTO } from "../generos/generos.model";

export default function EditarPelicula() {

    const generosNoSeleccionados: generoDTO[] = [{id: 2, nombre: 'Suspenso'}]
    const generosSeleccionados: generoDTO[] = [{id: 1, nombre: 'Accion'}, {id: 3, nombre: "Comedia"}]

    return (
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPeliculas 
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}           
                modelo={{titulo: '', enCines: true, trailer: 'url' , fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}