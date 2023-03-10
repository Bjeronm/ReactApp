import EditarEntidad from "../Utils/EditarEntidad";
import { urlGeneros } from "../Utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "./generos.model";

export default function EditarGenero() {
   

    return (
        <>
            <EditarEntidad<generoCreacionDTO, generoDTO>
                    url={urlGeneros} urlIndice="/generos" nombreEntidad="Generos"
                >
                {(entidad, editar) => <FormularioGeneros modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores);
                        }}
                    />
                }
            </EditarEntidad> 
        </>
    )
}