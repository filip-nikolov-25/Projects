import React from 'react'
import AppContainer from '../../components/base/AppContainer/AppContainer'
import AppSection from '../../components/base/AppSection/AppSection'
import Contact from '../../components/Contact/Contact'

const ContactPage = () => {
  return (
    <div>
        <AppContainer disablePadding={true}>
            <AppSection >
                <Contact />
            </AppSection>
        </AppContainer>
    </div>
  )
}

export default ContactPage