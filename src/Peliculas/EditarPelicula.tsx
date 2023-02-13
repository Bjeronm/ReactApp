import FormularioPeliculas from "./FormularioPeliculas";
import { generoDTO } from "../generos/generos.model";
import { cineDTO } from "../Cines/cines.model";
import { actorPeliculaDTO } from "../Actores/Actores.model";

export default function EditarPelicula() {

    const generosNoSeleccionados: generoDTO[] = [{id: 2, nombre: 'Suspenso'}]
    const generosSeleccionados: generoDTO[] = [{id: 1, nombre: 'Accion'}, {id: 3, nombre: "Comedia"}]
    const cinesSeleccionados: cineDTO[] = [{id: 1, nombre: 'Agora'}]
    const cinesNoSeleccionados: cineDTO[] = [{id:2, nombre: 'cinepolis'}]
    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
        id: 1, nombre: 'Felipe', personaje: '', foto: 'https://www.rollingstone.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-12-at-3.14.20-PM-copy.jpg?w=1581&h=1054&crop=1'
        }
    ]

    return (
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPeliculas 
                actoresSeleccionados={actoresSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}           
                modelo={{titulo: '', enCines: true, trailer: 'url' , fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}