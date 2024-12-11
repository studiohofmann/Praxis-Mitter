import React from 'react';
import Termin from '@/components/footer/termin/Termin';
import Zertifikate from './Zertifikate';
import Menue from './Menue';
import Adresse from './Adresse';
import Copyright from './Copyright';
import Logo from '../navigation/Logo';


export default async function Footer() {
    return (
        <footer>
            <Termin />
            <Zertifikate />

            <div className='flex justify-between'>
                <div className='flex flex-col justify-end gap-4 '>
                    <Logo />
                    <Copyright />
                </div>
                <div className=''>
                    <Menue />
                </div>
                <div className=''>
                    <Adresse />
                </div>
            </div>
        </footer>
    );
}