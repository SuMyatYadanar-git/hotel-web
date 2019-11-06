import React from 'react'

import ContactHeader from '../components/ContactHeader'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'

const ContactContainer = props => {
    return (

        <div>
            <ContactHeader />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </div>

    )
}

export default ContactContainer