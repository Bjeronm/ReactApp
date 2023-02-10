import FormularioGeneros from "./FormularioGeneros";


export default function CrearGenero() {
    //const history = useNavigate();
    return (
        <>
            <h3>Crear Genero</h3>
            <FormularioGeneros modelo={{nombre: ''}} 
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                 }}
            />
        </>
    )
}