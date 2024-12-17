import React from 'react';
import Termin from '@/components/footer/termin/Termin';
import Zertifikate from './Zertifikate';
import Menue from './Menue';
import Adresse from './Adresse';
import Copyright from './Copyright';
import Logo from '../navigation/Logo';


export default function Footer() {
    return (
        <footer>
            <Termin />
            <Zertifikate />
            <div className='footersection pt-8 pb-4'>
                <div className='flex justify-between items-end'>
                    <Adresse />
                    <Menue />
                    <Logo />
                </div>
                <Copyright />
            </div>
        </footer>
    );
}