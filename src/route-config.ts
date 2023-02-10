import CrearAutores from "./Actores/CrearAutores";
import EditarAutores from "./Actores/EditarAutores";
import IndiceAutores from "./Actores/IndiceActores";
import CrearCine from "./Cines/CrearCine";
import EditarCine from "./Cines/EditarCine";
import IndiceCInes from "./Cines/IndiceCine";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from "./Peliculas/CrearPelicula";
import EditarPelicula from "./Peliculas/EditarPelicula";
import FiltroPelicula from "./Peliculas/FiltroPeliculas";
import RedireccinarLanding from "./Utils/RedirectLanding";

const rutas = [
    {path: '/peliculas/crear', componente: CrearPelicula},
    {path: '/peliculas/editar/:id', componente: EditarPelicula},
    {path: '/peliculas/filtrar', componente: FiltroPelicula},

    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/actores/crear', componente: CrearAutores},
    {path: '/actores/editar/:id', componente: EditarAutores},
    {path: '/actores', componente: IndiceAutores},

    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id', componente: EditarCine},
    {path: '/cines', componente: IndiceCInes},

    {path: '/', componente: LandingPage },
    {path: '*', componente: RedireccinarLanding }
]

export default rutas;