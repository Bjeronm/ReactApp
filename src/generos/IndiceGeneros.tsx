import { urlGeneros } from "../Utils/endpoints";
import IndiceEntidad from "../Utils/IndiceEntidad";
import { generoDTO } from "./generos.model";

export default function IndiceGeneros(){

    

    return (
        <>
            <IndiceEntidad<generoDTO> url={urlGeneros} urlCrear="/generos/crear" titulo="Generos"
                nombreEntidad="Genero"
            >
                {(generos, botones) => 
                    <>
                        <thead>
                            <tr>
                                <th>Opciones</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generos?.map(genero => 
                            <tr key={genero.id}>
                                <td>
                                    {botones(`/generos/editar/${genero.id}`,genero.id)}
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </>
                }
                
            </IndiceEntidad>
        </> 
    )
}