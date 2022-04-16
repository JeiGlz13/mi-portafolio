import { Form, Formik, FormikState } from 'formik';
import * as Yup from 'yup';
import { MyTextarea } from './Mytextarea';
import { MyTextInput } from './MyTextInput';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValuesInterface {
    nombres: string;
    apellidos: string;
    email: string;
    asunto: string;
    mensaje: string;
}
export const ContactForm = () => {
    const initialValues:FormValuesInterface = {
        nombres: '',
        apellidos: '',
        email: '',
        asunto: '',
        mensaje: '',
    }

    const validationSchema = Yup.object({
        nombres: Yup.string()
                    .max(50, 'Debe tener menos de 50 caracteres')
                    .required('El nombre es obligatorio'),
        apellidos: Yup.string()
                    .max(50, 'Debe tener menos de 50 caracteres')
                    .required('El apellido es obligatorio'),
        email: Yup.string()
                    .email('Debe ser un email valido')
                    .required('El email es obligatorio'),
        asunto: Yup.string()
                    .max(100, 'Debe tener menos de 100 caracteres')
                    .required('El asunto es obligatorio'),
        mensaje: Yup.string()
                    .max(500, 'Debe tener menos de 500 caracteres')
                    .required('El mensaje es obligatorio'),
    });

    const notify = () => toast.success('Correo enviado con exito', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide
        });

    const onSubmit = (
    values:FormValuesInterface, 
    resetForm: (nextState?: Partial<FormikState<FormValuesInterface>> | undefined) => void) => {
        console.log(values);
        notify();
        
        resetForm({values: initialValues});
    }

  return (
       <Formik initialValues={initialValues} 
       validationSchema = {validationSchema}
       onSubmit={(values, {resetForm})=>onSubmit(values, resetForm)}>
              {
                  (formik)=>(
                    <Form className="ContactForm">
                        <div className='half-container'>
                            <MyTextInput label='Nombres' name='nombres' placeholder='John' />
                        </div>

                        <div className='half-container'>
                            <MyTextInput label='Apellidos' name='apellidos' placeholder='Doe' />
                        </div>

                        <div className='full-container'>
                            <MyTextInput label='E-mail' name='email' placeholder='ejemplo1@email.com' />
                        </div>

                        <div className='full-container'>
                            <MyTextInput label='Asunto' name='asunto' placeholder='Asunto' />
                        </div>
                        
                        <div className='full-container'>
                            <MyTextarea label='Mensaje' name= 'mensaje' placeholder='Este es mi mensaje' />
                        </div>

                        <div className='form-btn'>
                            <button type='submit'>
                                Enviar
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                        <ToastContainer className='toast-success' />
                    </Form>
                  )
              }
       </Formik>
  )
}
