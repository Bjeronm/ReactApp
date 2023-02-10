import PeliculaIndividual from "./PeliculaIndividual"
import { pelicula } from "./peliculas.model"
import css from "./ListadoPeliculas.module.css"
import Cargando from "../Utils/Cargando"
import ListadoGenerico from "../Utils/ListadoGenerico"

export default function ListadoPeliculas(props: listadoPeliculaProps){
   
    return (
        <ListadoGenerico listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual pelicula={pelicula} 
                    key={pelicula.id}
                />)}
            </div>
        </ListadoGenerico>
        
    )
}

interface listadoPeliculaProps{
    peliculas?: pelicula[]
}