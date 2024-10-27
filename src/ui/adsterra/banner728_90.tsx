/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from 'react';

const Banner728x90 = () => {
    const banner = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (banner.current) {
            // Clear any existing content in the ad container to avoid conflicts
            banner.current.innerHTML = '';

            // Ensure atAsyncOptions is defined as an array
            if (typeof (window as any).atAsyncOptions !== 'object') {
                (window as any).atAsyncOptions = [];
            }

            // Push the ad configuration to the atAsyncOptions array
            (window as any).atAsyncOptions.push({
                key: '8da95002d131f64f57e8cc70caf36fcd',
                format: 'js',
                async: true,
                container: 'atContainer-8da95002d131f64f57e8cc70caf36fcd',
                params: {},
            });

            // Create the script element dynamically
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src =
                'http' +
                (location.protocol === 'https:' ? 's' : '') +
                '://www.highperformanceformat.com/8da95002d131f64f57e8cc70caf36fcd/invoke.js';

            // Append the script to the head element to execute it
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
            id="atContainer-8da95002d131f64f57e8cc70caf36fcd"
            className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
            ref={banner}
        ></div>
    );
};

export default Banner728x90;
