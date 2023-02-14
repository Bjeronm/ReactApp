import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { landingPageDTO } from "./Peliculas/peliculas.model";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
        setPeliculas({
            enCartelera: [
            {
                id: 1, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 2, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 3, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 4, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            }
        
            ],
            proximosEstrenos: [
            {
                id: 5, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 6, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 7, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            },
            {
                id: 8, titulo: 'Spider-Man: Far from home', poster: 'https://www.elnacional.cat/uploads/s1/37/48/64/19/programador.png'
            }
            ]
        })
        }, 1000);
        return () => clearTimeout(timerId);
    })

    return (
       <>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>
        <h3>Proximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
       </> 
    )
}