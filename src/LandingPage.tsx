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
                id: 1, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 2, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 3, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 4, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            }
        
            ],
            proximosEstrenos: [
            {
                id: 5, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 6, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 7, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
            },
            {
                id: 8, titulo: 'Spider-Man: Far from home', poster: 'https://play-lh.googleusercontent.com/i0DAXWIGliyfSy6FWsbt7N_i1530o_rtkM220WgVGpRlI4OeOuIz-kL3JmZWFa3u7bjsaAfOdfUUMZSE1A'
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