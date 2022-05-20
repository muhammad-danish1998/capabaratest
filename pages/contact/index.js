import React from 'react'
import Footer from '../../components/Footer'
import MainNavbar from '../../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../../styles/globals.css";

import FormHeader from '../../components/contact/FormHeader';
// import styles from "../styles/Home.module.css";


const index = () => {
    return (
        <div>
            <MainNavbar />
            <FormHeader />
            <Footer />
        </div>
    )
}

export default index