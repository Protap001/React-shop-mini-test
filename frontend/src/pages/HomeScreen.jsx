import React from 'react'
import CalltoActionSection from '../components/homeComponents/CalltoActionSection'
import ContactInfo from '../components/homeComponents/ContactInfo'
import ShopSection from '../components/homeComponents/ShopSection'

const HomeScreen = () => {
    return (
        <div>
            <ShopSection />
            <CalltoActionSection />
            <ContactInfo />
        </div>
    )
}

export default HomeScreen