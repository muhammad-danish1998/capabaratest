import React from 'react'
import Footer from '../../components/Footer'
import MainNavbar from '../../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";



import TemplateHeader from '../../components/templatte/TemplateHeader';
const index = () => {
    return (
        <div>

            <MainNavbar />
            <TemplateHeader />
            <Footer />

        </div>
    )
}

export default index