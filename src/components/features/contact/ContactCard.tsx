"use client";
import React from "react";
import { motion } from "framer-motion";

type ContactCardProps = {
    iconSrc?: string;
    heading?: string;
    title?: string,
    phone1?: string;
    phone2?: string;
    section1?: string;
    icon1Src?: string;
    section1info?: string;
    section2?: string;
    icon2Src?: string;
    section2info?: string;
};

export default function ContactCard(props: ContactCardProps) {
    return (
        <motion.div className="bg-light-1 shadow-lg py-10 px-8 h-120 xxs:h-110 w-60 xxs:w-70 md:w-90 items-center justify-start flex flex-col text-base md:text-xl">
            {props.iconSrc && <img src={props.iconSrc} alt="icon" className="w-14 h-14 mb-4" />}
            {props.heading && <h3 className={`text-xl md:text-2xl font-bold ${props.phone1 ? "mb-6" : ""}`}>{props.heading}</h3>}
            {props.phone1 && <p className="mb-4">Direct Line: <br/>{props.phone1} </p>}
            {props.phone2 && <p>Business Line: <br/> {props.phone2}</p>}
            {props.section1 && <div className="mt-4">
                <p className="font-medium mb-3">{props.section1}</p>
                <div className=" flex flex-row items-center justify-center">
                    <img src={props.icon1Src} alt="icon" className="w-8 h-8 inline-block mr-3" />
                    <p>{props.section1info}</p></div>
            </div>
            }
            {props.section2 && <div className="mt-4">
                <p className="font-medium mb-3">{props.section2}</p>
                <div className=" flex flex-row items-center justify-center">
                    <img src={props.icon1Src} alt="icon" className="w-8 h-8 inline-block mr-3" />
                    <p>{props.section2info}</p></div>
            </div>
            } 
            {props.phone1 && props.title && <button className="h-12 w-full bg-gold text-white font-semibold mt-12 hover:bg-red-600 transition-colors">
                Click Me
                </button>}

        </motion.div>
    )
};