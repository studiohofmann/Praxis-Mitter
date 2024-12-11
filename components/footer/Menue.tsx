import React from 'react';
import Hyperlinks from "../navigation/Hyperlinks";
import { MenuOutlined } from '@ant-design/icons';

export default function Menue() {
    return (
        <div className='flex flex-col gap-4'>
            <MenuOutlined />
            <Hyperlinks variant="footer" />
        </div>
    );
}