import React, {useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact.class'

function ContactComponent(props) {

    const [conectado, setConectado] = useState(props.contact.conectado);
    const cambiarEstado = () =>{
        setConectado(!conectado);
    }
  return (
    <div>
        <h1>
            Contacto {props.contact.nombre} {props.contact.apellido}
        </h1>
        <h2>
            Email {props.contact.email}
        </h2>
        <h3>
            {conectado ? "Está online" : "Está offline"}
        </h3>
        <div>
            <button onClick={cambiarEstado}>
            {props.contact.conectado ? "Desconectarse" : "Conectarse"}
            </button>
        </div>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
