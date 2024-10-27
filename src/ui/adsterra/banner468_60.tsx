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

const Banner468_60 = () => {
    const banner = useRef<HTMLDivElement | null>(null);
    const atOptions: IAtOptions = {
        key: '386795cf83ba9d1b8f890cf1de085519',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {},
    };

    useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');

            conf.type = 'text/javascript';
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            script.type = 'text/javascript';
            script.src = `//www.highperformanceformat.com/${atOptions.key}/invoke.js`;
            //!www.highperformanceformat.com/386795cf83ba9d1b8f890cf1de085519/invoke.js

            banner.current.appendChild(conf);
            banner.current.appendChild(script);

            // Cleanup function to remove scripts when component unmounts
            return () => {
                if (banner.current) {
                    banner.current.innerHTML = '';
                }
            };
        }
    }, [atOptions]);

    return (
        <div
            className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
            ref={banner}
        ></div>
    );
};

export default Banner468_60;
