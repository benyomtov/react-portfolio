import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {

    const styles = {
        sizing: {
            fontSize: '36px'
        },
    }    


    return (
        <div className='footer row bg-primary p-3 fixed-bottom'>
            <div className='text-center'>
                <a style={styles.sizing} href="https://www.linkedin.com/in/benjamin-yomtov-5a857b16b" className="text-white px-2"><BsLinkedin /></a>
                <a style={styles.sizing} href='https://github.com/benyomtov' className="text-white px-2"><BsGithub /></a>
            </div>
        </div>
    )
}