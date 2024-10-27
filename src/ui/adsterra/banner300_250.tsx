/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from 'react';

interface IAtOptions {
    key: string;
    format: string;
    height: number | string;
    width: number | string;
    params: any;
}

const Banner300_250 = () => {
    const banner = useRef<HTMLDivElement | null>(null);

    const atOptions: IAtOptions = {
        key: '863ed434b359def8498b93bd1e214e18',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {}
    };

    useEffect(() => {
        if (banner.current) {
            // Clear any existing ad scripts to avoid conflicts
            banner.current.innerHTML = '';

            const conf = document.createElement('script');
            const script = document.createElement('script');

            conf.type = 'text/javascript';
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            script.type = 'text/javascript';
            script.src = `//www.highperformanceformat.com/${atOptions.key}/invoke.js`;

            banner.current.appendChild(conf);
            banner.current.appendChild(script);
        }
    }, [atOptions]);

    return (
        <div
            className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
            ref={banner}
        ></div>
    );
};

export default Banner300_250;
