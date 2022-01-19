import React from 'react';
import Header from '../componets/header/Header';
import Image from '../componets/main/Image';
import ServiceMsg from '../componets/main/ServiceMsg';
import RecentWorks from '../componets/main/RecentWorks';
import Adoption from '../componets/main/Adoption';
import ContactUs from '../componets/main/ContactUs';
import Footer from '../componets/main/Footer';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Image/>
            <ServiceMsg/>
            <RecentWorks/>
            <Adoption/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Homepage
