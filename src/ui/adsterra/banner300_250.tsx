/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from 'react';

const Banner300_250 = () => {
    const banner = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (banner.current) {
            // Clear any existing ad scripts or content to avoid conflicts
            banner.current.innerHTML = '';

            // Ensure atAsyncOptions is defined
            if (typeof (window as any).atAsyncOptions !== 'object') {
                (window as any).atAsyncOptions = [];
            }

            // Push the ad options to atAsyncOptions
            (window as any).atAsyncOptions.push({
                key: '8743e24b0ad5f25b6050ef5de56d40c6',
                format: 'js',
                async: true,
                container: 'atContainer-8743e24b0ad5f25b6050ef5de56d40c6',
                params: {},
            });

            // Create the ad script dynamically
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src =
                'http' +
                (location.protocol === 'https:' ? 's' : '') +
                '://www.highperformanceformat.com/8743e24b0ad5f25b6050ef5de56d40c6/invoke.js';

            // Append the script to the head element
            document.head.appendChild(script);

            // Cleanup function to remove the ad content and script when the component unmounts
            return () => {
                if (banner.current) {
                    banner.current.innerHTML = '';
                }
                document.head.removeChild(script);
            };
        }
    }, []);

    return (
        <div
            id="atContainer-8743e24b0ad5f25b6050ef5de56d40c6"
            className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
            ref={banner}
        ></div>
    );
};

export default Banner300_250;
