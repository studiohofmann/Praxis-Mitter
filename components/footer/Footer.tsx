import React from 'react';
import Icons from "../navigation/Icons";
import Hyperlinks from "../navigation/Hyperlinks";
import NvsLogo from '../../public/nvs.svg';
import EmrLogo from '../../public/emr.svg';
import Link from 'next/link';

export default async function Footer() {
    return (
        <div className="bg-green400 px-4 pt-24 pb-2 flex flex-col gap-8">
            <div className="flex gap-8 justify-center">
                <Link href="/">
                    <NvsLogo className="w-full h-full" />
                </Link>
                <Link href="/">
                    <EmrLogo className="w-full h-full" />
                </Link>
            </div>
            <Icons />
            <Hyperlinks />
        </div>
    );
}