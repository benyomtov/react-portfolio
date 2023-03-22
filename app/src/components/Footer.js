import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Footer() {

    const styles = {
        sizing: {
            fontSize: '36px',
            textShadow: "-3px 3px 3px gray"
        },
    }    


    return (
        <div style={{ backgroundColor: "#12294d" }} className='footer row p-3 fixed-bottom'>
            <div className='text-center'>
                <a style={styles.sizing} href="https://www.linkedin.com/in/benjamin-yomtov-5a857b16b" className="text-white px-2"><BsLinkedin style={{ textShadow: "-2px 2px 2px gray" }}/></a>
                <a style={styles.sizing} href='https://github.com/benyomtov' className="text-white px-2"><BsGithub /></a>
                <a style={styles.sizing} href='mailto:benyomtov@comcast.net' className="text-white px-2"><FiMail /></a>
            </div>
        </div>
    )
}