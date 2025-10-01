'use client';

import React from "react";

export default function About() {

    return (
        <section className="relative">
            <div className="container h-164 max-w-full w-full px-6 lg:px-8 text-center bg-cover bg-center bg-no-repeat py-20 sm:py-32 " style={{ backgroundImage: 'url(images/hero-1.jpg)' }}>
                <div className="absolute inset-0 bg-black/70 h-full">
                    <span className="container flex max-w-7xl w-100% mx-auto items-center justify-between h-full">
                        <span className="flex flex-col mx-auto my-auto">
                            <h2 className="text-6xl font-bold text-white px-10 text-left">About Us</h2>
                            <p className="mt-4 text-lg text-white max-w-2xl justify-self-start px-10 text-left">
                                We offer outstanding custom commercial millwork solutions of any scale. We have over 25 years of experience and knowledge in building supreme quality retail displays and furniture for various businesses. We always exceed customer's expectations by providing solid, durable and lasting solutions.

                                TKB Group designs, builds, and installs custom cabinetry, architectural millwork, and exhibition displays for residential and commercial clients across Ontario — while delivering commercial rollouts nationwide. From luxury kitchens in Toronto to retail fixtures, trade show booths, and national installation teams, every project is engineered for precision, durability, and on-time delivery.
                            </p>
                        </span>
                        <span className="hidden lg:block">
                            <iframe className="px-10" width="660" height="315" src="https://www.youtube.com/embed/rLFDHLixqCI?si=JXF1gsQUBHu1ujca" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            {/* <iframe className="px-10" width="760" height="354" src="https://www.youtube.com/embed/5VCfBm-i4-E?si=UafO0bLPvAoQoWkM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}