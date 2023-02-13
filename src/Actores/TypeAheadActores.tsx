import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./Actores.model"

export default function TypeAheadActores(props: typeAheadActoresProps){

    const actores: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Felipe', personaje: '', foto: 'https://www.rollingstone.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-12-at-3.14.20-PM-copy.jpg?w=1581&h=1054&crop=1'
        },
        {
            id: 2, nombre: 'Bryan', personaje: '', foto: 'https://cdn-e360.s3-sa-east-1.amazonaws.com/sera-iron-man-marvel-planea-resucitar-a-uno-de-sus-heroes-segun-nueva-filtracion-large-nqULodl6Lg.jpg'
        },
        {
            id: 3, nombre: 'Roberto', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
        },
    ]

    const seleccion: actorPeliculaDTO[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined);

    function manejarDragStart(actor: actorPeliculaDTO){
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }
        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);
            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }

    return (
        <>
            <label>Actores</label>
            <Typeahead id="typeahead" onChange={actor => {
                if(props.actores.findIndex(x => x.id === actor[0].id) === -1){
                props.onAdd([...props.actores, actor[0]]);
                }
            }}
            options={actores}
            labelKey={actor => actor.nombre}
            filterBy={['nombre']}
            placeholder="Escriba nombre Actor"
            minLength={2}
            flip={true}
            selected = {seleccion}
            renderMenuItemChildren={actor => (
                <>
                    <img alt="iamgen actor" src={actor.foto} 
                        style={{
                            height: '64px',
                            marginRight: '10px',
                            width: '64px'
                        }}
                    />
                    <span>{actor.nombre}</span>
                </>
            )}
             />

             <ul className="list-group">
                {props.actores.map(actor => 
                <li 
                    draggable={true}
                    onDragStart={() => manejarDragStart(actor)}
                    onDragOver={() => manejarDragOver(actor)}
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                        {props.listadoUI(actor)}
                        <span className="badge badge-primary badge-pill pointer"
                        style={{marginLeft: '0.5rem'}}
                        onClick={() => props.onRemove(actor)}>
                            X
                        </span>
                </li> )}
             </ul>
        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actore: actorPeliculaDTO): void;
}