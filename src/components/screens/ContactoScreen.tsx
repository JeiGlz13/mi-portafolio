import { ContactForm } from "../ui_contact/ContactForm"

export const ContactoScreen = () => {
  return (
    <div className="ContactoScreen" >
      <h1>¿Deseas comunicarte conmigo?</h1>
      <h2>Enviame un correo a través de este formulario y con gusto responderé a tu consulta.</h2>

      <ContactForm />
    </div>
  )
}
