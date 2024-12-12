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
            <div className='flex justify-between bg-grey-500 px-4 pt-16 pb-4'>
                <div className='flex flex-col justify-between'>
                    <Logo />
                    <Copyright />
                </div>
                <Menue />
                <Adresse />
            </div>
        </footer>
    );
}