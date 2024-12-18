import React from 'react';
import Termin from '@/components/footer/termin/Termin';
import Menue from './Menue';
import Adresse from './Adresse';
import Copyright from './Copyright';
import Logo from '../navigation/Logo';
import Emrlogo from './Emrlogo';
import Nvslogo from './Nvslogo';


export default function Footer() {
    return (
        <div>
            <Termin />
            <footer>
                <div className='pt-16 pb-4 md:pb-8 grid grid-cols-2 md:grid-cols-6 gap-8'>
                    <div className='hidden md:block md:flex flex-col justify-end'>
                        <Logo />
                    </div>
                    <div className='flex items-end'>
                        <Menue />
                    </div>
                    <div className='flex items-end'>
                        <Adresse />
                    </div>
                    <div className='flex items-end'>
                        <Emrlogo />
                    </div>
                    <div className='flex md:justify-center items-end'>
                        <Nvslogo />
                    </div>
                    <div className='md:hidden flex md:justify-center items-end'>
                        <Logo />
                    </div>
                    <div className='flex md:justify-end items-end'>
                        <Copyright />
                    </div>
                </div>
            </footer>
        </div>
    );
}