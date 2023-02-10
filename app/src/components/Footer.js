import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    return (
        <div className='footer row bg-primary p-3 fixed-bottom'>
            <div className='text-center'>
                <a src="#" className="text-white px-2"><BsTwitter /></a>
                <a src="#" className="text-white px-2"><BsLinkedin /></a>
                <a src="#" className="text-white px-2"><BsGithub /></a>
            </div>
        </div>
    )
}