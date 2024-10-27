

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from 'react';

const Banner160_600 = () => {
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
                key: '8b592fe3d087a9751935841f78115d1a',
                format: 'js',
                async: true,
                container: 'atContainer-8b592fe3d087a9751935841f78115d1a',
                params: {},
            });

            // Create the ad script dynamically
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src =
                'http' +
                (location.protocol === 'https:' ? 's' : '') +
                '://www.highperformanceformat.com/8b592fe3d087a9751935841f78115d1a/invoke.js';

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
            id="atContainer-8b592fe3d087a9751935841f78115d1a"
            className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
            ref={banner}
        ></div>
    );
};

export default Banner160_600;