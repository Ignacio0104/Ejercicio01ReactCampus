import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact.class';
import ContactComponent from './ContactComponent';

function ContactList(props) {

    const listaContactos = [new Contact("Ignacio", "Smirlian", "ignaciosmirlian@gmail.com",false),
    new Contact("Pedro", "Gonzales", "pedrn@gmail.com",true),
    new Contact("Santigo", "Pedrozo", "santi@gmail.com",false),
    new Contact("Lucia", "Perez", "lucia@gmail.com",false)];
  return (
    <div>
        {listaContactos.map(element=> <ContactComponent contact={element}></ContactComponent>)}
    </div>
  )
}

ContactList.propTypes = {

}

export default ContactList

