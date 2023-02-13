import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGroupText from "../Utils/FormGroupText";
import { actorCreacionDTO } from "./Actores.model";
import * as Yup from 'yup';
import FormGroupFecha from "../Utils/FormGroupFecha";
import FormGroupImagen from "../Utils/FormGrouImagen";
import FormGroupMarkdown from "../Utils/FormGroupMarkdown";

export default function FormularioActores(props: formularioActoresProps) {
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido'),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}
            >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"/>
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                    <FormGroupImagen campo="foto" label="foto" imagenURL={props.modelo.fotoURL}/>
                    <FormGroupMarkdown campo="biografia" label="Biografia" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}