import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
            <div className="h-24 flex items-center justify-center">
            <p className="md:text-3xl font-semibold">©{currentYear} Kendrix. All rights reserved.</p>
            </div>
        </>
    );
}